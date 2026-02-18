export default function Home() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">StackIQ</h1>
        <div className="nav-links">
          <a href="/company">Company</a>
          <a href="/signup">Sign Up</a>
          <a href="/login">Login</a>
        </div>
      </nav>

      <main className="hero">
        <h1>Take Your Backend Skills to the Next Level</h1>
        <p>Test, score, and prove your backend developer skills with our AI-powered platform.</p>
        <div className="hero-buttons">
          <a href="/signup" className="btn-primary">Get Started</a>
          <a href="/login" className="btn-secondary">Login</a>
        </div>
      </main>

      <section className="features">
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

      <footer className="footer">
        <p>&copy; 2026 StackIQ. All rights reserved.</p>
      </footer>
    </div>
  );
}
