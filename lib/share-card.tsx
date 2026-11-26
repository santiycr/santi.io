import { site } from "@/content/site";

export function ShareCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3efe6",
        color: "#1a1814",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.04em" }}>
        santi.io
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, maxWidth: 980 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, marginTop: 28 }}>{site.title}</div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 16, color: "#3f3a33" }}>
          {site.location}
        </div>
      </div>
    </div>
  );
}
