// pages/company.js
import dynamic from "next/dynamic";

// Dynamically import the CompanyDashboard component and disable SSR
const CompanyPage = dynamic(
  () => import("../components/CompanyDashboard"),
  { ssr: false }
);

export default function Company() {
  return <CompanyPage />;
}
