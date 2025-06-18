"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main> {/* Adjust pt-16 as per header height */}
      <Footer />
    </>
  );
}
