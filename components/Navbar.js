export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>StackVerified</h1>
      <div>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="/login">Login</a>
        <a href="/signup" className="btn btn-primary">Get Started</a>
      </div>
    </nav>
  );
}
