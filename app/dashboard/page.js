"use client";

import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Your Dashboard 🚀
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
}
