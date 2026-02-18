"use client";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>StackVerified</h1>
      <div>
        <a href="#features" style={{ margin: "0 10px" }}>Features</a>
        <a href="#pricing" style={{ margin: "0 10px" }}>Pricing</a>
        <a href="/login" style={{ margin: "0 10px" }}>Login</a>
        <a href="/signup" className="btn btn-primary" style={{ margin: "0 10px" }}>Get Started</a>
      </div>
    </nav>
  );
}
