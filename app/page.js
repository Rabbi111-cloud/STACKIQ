"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          background: "linear-gradient(135deg, #d9a1ff, #ff91a4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Transparent bubbles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                width: `${50 + Math.random() * 50}px`,
                height: `${50 + Math.random() * 50}px`,
                background: "rgba(144, 238, 144, 0.3)",
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                zIndex: 0,
              }}
            />
          ))}
        </div>

        <h1 style={{ fontSize: "3rem", fontWeight: "bold", zIndex: 1 }}>
          Take Your Backend Skills to the Next Level
        </h1>
        <p style={{ fontSize: "1.2rem", margin: "20px 0", zIndex: 1 }}>
          Test, score, and prove your backend developer skills with our AI-powered platform.
        </p>
        <div style={{ display: "flex", gap: "15px", zIndex: 1 }}>
          <button
            onClick={() => router.push("/signup")}
            style={buttonStyle("#fff", "#e0e0e0", "#0070f3")}
          >
            Get Started
          </button>
          <button
            onClick={() => router.push("/login")}
            style={buttonStyle("transparent", "#fff", "#ff91a4", true)}
          >
            Login
          </button>
          <button
            onClick={() => router.push("/company")}
            style={buttonStyle("#00c851", "#007e33")}
          >
            Company Dashboard
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          padding: "60px 20px",
          background: "#fff",
        }}
      >
        {[
          {
            title: "AI-Powered Tests",
            desc: "Get scored automatically with intelligent AI evaluation.",
          },
          {
            title: "Track Progress",
            desc: "See your growth over time and improve continuously.",
          },
          {
            title: "Join Companies",
            desc: "Top companies can view your scores and invite you to interviews.",
          },
        ].map((feature, i) => (
          <div key={i} style={featureCardStyle(i)}>
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonial Section */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #ffb3ff, #b3ffff)",
          color: "#333",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>What Students Say</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {[
            { name: "Alice", comment: "I leveled up my backend skills in weeks!" },
            { name: "Brian", comment: "The AI scoring is amazing and fast." },
            { name: "Clara", comment: "I got noticed by top companies thanks to StackIQ!" },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                maxWidth: "250px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              }}
            >
              <p>"{t.comment}"</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Bubble animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}

const buttonStyle = (bg, hover, color = "#fff", outlined = false) => ({
  padding: "12px 25px",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  border: outlined ? "2px solid #fff" : "none",
  backgroundColor: bg,
  color: color,
  transition: "0.3s",
  outline: "none",
  ":hover": { backgroundColor: hover },
});

const featureCardStyle = (i) => ({
  maxWidth: "300px",
  textAlign: "center",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  background: i % 2 === 0 ? "#f3e5ff" : "#e0f7ff",
});
