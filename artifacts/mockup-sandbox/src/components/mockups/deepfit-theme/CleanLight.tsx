import { Instagram, Phone, MapPin, CheckCircle2 } from "lucide-react";

export function CleanLight() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: "#F0EFED", color: "#1A1A1A", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#FFFFFF", borderBottom: "1px solid #E5E4E1", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "0.08em", color: "#1A1A1A" }}>DEEP.FIT</div>
        <div style={{ display: "flex", gap: 32, fontSize: 13, color: "#555", fontWeight: 500 }}>
          <span>ホーム</span><span>ジムについて</span><span>クラス・料金</span><span>インストラクター</span><span>お問い合わせ</span>
        </div>
        <div style={{ background: "#F2AC55", color: "#fff", padding: "10px 22px", borderRadius: 999, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
          <Phone size={14} /> 06-7777-7853
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#111111", position: "relative", overflow: "hidden", padding: "80px 0 70px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(242,172,85,0.22) 0%, transparent 55%)" }} />
        {/* Yellow accent bar like sun-gym */}
        <div style={{ position: "absolute", left: 0, top: "30%", width: "58%", height: 160, background: "#F2AC55", transform: "skewY(-4deg)", opacity: 0.95, zIndex: 0 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {["はじめてでも安心", "女性が多いジム", "無料体験受付中"].map(l => (
              <span key={l} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 999, letterSpacing: "0.06em" }}>{l}</span>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(48px,6vw,84px)", fontWeight: 700, lineHeight: 1.0, marginBottom: 24, letterSpacing: "0.01em" }}>
              <span style={{ color: "#1A1A1A", background: "#F2AC55", padding: "0 12px", display: "inline-block", marginBottom: 8 }}>楽しいから続く。</span><br />
              <span style={{ color: "#ffffff" }}>続くから変わる。</span>
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, marginBottom: 36, lineHeight: 1.8, maxWidth: 480 }}>
            JR尼崎駅徒歩10分。<br />
            女性が多く通う、サーキット×キックボクシングジム。
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ background: "#25C45A", color: "#fff", padding: "14px 28px", borderRadius: 999, fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
              ✦ LINEで無料体験を予約する
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 999, fontWeight: 600, fontSize: 14 }}>
              ご不安な点を相談する
            </div>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 52, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {[["97%", "女性会員満足度"], ["初心者OK", "から始める方多数"], ["0円", "入会金 (期間限定)"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 38, fontWeight: 700, color: "#F2AC55", lineHeight: 1 }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEMALE FOCUS STRIP - bold like sun-gym */}
      <section style={{ background: "#FFFFFF", padding: "56px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
            <div style={{ width: 5, height: 40, background: "#F2AC55", borderRadius: 3 }} />
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1A1A1A", lineHeight: 1.2 }}>女性が多く通っている理由</h2>
              <p style={{ color: "#888", fontSize: 13, marginTop: 4 }}>初心者の方も安心して始められます</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              ["👩", "女性会員が半数以上", "和気藹々とした雰囲気"],
              ["🥊", "初心者向けクラス", "一から丁寧に指導"],
              ["🌙", "夜間も営業中", "仕事帰りに通いやすい"],
              ["💬", "LINEで気軽に相談", "入会前の疑問もOK"],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#F0EFED", borderRadius: 14, padding: "22px 16px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#1A1A1A", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section style={{ background: "#F0EFED", padding: "72px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <div style={{ width: 5, height: 40, background: "#F2AC55", borderRadius: 3 }} />
            <div>
              <span style={{ background: "#F2AC55", color: "#fff", fontSize: 11, fontWeight: 900, padding: "3px 12px", borderRadius: 4, letterSpacing: "0.12em", display: "inline-block", marginBottom: 6 }}>CAMPAIGN</span>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1A1A1A", lineHeight: 1.2 }}>夏までに変わる。5大特典</h2>
              <p style={{ color: "#888", fontSize: 13, marginTop: 4 }}>5月7日〜7月31日の期間限定</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
            {[
              { label: "特典①", title: "体験料", from: "通常 2,000円", to: "無料" },
              { label: "特典②", title: "入会金", from: "通常 10,000円", to: "無料" },
              { label: "特典③", title: "翌月会費", from: "女性 11,000円〜", to: "無料" },
            ].map(item => (
              <div key={item.label} style={{ background: "#FFFFFF", borderRadius: 12, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ background: "#F2AC55", color: "#fff", fontSize: 10, fontWeight: 900, padding: "2px 10px", borderRadius: 4, display: "inline-block", marginBottom: 10, letterSpacing: "0.1em" }}>{item.label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: "#AAA", textDecoration: "line-through", marginBottom: 4 }}>{item.from}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 38, fontWeight: 700, color: "#F2AC55", lineHeight: 1 }}>{item.to}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: 16, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <div>
              <div style={{ color: "#999", fontSize: 12, marginBottom: 3 }}>入会月の節約額</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 44, fontWeight: 700, color: "#F2AC55", lineHeight: 1 }}>最大 23,000円〜</div>
              <div style={{ color: "#999", fontSize: 12, marginTop: 3 }}>＋月会費永久割引が継続</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {["継続縛りなし", "違約金なし", "女性会員多数", "初心者歓迎"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, color: "#444", fontSize: 13 }}>
                  <CheckCircle2 size={13} color="#F2AC55" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ background: "#FFFFFF", padding: "56px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <Instagram size={28} color="#F2AC55" style={{ marginBottom: 10 }} />
            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A1A", marginBottom: 8 }}>インスタをフォローして<br /><span style={{ color: "#F2AC55" }}>体験料2,000円→無料</span></h3>
            <p style={{ color: "#888", fontSize: 13, lineHeight: 1.8 }}>① @deep.amagasaki をフォロー<br />② DMまたはLINEで「フォローしました」と送る</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ width: 140, height: 140, background: "#F0EFED", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Instagram size={22} color="#C8C6C3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A1A1A", color: "rgba(255,255,255,0.5)", padding: "36px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", color: "#F2AC55", fontSize: 20, fontWeight: 700 }}>DEEP.FIT</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}><MapPin size={12} />JR尼崎駅 徒歩10分</div>
        <div>© 2025 DEEP.FIT</div>
      </footer>
    </div>
  );
}
