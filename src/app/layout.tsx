import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Grizzly Bear Running Club",
  description: "Join the Grizzly Bear Running Club for fun, friendly group runs and running tips. Open to all levels in Laredo, TX. Run with community, train for marathons, and stay fit together.",
  keywords: ["running club", "Laredo running", "group runs", "marathon training", "5K", "10K", "half marathon", "full marathon", "running community", "fitness", "athletic club"],
  authors: [{ name: "Grizzly Bear Running Club" }],
  openGraph: {
    title: "Grizzly Bear Running Club",
    description: "Join the Grizzly Bear Running Club for fun, friendly group runs and running tips. Open to all levels in Laredo, TX.",
    url: "https://grizzlybearrunningclub.com",
    siteName: "Grizzly Bear Running Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grizzly Bear Running Club",
    description: "Join the Grizzly Bear Running Club for fun, friendly group runs and running tips.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="bg-rose-950/30"></div>
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}