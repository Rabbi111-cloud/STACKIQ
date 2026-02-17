"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-20 py-24">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-secondary">
            Verify Your Backend Skills
            <span className="text-primary"> With AI Precision</span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            StackIQ helps backend developers prove real-world ability 
            through AI-powered technical assessments and intelligent scoring.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/signup"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Take Free Skill Test
            </a>

            <a
              href="/login"
              className="border border-gray-300 px-8 py-4 rounded-2xl text-slate-700 hover:border-primary hover:text-primary transition"
            >
              Hire Developers
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-32 max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            "AI Code Evaluation",
            "Backend Challenges",
            "Skill Scoring System",
            "Recruiter Dashboard",
            "Live Execution Engine",
            "Developer Profiles",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {feature}
              </h3>
              <p className="text-slate-600 text-sm">
                Built to measure real backend engineering capability.
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
