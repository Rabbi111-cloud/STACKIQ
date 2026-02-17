export default function Signup() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Create Account</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-primary">Sign Up</button>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#ccc', fontSize: '0.9rem' }}>
          Already have an account? <a href="/login" style={{ color: '#7f5af0', textDecoration: 'none' }}>Login</a>
        </p>
      </div>
    </div>
  );
}
