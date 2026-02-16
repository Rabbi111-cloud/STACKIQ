import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-20">
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Prove Your Backend Skills With{" "}
            <span className="text-blue-500">AI Verification</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            StackVerified evaluates real backend coding ability using AI-powered
            assessments, real-time code execution, and intelligent skill scoring —
            helping developers stand out and companies hire confidently.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
              Take Free Skill Test
            </button>
            <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl">
              Hire Verified Developers
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-32 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "AI Code Analysis",
            "Real-Time Execution Sandbox",
            "Backend-Focused Challenges",
            "Smart Skill Scoring",
            "Recruiter Dashboard",
            "Performance Analytics",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Powerful backend skill verification powered by intelligent systems.
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Building Your Verified Backend Profile Today.
          </h2>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg">
            Get Started Free
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
