import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f5f0ff 0%, #eef0fb 50%, #ffffff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            color: "#1f1f1f",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          Abhijith M D
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 64,
            fontWeight: 800,
            color: "#1f1f1f",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Solving real problems through human-centered design.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#3c4043",
            maxWidth: 900,
          }}
        >
          Product & UX designer — B2B SaaS, CRMs, and AI-first product design.
        </div>
      </div>
    ),
    { ...size }
  );
}
