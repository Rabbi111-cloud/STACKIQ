"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="landing-page">

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

      {/* Testimonials */}
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

      {/* Floating bubbles */}
      <div className="bubbles">
        {[...Array(20)].map((_, i) => <div key={i} className="bubble"></div>)}
      </div>

      {/* Blurred blobs */}
      <div className="blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
    </div>
  );
}
