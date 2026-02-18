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

  // Listen for Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login"); // redirect if not authenticated
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-container" style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
        <div className="profile-card">
          <h2>Dashboard 🚀</h2>
          <p>
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
            <button onClick={() => router.push("/company")} className="btn btn-secondary">
              Company Dashboard
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
