import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convergex AI - Build Smart. Scale Fast. With AI.",
  description:
    "Custom-built AI SaaS products and automations by elite full-stack developers. Specializing in AI-powered solutions, internal automation, and LLM integration.",
  keywords:
    "AI SaaS, automation, LLM integration, full-stack development, AI tools",
  openGraph: {
    title: "Convergex AI - Build Smart. Scale Fast. With AI.",
    description:
      "Custom-built AI SaaS products and automations by elite full-stack developers.",
    type: "website",
  },
  generator: "v0.dev",
  icons: ["logo.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-gray-900`}>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
