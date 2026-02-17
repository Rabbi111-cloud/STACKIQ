"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-20 py-24">

        {/* HERO */}
        <section className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Prove Your Backend Skills With{" "}
            <span className="gradient-text">AI Verification</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            StackVerified evaluates real backend coding ability using AI-powered
            assessments and intelligent skill scoring — helping developers stand
            out and companies hire confidently.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/signup"
              className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Take Free Skill Test
            </a>

            <a
              href="/login"
              className="border border-zinc-700 hover:border-white px-8 py-4 rounded-2xl text-lg transition"
            >
              Hire Verified Developers
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-36 max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            "AI Code Analysis",
            "Real-Time Execution",
            "Backend Challenges",
            "Smart Skill Scoring",
            "Recruiter Dashboard",
            "Performance Analytics",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-primary transition"
            >
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Powerful backend verification powered by intelligent systems.
              </p>
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section className="mt-40 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Building Your Verified Backend Profile Today.
          </h2>

          <a
            href="/signup"
            className="mt-10 inline-block bg-primary hover:bg-blue-700 px-10 py-5 rounded-2xl font-semibold text-lg transition"
          >
            Get Started Free
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
