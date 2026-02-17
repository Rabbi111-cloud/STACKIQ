import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile"); // redirect to profile after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="form-card">
        <h2>Welcome Back</h2>
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
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#ccc', fontSize: '0.9rem' }}>
          Don't have an account? <a href="/signup" style={{ color: '#7f5af0', textDecoration: 'none' }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}
