"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "./components/LoadingThreeDotsJumping"; // Import the loading dots component
import Head from "next/head";
import { ChevronDown, ArrowRight, BookOpen, Users,NotebookPen, Newspaper, Camera} from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  const scrollToContent = () => {
    const contentSection = document.getElementById('news-section')
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

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
            <div className="hidden md:block relative">
              <div className="fixed inset-0 w-full h-full">
                <Image
                  src="/bannerPhotos/running-hero.jpg"
                  alt="Running hero"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: "50% 50%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* Hero content on desktop */}
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
                <button
                  onClick={scrollToContent}
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-red-800 transition-colors animate-bounce z-30"
                >
                  <ChevronDown className="h-8 w-8" />
                </button>
              </div>
            </div>

            {/* Mobile Hero (Unified Image + Content) */}
            <div className="md:hidden relative h-screen flex flex-col justify-center items-center text-center text-white px-6">
              <Image
                src="/bannerPhotos/running-hero.jpg"
                alt="Running hero"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              
              {/* Hero content stays on top of image */}
              <div className="relative z-10">
                <h1 className="text-4xl font-bold">Run Together, Stay Strong</h1>
                <p className="mt-3 text-base text-white">
                  Join our running community and push your limits!
                </p>
                <Link href="/contact" passHref>
                  <button className="mt-5 px-5 py-3 text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg">
                    Join the Club
                  </button>
                </Link>
              </div>
              <button
                  onClick={scrollToContent}
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-red-800 transition-colors animate-bounce z-30"
                >
                  <ChevronDown className="h-8 w-8" />
                </button>
            </div>
          </>
        )}
      </div>
      {/* MAIN PAGE CONTENT: This appears once the hero section has fully shrunk.
                It starts right after the (now smaller) hero.
            */}
            <div id = "news-section">
              <main className="relative z-20 bg-rose-950 bg-diagonal-stripes min-h-[100vh] text-gray-800">
              {/* WHAT'S HAPPENED SECTION */}
              <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="flex items-center justify-center text-4xl font-bold text-white mb-8 border-b-2 pb-2">
                  What&apos;s Happened Recently?
                  <Newspaper className="ml-2 h-10 w-10 text-white" />
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:bg-rose-50">
                    <BookOpen className="mb-2 h-6 w-6 text-rose-600"/>
                    <h3 className="text-2xl font-semibold mb-2">Latest Blog!</h3>
                    <p className="text-gray-600">
                      Check out our Latest Blog Post about our recent marathon success and how our members achieved their personal bests.
                    </p>
                    <Link href="/blog" className="inline-flex items-center text-rose-600 font-medium mt-4 transition-all group-hover:text-rose-800">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="group p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:bg-rose-50">
                    <NotebookPen className="mb-2 h-6 w-6 text-rose-600"/>
                    <h3 className="text-2xl font-semibold mb-2">Tips and Tricks</h3>
                    <p className="text-gray-600">
                      Go to our Tips Page to find expert advice on improving your running form, nutrition, and injury prevention.
                    </p>
                    <Link href="/tips" className="inline-flex items-center text-rose-600 font-medium mt-4 transition-all group-hover:text-rose-800">
                      View Our Page
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="group p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:bg-rose-50">
                    <Users className="mb-2 h-6 w-6 text-rose-600"/>
                    <h3 className="text-2xl font-semibold mb-2">Check out our Story</h3>
                    <p className="text-gray-600">
                      Welcome to all new members! Check out our story and follow us through our adventures.
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-rose-600 font-medium mt-4 transition-all group-hover:text-rose-800">
                      Details Here
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </section>

              <hr className="my-8" />

              {/* GALLERY CAROUSEL SECTION */}
              <section className="bg-gray-50 py-16 px-6 bg-diagonal-stripes">
                <div className="max-w-6xl mx-auto">
                  <h2 className="flex items-center justify-center text-4xl font-bold text-rose-950 mb-8">
                    Grizzly Gallery
                    <Camera className="ml-2 h-10 w-10 text-rose-950" />
                  </h2>
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