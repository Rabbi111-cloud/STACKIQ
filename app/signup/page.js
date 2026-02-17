"use client";  // <- THIS IS REQUIRED FOR CLIENT COMPONENTS

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="form-card">
        <h2>Create Account</h2>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
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
        <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#ccc', fontSize: '0.9rem' }}>
          Already have an account? <a href="/login" style={{ color: '#7f5af0', textDecoration: 'none' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/profile"); // redirect to profile after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="form-card">
        <h2>Create Account</h2>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
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
        <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#ccc', fontSize: '0.9rem' }}>
          Already have an account? <a href="/login" style={{ color: '#7f5af0', textDecoration: 'none' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

