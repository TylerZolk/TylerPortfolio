import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1rem",
        fontFamily: "var(--font-mono)",
      }}
    >
      <p style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--teal)", textTransform: "uppercase" }}>
        Error 404
      </p>
      <h1 style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>
        Not Found
      </h1>
      <p style={{ color: "var(--text-dim)", maxWidth: "340px", lineHeight: 1.7, fontSize: "0.9rem" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "0.5rem",
          background: "var(--teal)",
          color: "var(--bg)",
          padding: "0.7rem 1.5rem",
          borderRadius: "4px",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Go Home
      </Link>
    </main>
  );
}
