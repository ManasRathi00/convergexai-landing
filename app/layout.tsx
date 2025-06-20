import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import Script from "next/script";
import Analytics from "./components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convergex AI - Build Smart. Scale Fast. With AI.",
  description:
    "Custom-built AI SaaS products and automations by elite full-stack developers. Specializing in AI-powered solutions, internal automation, and LLM integration.",
  metadataBase: new URL("https://www.convergexai.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-us",
    },
  },
  openGraph: {
    title: "Convergex AI - Build Smart. Scale Fast. With AI.",
    description:
      "Custom-built AI SaaS products and automations by elite full-stack developers.",
    url: "https://www.convergexai.com",
    siteName: "Convergex AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.convergexai.com/logo.svg",
        width: 800,
        height: 600,
        alt: "Convergex AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convergex AI - Build Smart. Scale Fast. With AI.",
    description:
      "Custom-built AI SaaS products and automations by elite full-stack developers. Specializing in AI-powered solutions, internal automation, and LLM integration.",
    creator: "@convergexai",
    images: ["https://www.convergexai.com/icons/convergex-ai-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Convergex AI" }],
  generator: "Next.js",
  keywords: [
    "AI SaaS",
    "automation",
    "LLM integration",
    "full-stack development",
    "AI tools",
    "AI Development",
    "Custom AI Solutions",
    "AI Agency",
    "Machine Learning Services",
    "AI Consulting",
  ],
  category: "Technology",
  icons: ["logo.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-gray-900`}>
        <Navbar />
        <Analytics />
        <main className="">{children}</main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
