const base = import.meta.env.BASE_URL;

export default function Slide2ThreeFree() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0B0F15 0%, #0F1520 100%)",
        paddingLeft: "6vw",
        paddingRight: "6vw",
        paddingTop: "5vh",
        paddingBottom: "5vh",
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
        Campaign Benefits
      </div>
      <div
        style={{
          fontSize: "4.5vw",
          fontFamily: "Oswald, sans-serif",
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "0.02em",
          lineHeight: 1,
          marginBottom: "1.5vh",
        }}
      >
        3大無料特典
      </div>
      <div style={{ width: "5vw", height: "3px", background: "#EAA53B", marginBottom: "4vh" }} />

      <div className="flex" style={{ gap: "2.5vw", flex: 1 }}>
        <div
          className="flex flex-col justify-between"
          style={{
            flex: 1,
            background: "rgba(234,165,59,0.08)",
            border: "1px solid rgba(234,165,59,0.25)",
            padding: "4vh 2.5vw",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.5vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.1em",
                marginBottom: "1vh",
              }}
            >
              特典①
            </div>
            <div
              style={{
                fontSize: "2.8vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "3vh",
              }}
            >
              体験料
            </div>
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "line-through",
                marginBottom: "0.5vh",
              }}
            >
              通常 ¥2,000
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "9vw",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                color: "#EAA53B",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              無料
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{
            flex: 1,
            background: "rgba(234,165,59,0.08)",
            border: "1px solid rgba(234,165,59,0.25)",
            padding: "4vh 2.5vw",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.5vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.1em",
                marginBottom: "1vh",
              }}
            >
              特典②
            </div>
            <div
              style={{
                fontSize: "2.8vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "3vh",
              }}
            >
              入会金
            </div>
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "line-through",
                marginBottom: "0.5vh",
              }}
            >
              通常 ¥10,000
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "9vw",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                color: "#EAA53B",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              無料
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{
            flex: 1,
            background: "rgba(234,165,59,0.08)",
            border: "1px solid rgba(234,165,59,0.25)",
            padding: "4vh 2.5vw",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.5vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.1em",
                marginBottom: "1vh",
              }}
            >
              特典③
            </div>
            <div
              style={{
                fontSize: "2.8vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "3vh",
              }}
            >
              翌月会費
            </div>
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "line-through",
                marginBottom: "0.5vh",
              }}
            >
              女性 ¥11,000 / 男性 ¥13,200
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "9vw",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                color: "#EAA53B",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              無料
            </div>
          </div>
        </div>
      </div>

      <img
        src={`${base}deepfit-logo.png`}
        crossOrigin="anonymous"
        alt="DEEP.FIT"
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "6vw",
          height: "4.5vh",
          objectFit: "contain",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
