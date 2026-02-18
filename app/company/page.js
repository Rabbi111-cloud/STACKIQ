"use client";
import { useRouter } from "next/navigation";

export default function CompanyPage() {
  const router = useRouter();
  return (
    <div className="company-dashboard">
      <h1>Company Dashboard</h1>
      <div className="feature-card" onClick={() => alert("Applicants section")}>Applicants</div>
      <div className="feature-card" onClick={() => alert("Tests & Scores section")}>Tests & Scores</div>
      <div className="feature-card" onClick={() => alert("Analytics section")}>Analytics</div>
    </div>
  );
}
