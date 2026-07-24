import { ImageResponse } from "next/og";

export const alt = "WebTech Solutions — We Build Software That Ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #060D1E 0%, #0A1F44 60%, #152F63 100%)",
          color: "#F7F9FC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          WebTech
          <span style={{ color: "#6FB8EE" }}> Solutions</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          We build software that actually ships.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "rgba(247,249,252,0.7)",
          }}
        >
          Web Development · WordPress · E-commerce · AI Integration — Pakistan
        </div>
      </div>
    ),
    { ...size }
  );
}
