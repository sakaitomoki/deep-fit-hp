import { Instagram, Phone, MapPin, Star, CheckCircle2, ChevronRight } from "lucide-react";

export function WarmBeige() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: "#FAF5EE", color: "#3D3530", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#FAF5EE", borderBottom: "1px solid #EDE3D8", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "0.08em", color: "#3D3530" }}>DEEP.FIT</div>
        <div style={{ display: "flex", gap: 32, fontSize: 13, color: "#6B5C52", fontWeight: 500 }}>
          <span>ホーム</span><span>ジムについて</span><span>クラス・料金</span><span>インストラクター</span><span>お問い合わせ</span>
        </div>
        <div style={{ background: "#D99A40", color: "#fff", padding: "10px 22px", borderRadius: 999, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
          <Phone size={14} /> 06-7777-7853
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A1208 0%, #2C1F10 60%, #3D2A16 100%)", position: "relative", overflow: "hidden", padding: "80px 0 70px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(242,172,85,0.18) 0%, transparent 65%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {["はじめてでも安心", "女性が多く通うジム", "まずは無料体験から"].map(l => (
              <span key={l} style={{ background: "rgba(242,172,85,0.18)", border: "1px solid rgba(242,172,85,0.4)", color: "#F2AC55", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 999, letterSpacing: "0.08em" }}>{l}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(48px,6vw,82px)", fontWeight: 700, color: "#fff", lineHeight: 1.05, marginBottom: 16, letterSpacing: "0.02em" }}>
            楽しいから続く。<br />
            <span style={{ color: "#F2AC55" }}>続くから変わる。</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 36, lineHeight: 1.8 }}>
            JR尼崎駅徒歩10分。<br />
            女性も多く通う、サーキット×キックボクシングジム。
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <div style={{ background: "#25C45A", color: "#fff", padding: "14px 28px", borderRadius: 999, fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
              ✦ LINEで無料体験を予約する
            </div>
            <div style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff", padding: "14px 28px", borderRadius: 999, fontWeight: 600, fontSize: 14 }}>
              ご不安な点を相談する
            </div>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {[["97%", "女性会員満足度"], ["初心者", "からでも安心"], ["0円", "入会金 (期間限定)"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 36, fontWeight: 700, color: "#F2AC55", lineHeight: 1 }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section style={{ background: "#FAF5EE", padding: "72px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ background: "rgba(217,154,64,0.15)", color: "#D99A40", fontSize: 11, fontWeight: 900, padding: "5px 18px", borderRadius: 999, letterSpacing: "0.18em", display: "inline-block", marginBottom: 14 }}>過去最大キャンペーン</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "#3D3530", lineHeight: 1.1, marginBottom: 10 }}>夏までに変わる。<span style={{ color: "#D99A40" }}>5大特典</span></h2>
            <p style={{ color: "#8C7B72", fontSize: 14 }}>5月7日〜7月31日の期間限定。まずは無料体験から。</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
            {[
              { label: "特典①", title: "体験料", from: "通常 2,000円", to: "無料" },
              { label: "特典②", title: "入会金", from: "通常 10,000円", to: "無料" },
              { label: "特典③", title: "翌月会費", from: "女性 11,000円〜", to: "無料" },
            ].map(item => (
              <div key={item.label} style={{ background: "#fff", border: "1.5px solid #EDE3D8", borderRadius: 16, padding: "22px 20px", textAlign: "center", boxShadow: "0 2px 12px rgba(61,53,48,0.06)" }}>
                <div style={{ background: "rgba(217,154,64,0.14)", color: "#D99A40", fontSize: 11, fontWeight: 900, padding: "3px 12px", borderRadius: 999, display: "inline-block", marginBottom: 10, letterSpacing: "0.1em" }}>{item.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#3D3530", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#B09A8E", textDecoration: "line-through", marginBottom: 6 }}>{item.from}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 40, fontWeight: 700, color: "#D99A40", lineHeight: 1 }}>{item.to}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1.5px solid #EDE3D8", borderRadius: 20, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 12px rgba(61,53,48,0.06)" }}>
            <div>
              <div style={{ color: "#8C7B72", fontSize: 13, marginBottom: 4 }}>入会月の節約額</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 48, fontWeight: 700, color: "#D99A40", lineHeight: 1 }}>最大 23,000円〜</div>
              <div style={{ color: "#8C7B72", fontSize: 12, marginTop: 4 }}>＋月会費永久割引が継続</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
              {["継続縛りなし", "違約金なし", "女性も多く通うジム", "初心者歓迎"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, color: "#6B5C52", fontSize: 13 }}>
                  <CheckCircle2 size={14} color="#D99A40" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEMALE FOCUS STRIP */}
      <section style={{ background: "linear-gradient(135deg, #F5EBE0 0%, #F0E0D0 100%)", padding: "56px 0", borderTop: "1px solid #EDE3D8", borderBottom: "1px solid #EDE3D8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 800, color: "#3D3530", marginBottom: 8 }}>女性が多く通っている理由</h2>
          <p style={{ color: "#8C7B72", fontSize: 14, marginBottom: 36 }}>初めての方でも安心して通い続けられる環境を大切にしています</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              ["👩", "女性会員が半数以上", "和気藹々とした雰囲気"],
              ["🥊", "初心者向けクラス", "一から丁寧に指導"],
              ["🌙", "夜間も営業中", "仕事帰りに通いやすい"],
              ["💬", "LINEで気軽に相談", "入会前の疑問もOK"],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", borderRadius: 16, padding: "24px 16px", boxShadow: "0 2px 10px rgba(61,53,48,0.06)", border: "1px solid #EDE3D8" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#3D3530", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 12, color: "#8C7B72", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ background: "#FAF5EE", padding: "64px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <Instagram size={32} color="#D99A40" style={{ marginBottom: 12 }} />
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#3D3530", marginBottom: 6 }}>インスタをフォローして<br /><span style={{ color: "#D99A40" }}>体験料2,000円→無料</span></h3>
            <p style={{ color: "#8C7B72", fontSize: 13, lineHeight: 1.8 }}>① @deep.amagasaki をフォロー<br />② DMまたはLINEで「フォローしました」と送る</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {["gym-interior", "kickboxing", "about"].map(s => (
              <div key={s} style={{ width: 140, height: 140, background: "#EDE3D8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Instagram size={24} color="#C4A882" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2C1F10", color: "rgba(255,255,255,0.6)", padding: "40px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: "#F2AC55", fontSize: 20, fontWeight: 700 }}>DEEP.FIT</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}><MapPin size={12} />JR尼崎駅 徒歩10分</div>
        <div>© 2025 DEEP.FIT</div>
      </footer>
    </div>
  );
}
