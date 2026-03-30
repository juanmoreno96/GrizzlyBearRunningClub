import { Inter, Lexend } from "next/font/google";
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

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-headline",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${inter.variable} ${lexend.variable} antialiased`}>
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