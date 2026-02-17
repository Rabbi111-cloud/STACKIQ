export default function Login() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Welcome Back</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}
