const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0B0F15" }}>
      <img
        src={`${base}gym-interior.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="DEEP.FIT ジム内観"
        style={{ opacity: 0.3 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg, rgba(11,15,21,0.92) 45%, rgba(11,15,21,0.45) 100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(11,15,21,0.85) 100%)" }}
      />

      <div
        className="relative z-10 flex flex-col justify-center h-full"
        style={{ paddingLeft: "7vw", paddingTop: "6vh", paddingBottom: "6vh" }}
      >
        <div
          style={{
            fontSize: "1.8vw",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 400,
            letterSpacing: "0.25em",
            color: "#EAA53B",
            marginBottom: "2.5vh",
            textTransform: "uppercase",
          }}
        >
          過去最大キャンペーン
        </div>

        <div
          style={{
            fontSize: "11vw",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            lineHeight: 0.88,
            marginBottom: "0.5vh",
          }}
        >
          夏までに
        </div>
        <div
          style={{
            fontSize: "11vw",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#EAA53B",
            lineHeight: 0.88,
            marginBottom: "5vh",
          }}
        >
          変わる。
        </div>

        <div className="flex items-center" style={{ gap: "1.5vw", marginBottom: "2.5vh" }}>
          <div style={{ width: "3.5vw", height: "2px", background: "#EAA53B" }} />
          <div
            style={{
              fontSize: "2vw",
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "0.08em",
            }}
          >
            2025年5月7日（水）〜 7月31日（木）
          </div>
        </div>

        <div
          style={{
            fontSize: "2vw",
            fontFamily: "Noto Sans JP, sans-serif",
            fontWeight: 700,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.05em",
          }}
        >
          DEEP.FIT — サーキット×キックボクシングフィットネスジム
        </div>
      </div>

      <img
        src={`${base}deepfit-logo.png`}
        crossOrigin="anonymous"
        alt="DEEP.FIT"
        style={{
          position: "absolute",
          bottom: "4.5vh",
          left: "7vw",
          height: "5.5vh",
          objectFit: "contain",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "5.5vh",
          right: "6vw",
          width: "2px",
          height: "8vh",
          background: "linear-gradient(to bottom, #EAA53B, transparent)",
        }}
      />
    </div>
  );
}
