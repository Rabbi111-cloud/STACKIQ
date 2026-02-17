export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-blue-600/30 blur-3xl opacity-40 pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">StackVerified</h1>

        <div className="flex gap-6 items-center">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
          <a href="/login" className="text-gray-300 hover:text-white transition">Login</a>
          <a href="/signup" className="px-5 py-2 rounded-lg bg-white text-black font-semibold hover:scale-105 transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h2 className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          Verify Backend Developers
          <br /> With AI Precision
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          Intelligent backend skill testing powered by real-world challenges,
          automated grading, and AI-driven analysis.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="/signup"
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Start Free Trial
          </a>

          <a
            href="#features"
            className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative z-10 py-32 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Real-World Challenges</h3>
            <p className="text-gray-400">
              Test backend engineers using production-style API tasks and architecture problems.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">AI Evaluation</h3>
            <p className="text-gray-400">
              Automatically score code quality, logic, scalability, and security.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Instant Reports</h3>
            <p className="text-gray-400">
              Generate detailed skill breakdowns in seconds for hiring decisions.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 py-32 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">
          Hire Smarter. Faster.
        </h2>

        <p className="text-gray-400 mb-10">
          Stop guessing developer skills. Start verifying them.
        </p>

        <a
          href="/signup"
          className="px-10 py-5 rounded-xl bg-white text-black font-semibold text-lg hover:scale-105 transition"
        >
          Get Started Today
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 StackVerified. All rights reserved.
      </footer>

    </main>
  );
}
