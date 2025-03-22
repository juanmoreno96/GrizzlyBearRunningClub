"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  const pathname = usePathname();

  useEffect(() => {
    document.body.setAttribute("data-loaded", "true");
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="bg-rose-950/30"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 50 }}  // Start off-screen and transparent
            animate={{ opacity: 1, y: 0 }}   // Slide in and become opaque
            exit={{ opacity: 0, y: -50 }}    // Slide out and become transparent
            transition={{ duration: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ position: "absolute", width: "100%", height: "100%" }}  // Fix positioning
          >
            {children}
          </motion.div>
        </AnimatePresence>


        <Analytics />
      </body>
    </html>
  );
}