export default function Signup() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Create Account</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </div>
  );
}
