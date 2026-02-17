"use client";

import dynamic from "next/dynamic";

// Lazy-load login component to avoid SSR errors
const LoginComponent = dynamic(
  () => import("../../components/LoginComponent"),
  { ssr: false }
);

export default function LoginPage() {
  return <LoginComponent />;
}
