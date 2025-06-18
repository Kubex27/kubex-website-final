// components/Footer.tsx
"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Kubex. All rights reserved.</p>
    </footer>
  );
}
