"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import dynamic from "next/dynamic";

// Dynamic Navbar and Footer
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [nationality, setNationality] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  const handleSaveDetails = () => {
    // Here you can save the details to Firebase Firestore
    console.log("User details saved:", { fullName, phone, skills, portfolio, nationality, state, city, zipCode });
    alert("Your details are saved!");
  };

  return (
    <>
      <Navbar />
      <div className="profile-container" style={{ maxWidth: "600px", margin: "50px auto", padding: "30px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Your Dashboard</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="text" placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="url" placeholder="Portfolio / GitHub link" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="text" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />

          <button onClick={handleSaveDetails} style={{ padding: "12px", borderRadius: "6px", backgroundColor: "#0070f3", color: "#fff", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s" }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#005bb5"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#0070f3"}>
            Save Details
          </button>
          <button onClick={handleLogout} style={{ padding: "12px", borderRadius: "6px", backgroundColor: "#ff4d4d", color: "#fff", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s" }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#cc0000"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#ff4d4d"}>
            Logout
          </button>
          <button onClick={() => router.push("/company")} style={{ padding: "12px", borderRadius: "6px", backgroundColor: "#00c851", color: "#fff", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s" }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#007e33"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#00c851"}>
            Company Dashboard
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
