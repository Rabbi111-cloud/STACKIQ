// pages/profile.js
import dynamic from "next/dynamic";

// Dynamically import the Profile component and disable SSR
const ProfilePage = dynamic(() => import("../components/Profile"), { ssr: false });

export default function Profile() {
  return <ProfilePage />;
}
