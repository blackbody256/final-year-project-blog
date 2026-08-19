import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

// globals.css asks for Poppins, so load it rather than leaving the body to
// fall back to Arial. Poppins is not a variable font, so weights are explicit.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
