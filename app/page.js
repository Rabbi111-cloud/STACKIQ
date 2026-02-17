import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Verify Backend Developers <br/> With AI Precision</h1>
        <p>Intelligent backend skill testing powered by real-world challenges, automated grading, and AI-driven analysis.</p>
        <div className="buttons">
          <a href="/signup" className="btn btn-primary">Start Free Trial</a>
          <a href="#features" className="btn btn-secondary">See How It Works</a>
        </div>
      </section>

      <section className="features" id="features">
        <div className="feature-card">
          <h3>Real-World Challenges</h3>
          <p>Test backend engineers using production-style API tasks and architecture problems.</p>
        </div>
        <div className="feature-card">
          <h3>AI Evaluation</h3>
          <p>Automatically score code quality, logic, scalability, and security.</p>
        </div>
        <div className="feature-card">
          <h3>Instant Reports</h3>
          <p>Generate detailed skill breakdowns in seconds for hiring decisions.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Hire Smarter. Faster.</h2>
        <p>Stop guessing developer skills. Start verifying them.</p>
        <a href="/signup" className="btn btn-primary">Get Started Today</a>
      </section>

      <Footer />
    </>
  );
}
