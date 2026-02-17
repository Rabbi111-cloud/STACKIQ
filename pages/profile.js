"use client";

import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome 🎉</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout} className="btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
}
