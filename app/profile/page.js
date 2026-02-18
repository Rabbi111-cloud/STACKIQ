"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [details, setDetails] = useState({
    fullname: "",
    nationality: "",
    state: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    if (!user) router.push("/login");
    else setLoading(false);
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  return (
    <div className="profile-page">
      <h1>Dashboard</h1>
      <p><strong>Email:</strong> {user?.email}</p>

      <input type="text" placeholder="Full Name" value={details.fullname} onChange={e => setDetails({ ...details, fullname: e.target.value })} />
      <input type="text" placeholder="Nationality" value={details.nationality} onChange={e => setDetails({ ...details, nationality: e.target.value })} />
      <input type="text" placeholder="State" value={details.state} onChange={e => setDetails({ ...details, state: e.target.value })} />
      <input type="text" placeholder="City" value={details.city} onChange={e => setDetails({ ...details, city: e.target.value })} />
      <input type="text" placeholder="ZIP Code" value={details.zip} onChange={e => setDetails({ ...details, zip: e.target.value })} />

      <button onClick={handleLogout} className="btn login">Logout</button>
    </div>
  );
}
