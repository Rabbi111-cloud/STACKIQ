"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-6 bg-white border-b border-gray-200">
      <h1 className="text-2xl font-bold text-primary">StackVerified</h1>

      <div className="hidden md:flex gap-10 text-slate-600 text-sm">
        <a href="#" className="hover:text-primary transition">Features</a>
        <a href="#" className="hover:text-primary transition">Developers</a>
        <a href="#" className="hover:text-primary transition">Companies</a>
        <a href="#" className="hover:text-primary transition">Pricing</a>
      </div>

      <div className="flex gap-4">
        <a href="/login" className="text-slate-600 hover:text-primary">
          Login
        </a>
        <a
          href="/signup"
          className="bg-primary text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
