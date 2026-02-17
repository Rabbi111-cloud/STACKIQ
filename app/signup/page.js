"use client";

import dynamic from "next/dynamic";

// Lazy-load the actual signup component to avoid SSR errors
const SignupComponent = dynamic(
  () => import("../../components/SignupComponent"),
  { ssr: false }
);

export default function SignupPage() {
  return <SignupComponent />;
}
