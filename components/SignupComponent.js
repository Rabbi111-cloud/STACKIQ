"use client";

import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignupComponent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Create Account</h2>
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
