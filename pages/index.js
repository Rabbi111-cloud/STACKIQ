"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <h1 className="logo">StackIQ</h1>
        <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
          <button
            onClick={() => router.push("/company")}
            className="btn btn-secondary"
          >
            Company Dashboard
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="btn btn-primary"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
            className="btn btn-outline"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Take Your Backend Skills to the Next Level</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "40px" }}>
          Test, score, and prove your backend developer skills with our AI-powered platform.
        </p>
        <div className="hero-buttons" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button
            onClick={() => router.push("/signup")}
            className="btn btn-primary"
          >
            Get Started
          </button>
          <button
            onClick={() => router.push("/login")}
            className="btn btn-secondary"
          >
            Login
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="features" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "60px 20px" }}>
        <div className="feature-card" style={{ maxWidth: "300px", textAlign: "center" }}>
          <h2>AI-Powered Tests</h2>
          <p>Get scored automatically with intelligent AI evaluation.</p>
        </div>
        <div className="feature-card" style={{ maxWidth: "300px", textAlign: "center" }}>
          <h2>Track Progress</h2>
          <p>See your growth over time and improve continuously.</p>
        </div>
        <div className="feature-card" style={{ maxWidth: "300px", textAlign: "center" }}>
          <h2>Join Companies</h2>
          <p>Top companies can view your scores and invite you to interviews.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ textAlign: "center", padding: "20px" }}>
        <p>&copy; 2026 StackIQ. All rights reserved.</p>
      </footer>
    </div>
  );
}
