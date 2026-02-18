"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh", background: "linear-gradient(135deg, #6e8efb, #a777e3)" }}>
      
      {/* Floating Bubbles */}
      <div className="bubbles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", position: "relative", zIndex: 10 }}>
        <h1 style={{ fontWeight: "bold", fontSize: "1.8rem", color: "#fff" }}>StackIQ</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => router.push("/company")} style={buttonStyle("#00c851", "#007e33")}>Company Dashboard</button>
          <button onClick={() => router.push("/signup")} style={buttonStyle("#0070f3", "#005bb5")}>Sign Up</button>
          <button onClick={() => router.push("/login")} style={buttonStyle("#ffbb33", "#ffaa00")}>Login</button>
        </div>
      </nav>

      {/* Hero */}
      <main style={{ textAlign: "center", padding: "120px 20px", color: "#fff", position: "relative", zIndex: 10 }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Take Your Backend Skills to the Next Level</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "40px" }}>
          Test, score, and prove your backend developer skills with our AI-powered platform.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button onClick={() => router.push("/signup")} style={buttonStyle("#0070f3", "#005bb5")}>Get Started</button>
          <button onClick={() => router.push("/login")} style={buttonStyle("#ffbb33", "#ffaa00")}>Login</button>
        </div>
      </main>

      {/* Features */}
      <section style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "60px 20px", position: "relative", zIndex: 10 }}>
        {[
          { title: "AI-Powered Tests", desc: "Get scored automatically with intelligent AI evaluation." },
          { title: "Track Progress", desc: "See your growth over time and improve continuously." },
          { title: "Join Companies", desc: "Top companies can view your scores and invite you to interviews." }
        ].map((f, i) => (
          <div key={i} style={{
            maxWidth: "300px",
            textAlign: "center",
            padding: "25px",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            color: "#fff",
            transition: "transform 0.3s",
            cursor: "pointer"
          }} onMouseEnter={e => e.currentTarget.style.transform="translateY(-10px)"} onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}>
            <h2>{f.title}</h2>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section style={{ textAlign: "center", padding: "60px 20px", position: "relative", zIndex: 10 }}>
        <h2 style={{ color: "#fff", marginBottom: "40px" }}>What Our Users Say</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {[
            { name: "Alice", quote: "StackIQ helped me land my first backend developer role!" },
            { name: "John", quote: "The AI scoring is amazing and really fair." },
            { name: "Sofia", quote: "I improved my skills faster than I thought possible!" },
          ].map((t, i) => (
            <div key={i} style={{
              maxWidth: "300px",
              padding: "25px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              color: "#fff",
              fontStyle: "italic"
            }}>
              <p>"{t.quote}"</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", color: "#fff", position: "relative", zIndex: 10 }}>
        <p>&copy; 2026 StackIQ. All rights reserved.</p>
      </footer>

      {/* Bubble animation CSS */}
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
          background: rgba(255,255,255,0.2);
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

// Reusable button style
const buttonStyle = (bgColor, hoverColor) => ({
  padding: "12px 20px",
  borderRadius: "8px",
  backgroundColor: bgColor,
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "0.3s",
  fontSize: "1rem",
});
