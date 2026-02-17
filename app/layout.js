import "../styles/globals.css";

export const metadata = {
  title: "StackIQ",
  description: "AI-powered backend developer verification",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
