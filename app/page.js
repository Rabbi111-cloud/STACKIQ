export default function Home() {
  return (
    <main className="min-h-screen text-white px-6 md:px-20 py-24">

      {/* NAV */}
      <nav className="flex justify-between items-center mb-24">
        <h1 className="text-2xl font-bold tracking-tight">
          Stack<span className="text-indigo-400">IQ</span>
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="/login" className="hover:text-indigo-300 transition">
            Login
          </a>
          <a
            href="/signup"
            className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-xl font-semibold transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Prove Your Backend Skills
          <span className="block text-indigo-400 mt-4">
            With AI Precision
          </span>
        </h1>

        <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto">
          The next-generation developer verification platform that uses AI
          to evaluate real backend engineering ability.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/signup"
            className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-lg shadow-indigo-500/30"
          >
            Start Free Assessment
          </a>

          <a
            href="/login"
            className="border border-slate-600 hover:border-indigo-400 px-8 py-4 rounded-2xl text-lg transition"
          >
            Recruit Developers
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-40 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          "AI Code Evaluation",
          "Real Backend Challenges",
          "Verified Developer Profiles",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-400 transition"
          >
            <h3 className="text-xl font-semibold mb-4">{item}</h3>
            <p className="text-slate-400 text-sm">
              Built for serious backend engineers who want to stand out.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
