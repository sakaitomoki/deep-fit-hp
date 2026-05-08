const base = import.meta.env.BASE_URL;

export default function Slide5CTA() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: "#0B0F15" }}
    >
      <img
        src={`${base}hero-deepfit.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="DEEP.FIT"
        style={{ opacity: 0.2 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(11,15,21,0.5) 0%, rgba(11,15,21,0.75) 100%)",
        }}
      />

      <div
        className="relative z-10 flex h-full"
        style={{ paddingLeft: "6vw", paddingRight: "6vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div className="flex flex-col justify-between h-full" style={{ width: "50%" }}>
          <div>
            <img
              src={`${base}deepfit-logo.png`}
              crossOrigin="anonymous"
              alt="DEEP.FIT"
              style={{ height: "6vh", objectFit: "contain", objectPosition: "left" }}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: "1.6vw",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color: "#EAA53B",
                marginBottom: "1.5vh",
              }}
            >
              キャンペーン期間
            </div>
            <div
              style={{
                fontSize: "3.5vw",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "0.5vh",
              }}
            >
              5月7日（水）
            </div>
            <div
              style={{
                fontSize: "2.2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "0.5vh",
              }}
            >
              〜
            </div>
            <div
              style={{
                fontSize: "3.5vw",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "3vh",
              }}
            >
              7月31日（木）
            </div>
            <div style={{ width: "4vw", height: "2px", background: "#EAA53B", marginBottom: "3vh" }} />
            <div
              style={{
                fontSize: "2.2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "1vh",
              }}
            >
              まずは無料体験から
            </div>
            <div
              style={{
                fontSize: "2vw",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              LINE または電話でご予約ください
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center"
          style={{
            width: "50%",
            paddingLeft: "5vw",
            borderLeft: "1px solid rgba(234,165,59,0.2)",
          }}
        >
          <div
            style={{
              fontSize: "1.5vw",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.2em",
              color: "#EAA53B",
              marginBottom: "3vh",
            }}
          >
            ジム情報
          </div>

          <div className="flex flex-col" style={{ gap: "2.5vh" }}>
            <div>
              <div
                style={{
                  fontSize: "1.5vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "0.3vh",
                }}
              >
                電話
              </div>
              <div
                style={{
                  fontSize: "2.5vw",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.05em",
                }}
              >
                06-7777-7853
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "1.5vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "0.3vh",
                }}
              >
                LINE
              </div>
              <div
                style={{
                  fontSize: "2.2vw",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  color: "#EAA53B",
                }}
              >
                lin.ee/uqfaBm6
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "1.5vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "0.3vh",
                }}
              >
                Instagram
              </div>
              <div
                style={{
                  fontSize: "2.2vw",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  color: "#EAA53B",
                }}
              >
                @deep.amagasaki
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "1.5vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "0.3vh",
                }}
              >
                アクセス
              </div>
              <div
                style={{
                  fontSize: "2vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.5,
                }}
              >
                兵庫県尼崎市長洲東通1-9-25 2F
              </div>
              <div
                style={{
                  fontSize: "2vw",
                  fontFamily: "Noto Sans JP, sans-serif",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                JR尼崎駅 徒歩10分
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
