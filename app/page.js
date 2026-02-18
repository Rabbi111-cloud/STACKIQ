"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="landing-page">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">StackIQ</h1>
        <div className="nav-links">
          <button onClick={() => router.push("/company")} className="btn company">Company Dashboard</button>
          <button onClick={() => router.push("/signup")} className="btn signup">Sign Up</button>
          <button onClick={() => router.push("/login")} className="btn login">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Take Your Backend Skills to the Next Level</h1>
        <p>Test, score, and prove your backend developer skills with our AI-powered platform.</p>
        <div className="hero-buttons">
          <button onClick={() => router.push("/signup")} className="btn signup">Get Started</button>
          <button onClick={() => router.push("/login")} className="btn login">Login</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h2>AI-Powered Tests</h2>
          <p>Get scored automatically with intelligent AI evaluation.</p>
        </div>
        <div className="feature-card">
          <h2>Track Progress</h2>
          <p>See your growth over time and improve continuously.</p>
        </div>
        <div className="feature-card">
          <h2>Join Companies</h2>
          <p>Top companies can view your scores and invite you to interviews.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"StackIQ helped me land my first backend developer role!"</p>
            <p className="name">— Alice</p>
          </div>
          <div className="testimonial-card">
            <p>"The AI scoring is amazing and really fair."</p>
            <p className="name">— John</p>
          </div>
          <div className="testimonial-card">
            <p>"I improved my skills faster than I thought possible!"</p>
            <p className="name">— Sofia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 StackIQ. All rights reserved.</p>
      </footer>

      {/* Floating bubbles */}
      <div className="bubbles">
        {[...Array(20)].map((_, i) => <div key={i} className="bubble"></div>)}
      </div>

      {/* Colored blurred blobs */}
      <div className="blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* Styles */}
      <style jsx>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 50px;
          position: fixed;
          width: 100%;
          z-index: 10;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .navbar .logo {
          font-weight: 800;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #9d50bb, #6e48aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links button {
          margin-left: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-links button:hover { transform: translateY(-2px); }
        .btn.company { background: #00c851; }
        .btn.signup { background: #0070f3; }
        .btn.login { background: #ffbb33; }

        /* Hero */
        .hero-section {
          padding: 140px 20px 80px;
          text-align: center;
          background: linear-gradient(135deg, #f3e5ff, #fce4ff);
          position: relative;
          z-index: 5;
        }
        .hero-section h1 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #9d50bb, #6e48aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }
        .hero-buttons { margin-top: 30px; }
        .hero-buttons .btn { margin: 0 10px; }

        /* Features */
        .features-section {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          padding: 80px 20px;
          background: linear-gradient(135deg, #ffe0f7, #f2e6ff);
          position: relative;
          z-index: 5;
        }
        .feature-card {
          max-width: 300px;
          padding: 25px;
          border-radius: 20px;
          background: rgba(157,80,187,0.05);
          backdrop-filter: blur(10px);
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }
        .feature-card:hover { transform: translateY(-10px); }
        .feature-card h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #9d50bb, #6e48aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Testimonials */
        .testimonials-section {
          padding: 80px 20px;
          text-align: center;
          background: linear-gradient(135deg, #e0fff7, #d6ffe5);
          position: relative;
          z-index: 5;
        }
        .testimonials-section h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 40px;
          background: linear-gradient(135deg, #9d50bb, #6e48aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .testimonial-cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .testimonial-card {
          max-width: 300px;
          padding: 25px;
          border-radius: 20px;
          background: rgba(157,80,187,0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          font-style: italic;
          color: #333;
        }
        .testimonial-card p.name { font-weight: 700; margin-top: 15px; color: #6e48aa; }

        /* Footer */
        .footer {
          text-align: center;
          padding: 20px;
          color: #333;
        }

        /* Floating bubbles */
        .bubbles { position: absolute; width: 100%; height: 100%; top: 0; left: 0; overflow: hidden; z-index: 0; }
        .bubble {
          position: absolute;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: rgba(144, 238, 144, 0.3);
          bottom: -100px;
          animation: rise 15s infinite ease-in;
        }
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-1200px) scale(1.2); opacity: 0; }
        }

        /* Colored blurred blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.6;
          animation: float 20s infinite ease-in-out alternate;
        }
        .blob1 { width: 300px; height: 300px; background: #ff6ec7; top: 10%; left: -100px; }
        .blob2 { width: 400px; height: 400px; background: #6ec1ff; top: 50%; left: -150px; }
        .blob3 { width: 350px; height: 350px; background: #ffd76e; top: 70%; left: -50px; }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(50px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
}
