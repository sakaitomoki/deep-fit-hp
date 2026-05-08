const base = import.meta.env.BASE_URL;

export default function Slide4Bonus() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex"
      style={{ background: "#0F1520" }}
    >
      <div
        className="flex flex-col justify-center"
        style={{
          width: "58%",
          paddingLeft: "6vw",
          paddingRight: "4vw",
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
          特典⑤ — Bonus
        </div>
        <div
          style={{
            fontSize: "3.8vw",
            fontFamily: "Noto Sans JP, sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: "1.5vh",
          }}
        >
          3ヶ月継続ボーナス
        </div>
        <div style={{ width: "4vw", height: "3px", background: "#EAA53B", marginBottom: "4vh" }} />

        <div
          style={{
            background: "rgba(234,165,59,0.1)",
            border: "1px solid rgba(234,165,59,0.3)",
            padding: "4vh 3vw",
            marginBottom: "3vh",
          }}
        >
          <div
            style={{
              fontSize: "2.5vw",
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              marginBottom: "1.5vh",
            }}
          >
            3ヶ月継続で
          </div>
          <div
            style={{
              fontSize: "5.5vw",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700,
              color: "#EAA53B",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              marginBottom: "1.5vh",
            }}
          >
            1ヶ月分
          </div>
          <div
            style={{
              fontSize: "3.2vw",
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            会費キャッシュバック
          </div>
          <div
            style={{
              fontSize: "1.8vw",
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              marginTop: "1.5vh",
            }}
          >
            フルタイム会員のみ対象
          </div>
        </div>

        <div className="flex items-center" style={{ gap: "1.5vw" }}>
          <div style={{ width: "2vw", height: "2px", background: "#EAA53B" }} />
          <div
            style={{
              fontSize: "2.2vw",
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            縛りなし — いつでも退会可
          </div>
        </div>
      </div>

      <div
        className="relative"
        style={{ width: "42%", overflow: "hidden" }}
      >
        <img
          src={`${base}smith-machine.jpeg`}
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
          alt="スミスマシン"
          style={{ objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0F1520 0%, rgba(15,21,32,0.05) 40%, rgba(15,21,32,0.3) 100%)",
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
