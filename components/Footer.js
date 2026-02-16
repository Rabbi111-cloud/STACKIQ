export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-800 py-10 text-center text-gray-500">
      <p>© {new Date().getFullYear()} StackVerified. All rights reserved.</p>
      <p className="mt-2 text-sm">AI-Verified Backend Skills. Trusted by Companies.</p>
    </footer>
  );
}
