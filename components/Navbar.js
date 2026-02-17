"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-zinc-800 backdrop-blur-md">
      <h1 className="text-2xl font-bold gradient-text">StackVerified</h1>

      <div className="hidden md:flex gap-10 text-gray-400 text-sm">
        <a href="#" className="hover:text-white transition">Features</a>
        <a href="#" className="hover:text-white transition">Developers</a>
        <a href="#" className="hover:text-white transition">Companies</a>
        <a href="#" className="hover:text-white transition">Pricing</a>
      </div>

      <div className="flex gap-4">
        <a href="/login" className="text-gray-400 hover:text-white transition">
          Login
        </a>
        <a
          href="/signup"
          className="bg-primary hover:bg-blue-700 px-5 py-2 rounded-xl font-semibold transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
