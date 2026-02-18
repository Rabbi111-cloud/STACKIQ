"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";

export default function ProfilePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    fullName: "",
    nationality: "",
    state: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Profile saved:", profile);
    alert("Profile saved successfully!");
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  return (
    <div style={{ padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Your Dashboard 🚀</h1>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}>
        <p><strong>Email:</strong> {user?.email}</p>

        {[
          { label: "Full Name", name: "fullName" },
          { label: "Nationality", name: "nationality" },
          { label: "State", name: "state" },
          { label: "City", name: "city" },
          { label: "Zip Code", name: "zip" },
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={profile[field.name]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button onClick={handleSave} style={buttonStyle("#0070f3", "#005bb5")}>Save Profile</button>
          <button onClick={handleLogout} style={buttonStyle("#ff4444", "#cc0000")}>Logout</button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (bg, hover) => ({
  padding: "10px 20px",
  borderRadius: "6px",
  backgroundColor: bg,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
  outline: "none",
});
