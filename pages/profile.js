"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (!user) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Dashboard 🚀</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout} className="btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
}
