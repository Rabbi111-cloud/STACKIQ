"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run this on the client
    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Dashboard 🚀</h2>
        <p>
          <strong>Email:</strong> {user?.email || "N/A"}
        </p>
        <button onClick={handleLogout} className="btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
}
