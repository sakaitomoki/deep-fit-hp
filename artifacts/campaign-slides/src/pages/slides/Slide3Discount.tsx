const base = import.meta.env.BASE_URL;

export default function Slide3Discount() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex"
      style={{ background: "#0B0F15" }}
    >
      <div
        className="flex flex-col justify-center"
        style={{
          width: "55%",
          paddingLeft: "6vw",
          paddingRight: "3vw",
          paddingTop: "6vh",
          paddingBottom: "6vh",
        }}
      >
        <div
          style={{
            fontSize: "1.6vw",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 400,
            letterSpacing: "0.25em",
            color: "#EAA53B",
            textTransform: "uppercase",
            marginBottom: "1.5vh",
          }}
        >
          当日入会限定
        </div>
        <div
          style={{
            fontSize: "4vw",
            fontFamily: "Noto Sans JP, sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: "1.5vh",
          }}
        >
          月会費 永久割引
        </div>
        <div style={{ width: "4vw", height: "3px", background: "#EAA53B", marginBottom: "4vh" }} />

        <div className="flex flex-col" style={{ gap: "3vh" }}>
          <div style={{ borderLeft: "3px solid #EAA53B", paddingLeft: "2vw" }}>
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "0.5vh",
              }}
            >
              女性フルタイム
            </div>
            <div className="flex items-baseline" style={{ gap: "1.2vw" }}>
              <div
                style={{
                  fontSize: "2vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "line-through",
                }}
              >
                ¥11,000
              </div>
              <div
                style={{
                  fontSize: "1.8vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                →
              </div>
              <div
                style={{
                  fontSize: "7vw",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  color: "#EAA53B",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                ¥9,900
              </div>
              <div
                style={{
                  fontSize: "2vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                  whiteSpace: "nowrap",
                }}
              >
                /月 永久
              </div>
            </div>
          </div>

          <div style={{ borderLeft: "3px solid rgba(234,165,59,0.4)", paddingLeft: "2vw" }}>
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "0.5vh",
              }}
            >
              男性フルタイム
            </div>
            <div className="flex items-baseline" style={{ gap: "1.2vw" }}>
              <div
                style={{
                  fontSize: "2vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "line-through",
                }}
              >
                ¥13,200
              </div>
              <div
                style={{
                  fontSize: "1.8vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                →
              </div>
              <div
                style={{
                  fontSize: "7vw",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  color: "#EAA53B",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                ¥12,100
              </div>
              <div
                style={{
                  fontSize: "2vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                  whiteSpace: "nowrap",
                }}
              >
                /月 永久
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "4vh",
            fontSize: "2vw",
            fontFamily: "Noto Sans JP, sans-serif",
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          特典④ — 体験当日入会のみ適用
        </div>
      </div>

      <div className="relative" style={{ width: "45%", overflow: "hidden" }}>
        <img
          src={`${base}class-kickboxing.png`}
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
          alt="キックボクシングクラス"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0B0F15 0%, rgba(11,15,21,0.1) 35%, rgba(11,15,21,0.2) 100%)",
          }}
        />
      </div>

      <img
        src={`${base}deepfit-logo.png`}
        crossOrigin="anonymous"
        alt="DEEP.FIT"
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          height: "4.5vh",
          objectFit: "contain",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
