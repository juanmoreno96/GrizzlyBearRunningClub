"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
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
      
      <div className="relative">
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
            <div className="relative">
                <div className="fixed inset-0 w-full h-full ">
                <Image
                  src="/bannerPhotos/running-hero.jpg"
                  alt="Running hero"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: "50% 50%" }} // horizontal (x) then vertical (y)
                />
              </div>
               {/* Hero background image using next/image fill (image behind content) */}
            
            {/* Optional overlay to darken image for readable text */}
            <div className="absolute inset-0 bg-black/30 -z-10" />

            <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6 z-20">
              <h1 className="text-5xl md:text-6xl font-bold">Run Together, Stay Strong</h1>
              <p className="mt-4 text-lg md:text-xl text-white">
                Join our running community and push your limits!
              </p>
              <Link href="/contact" passHref>
                <button className="mt-6 px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-500 rounded-lg">
                  Join the Club
                </button>
              </Link>
            </div>
            </div>
           
            
          </>
        )}
      </div>
      {/* MAIN PAGE CONTENT: This appears once the hero section has fully shrunk.
                It starts right after the (now smaller) hero.
            */}
            <div>
              <main className="relative z-20 bg-rose-950 bg-diagonal-stripes min-h-[100vh] text-gray-800">
              {/* WHAT'S HAPPENED SECTION */}
              <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-8 border-b-2 pb-2">
                  What&apos;s Happened Recently? 📰
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">Latest Blog!</h3>
                    <p className="text-gray-600">
                      Check out our Latest Blog Post about our recent marathon success and how our members achieved their personal bests.
                    </p>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 block mt-4">
                      Read More &rarr;
                    </Link>
                  </div>
                  <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">Tips and Tricks</h3>
                    <p className="text-gray-600">
                      Go to our Tips Page to find expert advice on improving your running form, nutrition, and injury prevention.
                    </p>
                    <Link href="/tips" className="text-blue-600 hover:text-blue-800 block mt-4">
                      View Our Page &rarr;
                    </Link>
                  </div>
                  <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">Check out our Story</h3>
                    <p className="text-gray-600">
                      Welcome to all new members! Check out our story and follow us through our adventures.
                    </p>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-800 block mt-4">
                      Details Here &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              <hr className="my-8" />

              {/* GALLERY CAROUSEL SECTION */}
              <section className="bg-gray-50 py-16 px-6 bg-diagonal-stripes">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-rose-950 mb-8 text-center">Grizzly Gallery 📸</h2>
                  <ImageCarousel />
                  <div className="text-center mt-8">
                    <Link href="/gallery" passHref>
                      <button className="px-8 py-3 text-lg font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-lg">
                        View All Photos
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </main>
            </div>
            
      <Footer />
    </>
  );
}