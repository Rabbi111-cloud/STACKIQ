"use client";

import dynamic from "next/dynamic";

// Dynamically import Navbar and Footer to ensure client-side rendering
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function CompanyDashboard() {
  return (
    <>
      <Navbar />

      <section
        className="features"
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "3rem",
          }}
        >
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
