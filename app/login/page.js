export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white">
      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-4 rounded-xl bg-white/10 border border-white/10 focus:border-indigo-400 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-4 rounded-xl bg-white/10 border border-white/10 focus:border-indigo-400 focus:outline-none"
        />

        <button className="w-full bg-indigo-500 hover:bg-indigo-600 py-4 rounded-xl font-semibold transition shadow-lg shadow-indigo-500/30">
          Login
        </button>
      </div>
    </div>
  );
}
