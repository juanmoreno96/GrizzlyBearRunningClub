"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import EventsGallary from "@/app/components/eventsGallary";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "../../components/LoadingThreeDotsJumping"; // Import the loading dots component

const Events = () => {
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
    <div className="min-h-screen flex flex-col bg-rose-950 text-white bg-diagonal-stripes">
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
          <EventsGallary />
          <div className="flex justify-center my-6">
            <a
              href="/gallery"
              className="px-4 py-2 bg-rose-800 hover:bg-rose-700 rounded text-white font-semibold transition"
              aria-label="Go to gallery main page"
            >
              ← Back to Gallery
            </a>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Events;