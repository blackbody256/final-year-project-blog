import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update once the Vercel domain is known — required for LinkedIn and other
// link previews to resolve the Open Graph image to an absolute URL.
const siteUrl = "https://bse27-2.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BSE27-2",
    template: "%s | BSE27-2",
  },
  description:
    "Final-year Software Engineering project at Makerere University: a diagnosis system for electric-bus charging infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
