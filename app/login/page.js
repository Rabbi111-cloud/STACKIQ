"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (err) {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin} className="btn signup">Login</button>
      <p>
        Don’t have an account? <span className="link" onClick={() => router.push("/signup")}>Sign Up</span>
      </p>
    </div>
  );
}
