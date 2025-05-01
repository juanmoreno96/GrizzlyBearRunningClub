"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "../components/LoadingThreeDotsJumping"; // Import the loading dots component

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Wait for all resources to load with a minimum delay
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after everything is loaded
      }, 500); // Minimum wait of half a second
    };

    if (document.readyState === "complete") {
      // If the page is already loaded
      handleLoad();
    } else {
      // Add event listener for when the page finishes loading
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup event listener
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-rose-950 text-white">
      {isLoading ? (
        // Loading dots animation
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-950 z-50">
          <Navbar />
          <LoadingThreeDotsJumping />
        </div>
      ) : (
        // Main content
        <>
          <Navbar />
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-20">
            <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
              <Link href="/gallery/community" passHref>
                <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
                  <h1 className="text-2xl font-bold text-white">Community</h1>
                </div>
              </Link>
              <Image
                src="/gallery/community/johnycarlos.jpg"
                alt="Community"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
              <Link href="/gallery/events" passHref>
                <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
                  <h1 className="text-2xl font-bold text-white">Events</h1>
                </div>
              </Link>
              <Image
                src="/gallery/events/477042486_659149196830259_7450223642701792381_n.jpg"
                alt="Events"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
              <Link href="/gallery/merch" passHref>
                <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
                  <h1 className="text-2xl font-bold text-white">Merch/Designs</h1>
                </div>
              </Link>
              <Image
                src="/gallery/merch/merchvtwo.jpg"
                alt="Merch/Designs"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
              <Link href="/gallery/trails" passHref>
                <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
                  <h1 className="text-2xl font-bold text-white">Trails</h1>
                </div>
              </Link>
              <Image
                src="/gallery/trails/bear%20one.jpg"
                alt="Trails"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Gallery;