import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CompanyDashboard() {
  return (
    <>
      <Navbar />

      <section className="features" style={{ padding: '80px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '3rem' }}>
          Company Dashboard
        </h2>

        <div className="feature-card">
          <h3>Applicants</h3>
          <p>View all candidates who have taken tests.</p>
        </div>

        <div className="feature-card">
          <h3>Tests & Scores</h3>
          <p>Monitor test results and AI-generated insights.</p>
        </div>

        <div className="feature-card">
          <h3>Analytics</h3>
          <p>Track overall performance, trends, and top candidates.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
