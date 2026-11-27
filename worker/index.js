// 動画の部分配信（Range リクエスト）用 Worker。
// Cloudflare の静的アセット配信は Range に 206 を返さないため、
// iPhone（Safari）で動画が再生できない。/video/* だけここで切り出して返す。
// それ以外のリクエストはそのまま静的アセットに渡す。

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (!pathname.startsWith("/video/")) return env.ASSETS.fetch(request);

    // アセット側には Range を渡さず、常に全体を受け取る
    const assetHeaders = new Headers(request.headers);
    assetHeaders.delete("Range");
    const asset = await env.ASSETS.fetch(new Request(request, { headers: assetHeaders }));

    const isVideo = asset.headers.get("Content-Type")?.startsWith("video/");
    if (asset.status !== 200 || !isVideo) return asset;

    const headers = new Headers(asset.headers);
    headers.set("Accept-Ranges", "bytes");
    const full = () => new Response(asset.body, { status: 200, headers });

    const range = request.headers.get("Range");
    if (request.method !== "GET" || !range) return full();

    // If-Range が現在の版と一致しなければ、全体を返す
    const ifRange = request.headers.get("If-Range");
    if (ifRange && ifRange !== asset.headers.get("ETag")) return full();

    // 単一範囲のみ対応。解釈できない指定は全体を返す
    const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (!match || (match[1] === "" && match[2] === "")) return full();
    if (match[1] !== "" && match[2] !== "" && Number(match[2]) < Number(match[1])) return full();

    const body = await asset.arrayBuffer();
    const size = body.byteLength;

    let start;
    let end = size - 1;
    if (match[1] === "") {
      // bytes=-N は末尾 N バイト
      start = Math.max(size - Number(match[2]), 0);
    } else {
      start = Number(match[1]);
      if (match[2] !== "") end = Math.min(Number(match[2]), size - 1);
    }

    if (start >= size) {
      return new Response(null, {
        status: 416,
        headers: { "Content-Range": `bytes */${size}`, "Accept-Ranges": "bytes" },
      });
    }

    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(new Uint8Array(body, start, end - start + 1), { status: 206, headers });
  },
};
