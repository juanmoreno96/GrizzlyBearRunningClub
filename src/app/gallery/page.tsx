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
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-20 bg-diagonal-stripes">
            {[
              { href: "/gallery/community", title: "Community", src: "/gallery/community/johnycarlos.jpg" },
              { href: "/gallery/events", title: "Events", src: "/gallery/events/477042486_659149196830259_7450223642701792381_n.jpg" },
              { href: "/gallery/merch", title: "Merch/Designs", src: "/gallery/merch/merchvtwo.jpg" },
              { href: "/gallery/trails", title: "Trails", src: "/gallery/trails/bear%20one.jpg" },
            ].map((item, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <Link href={item.href} passHref>
                  {/* Centered text that fades in slightly on hover */}
                  <div className="absolute inset-0 flex items-center justify-center text-center z-10 transition-transform duration-300 group-hover:scale-105">
                    <h1 className="text-2xl font-bold text-white drop-shadow-lg">{item.title}</h1>
                  </div>

                  {/* Background image with zoom effect */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark overlay fade-in effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            ))}
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Gallery;