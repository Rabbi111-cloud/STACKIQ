import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Profile() {
  return (
    <>
      <Navbar />

      <section className="form-container">
        {/* Floating blobs for style */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        <div className="form-card">
          <h2>User Profile</h2>
          <input type="text" placeholder="Full Name" value="John Doe" readOnly />
          <input type="email" placeholder="Email" value="johndoe@example.com" readOnly />
          <input type="text" placeholder="Position / Role" value="Backend Developer" />
          <input type="password" placeholder="Change Password" />
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </section>

      <Footer />
    </>
  );
}
