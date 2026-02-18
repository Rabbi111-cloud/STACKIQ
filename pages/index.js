"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Optional: animate bubbles or other features if needed
  }, []);

  return (
    <div className="landing-container" style={{ position: "relative", overflow: "hidden" }}>
      
      {/* Bubbles Background */}
      <div className="bubbles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      {/* Navbar */}
      <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", position: "relative", zIndex: 10 }}>
        <h1 className="logo" style={{ fontWeight: "bold", fontSize: "1.8rem" }}>StackIQ</h1>
        <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => router.push("/company")} style={buttonStyle("#00c851", "#007e33")}>Company Dashboard</button>
          <button onClick={() => router.push("/signup")} style={buttonStyle("#0070f3", "#005bb5")}>Sign Up</button>
          <button onClick={() => router.push("/login")} style={buttonStyle("#ffbb33", "#ffaa00")}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero" style={{ textAlign: "center", padding: "120px 20px", position: "relative", zIndex: 10 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#fff" }}>Take Your Backend Skills to the Next Level</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "40px", color: "#eee" }}>
          Test, score, and prove your backend developer skills with our AI-powered platform.
        </p>
        <div className="hero-buttons" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button onClick={() => router.push("/signup")} style={buttonStyle("#0070f3", "#005bb5")}>Get Started</button>
          <button onClick={() => router.push("/login")} style={buttonStyle("#ffbb33", "#ffaa00")}>Login</button>
        </div>
      </main>

      {/* Features Section */}
      <section className="features" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "60px 20px", position: "relative", zIndex: 10 }}>
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

      {/* Testimonial Section */}
      <section className="testimonials" style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "rgba(255,255,255,0.05)", position: "relative", zIndex: 10 }}>
        <h2 style={{ marginBottom: "40px", color: "#fff" }}>What Our Users Say</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {[
            { name: "Alice", quote: "StackIQ helped me land my first backend developer role!" },
            { name: "John", quote: "The AI scoring is amazing and really fair." },
            { name: "Sofia", quote: "I improved my skills faster than I thought possible!" },
          ].map((t, i) => (
            <div key={i} style={{ maxWidth: "300px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "10px", padding: "20px", color: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              <p style={{ fontStyle: "italic" }}>"{t.quote}"</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", position: "relative", zIndex: 10, color: "#fff" }}>
        <p>&copy; 2026 StackIQ. All rights reserved.</p>
      </footer>

      {/* Bubble Styles */}
      <style jsx>{`
        .bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 0;
        }
        .bubble {
          position: absolute;
          bottom: -100px;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: rise 15s infinite ease-in;
        }
        ${[...Array(20)].map((_, i) => `.bubble:nth-child(${i+1}) { left: ${Math.random()*100}%; animation-duration: ${10+Math.random()*10}s; width: ${10+Math.random()*30}px; height: ${10+Math.random()*30}px; }`).join("\n")}
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-1200px) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// Button style function
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
});

// Feature card style
const featureCardStyle = () => ({
  maxWidth: "300px",
  textAlign: "center",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  backgroundColor: "rgba(255,255,255,0.05)",
  color: "#fff",
});
