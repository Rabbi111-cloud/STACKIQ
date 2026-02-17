"use client";

import "../styles/globals.css";

export const metadata = {
  title: "STACKIQ",
  description: "AI-Verified Backend Skills. Trusted by Companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
