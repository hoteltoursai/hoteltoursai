import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ComingSoon } from "@/components/coming-soon";

const inter = Inter({ subsets: ["latin"] });

const isComingSoon = process.env.COMINGSOON === "true";

export const metadata: Metadata = {
  title: "Hotel Tours AI | Matterport Virtual Tours & AI Concierge for Hotels",
  description:
    "Hotel Tours AI combines immersive Matterport 3D virtual tours with an AI concierge chatbot, helping UK hotels showcase their rooms 24/7 and turn website browsers into direct bookings.",
  keywords: [
    "hotel virtual tours",
    "matterport virtual tours for hotels",
    "ai concierge chatbot",
    "3d virtual tour uk",
    "hotel room virtual tour",
    "digital twin hotel",
    "360 hotel tour",
    "matterport scanning uk",
    "hotel lead generation",
    "ai chatbot for hotels",
  ].join(", "),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {isComingSoon ? <ComingSoon /> : children}
        </div>
      </body>
    </html>
  );
}
