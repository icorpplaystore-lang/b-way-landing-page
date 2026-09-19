import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #0044CC 0%, #00C2FF 100%)",
          color: "white",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        BGS
      </div>
    ),
    size,
  );
}
