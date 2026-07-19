import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/lib/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const title = caseStudy?.title ?? "Case study";
  const category = caseStudy?.category ?? "Abhijith M D";

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
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            color: "#1a7347",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {category}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 700,
            color: "#1f1f1f",
            lineHeight: 1.2,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "#5f6368",
          }}
        >
          Case study — Abhijith M D
        </div>
      </div>
    ),
    { ...size }
  );
}
