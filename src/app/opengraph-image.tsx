import { ImageResponse } from "next/og";

export const alt = "B-Way — Technology & People Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #eef4ff 0%, #ffffff 45%, #e8f7ff 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #0044CC 0%, #00C2FF 100%)",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            BGS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 28,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.2,
            }}
          >
            <span>Broadway Global</span>
            <span>Solutions</span>
          </div>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Technology & People Solutions for Modern Businesses
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#64748b",
            maxWidth: 820,
          }}
        >
          Digital solutions, workforce support & compliant growth — Singapore & beyond.
        </div>
      </div>
    ),
    size,
  );
}
