"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import TrailsGallary from "@/app/components/trailsGallary";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "../../components/LoadingThreeDotsJumping"; // Import the loading dots component

const Trails = () => {
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
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
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
          <TrailsGallary />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Trails;