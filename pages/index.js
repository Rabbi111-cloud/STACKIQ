"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px" }}>
        <h1 className="logo" style={{ fontWeight: "bold", fontSize: "1.8rem" }}>StackIQ</h1>
        <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => router.push("/company")} style={buttonStyle("#00c851", "#007e33")}>Company Dashboard</button>
          <button onClick={() => router.push("/signup")} style={buttonStyle("#0070f3", "#005bb5")}>Sign Up</button>
          <button onClick={() => router.push("/login")} style={buttonStyle("#ffbb33", "#ffaa00")}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero" style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Take Your Backend Skills to the Next Level</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "40px" }}>Test, score, and prove your backend developer skills with our AI-powered platform.</p>
        <div className="hero-buttons" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button onClick={() => router.push("/signup")} style={buttonStyle("#0070f3", "#005bb5")}>Get Started</button>
          <button onClick={() => router.push("/login")} style={buttonStyle("#ffbb33", "#ffaa00")}>Login</button>
        </div>
      </main>

      {/* Features Section */}
      <section className="features" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "60px 20px" }}>
        <div className="feature-card" style={featureCardStyle()}>
          <h2>AI-Powered Tests</h2>
          <p>Get scored automatically with intelligent AI evaluation.</p>
        </div>
        <div className="feature-card" style={featureCardStyle()}>
          <h2>Track Progress</h2>
          <p>See your growth over time and improve continuously.</p>
        </div>
        <div className="feature-card" style={featureCardStyle()}>
          <h2>Join Companies</h2>
          <p>Top companies can view your scores and invite you to interviews.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px" }}>
        <p>&copy; 2026 StackIQ. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Reusable button style function
const buttonStyle = (bgColor, hoverColor) => ({
  padding: "12px 20px",
  borderRadius: "6px",
  backgroundColor: bgColor,
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "0.3s",
  fontSize: "1rem",
  outline: "none",
  margin: "0 5px",
  onMouseOver: e => e.currentTarget.style.backgroundColor = hoverColor,
  onMouseOut: e => e.currentTarget.style.backgroundColor = bgColor
});

// Feature card style
const featureCardStyle = () => ({
  maxWidth: "300px",
  textAlign: "center",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
});
