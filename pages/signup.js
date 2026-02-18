"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // optionally save fullName to Firestore later
      router.push("/login"); // redirect to login after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container" style={{ maxWidth: "450px", margin: "60px auto", padding: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "10px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "25px" }}>Create Your Account</h2>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "12px", borderRadius: "6px", backgroundColor: "#0070f3", color: "#fff", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s" }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#005bb5"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#0070f3"}
        >
          Sign Up
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
    </div>
  );
}
