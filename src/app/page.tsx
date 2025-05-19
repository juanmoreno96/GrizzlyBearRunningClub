"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "./components/LoadingThreeDotsJumping"; // Import the loading dots component
import Head from "next/head";

export default function Home() {
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
    
    <>
      <Head>
        <title>Grizzly Bear Running Club | Fun Group Runs & Community Fitness</title>
        <meta
          name="description"
          content="Join the Grizzly Bear Running Club for fun, friendly group runs and running tips. Open to all levels, we meet weekly to stay active and build community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      
      <div className="relative min-h-screen bg-rose-950">
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

            <div className="absolute inset-0 bg-cover bg-center bg-[url('/bannerPhotos/running-hero.jpg')] opacity-80"></div>

            <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
              <h1 className="text-5xl md:text-6xl font-bold">Run Together, Stay Strong</h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300">
                Join our running community and push your limits!
              </p>
              <Link href="/contact" passHref>
                <button className="mt-6 px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-500 rounded-lg">
                  Join the Club
                </button>
              </Link>
              <div className="absolute bottom-0 w-full">
                <Footer />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}