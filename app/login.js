"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-3xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-4 border rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-4 border rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
