export default function Login() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Welcome Back</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-primary">Login</button>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#ccc', fontSize: '0.9rem' }}>
          Don't have an account? <a href="/signup" style={{ color: '#7f5af0', textDecoration: 'none' }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}
