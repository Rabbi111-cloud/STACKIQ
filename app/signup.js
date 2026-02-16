import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 md:px-16">
        <h1 className="text-4xl font-bold mb-6">Create your StackVerified Account</h1>
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl font-semibold">
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-gray-400">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
