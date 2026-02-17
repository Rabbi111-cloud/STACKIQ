export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        StackIQ
      </h1>

      <p className="text-gray-600 text-lg max-w-xl mb-10">
        AI-powered backend developer skill verification platform.
      </p>

      <div className="flex gap-6">
        <a
          href="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Sign Up
        </a>

        <a
          href="/login"
          className="border border-gray-300 px-6 py-3 rounded-lg font-semibold"
        >
          Login
        </a>
      </div>
    </main>
  );
}
