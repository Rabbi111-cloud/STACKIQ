export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-zinc-800">
      <h1 className="text-xl font-bold text-blue-500">StackVerified</h1>

      <div className="hidden md:flex gap-8 text-gray-400">
        <a href="#" className="hover:text-white">
          Features
        </a>
        <a href="#" className="hover:text-white">
          For Developers
        </a>
        <a href="#" className="hover:text-white">
          For Companies
        </a>
        <a href="#" className="hover:text-white">
          Pricing
        </a>
      </div>

      <div className="flex gap-4">
        <button className="text-gray-400 hover:text-white">
          Login
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
}
