"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "../components/LoadingThreeDotsJumping";
import Head from "next/head";

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

  type LeaderboardTab = "5k" | "10k" | "halfMarathon" | "marathon"; // Define valid keys
  const [activeTab, setActiveTab] = useState<LeaderboardTab>("5k"); // State to track active tab
  const leaderboardData: Record<LeaderboardTab, { name: string; time: string; event: string; place: string }[]> = {
    "5k": [
      { name: "Juan B", time: "28:18", event: "CASA Superhero Run", place: "Laredo Tx" },
      { name: "Juan M", time: "54:57", event: "CASA Superhero Run", place: "Laredo Tx" },
      { name: "Carlos D", time: "59:29", event: "Run George Run" , place: "Laredo TX" },
    ],
    "10k": [
      
    ],
    "halfMarathon": [
      
    ],
    "marathon": [
      
    ],
  };

  return (
    <> 

<Head>
  <title>Grizzly Bear Running Club | Events & Leaderboard</title>
  <meta
    name="description"
    content="Explore upcoming and past Grizzly Bear Running Club events, and check out our running leaderboard to see top performances in 5K, 10K, and more!"
  />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph for social media */}
  <meta property="og:title" content="Grizzly Bear Running Club | Events & Leaderboard" />
  <meta
    property="og:description"
    content="Join the Grizzly Bear Running Club events and view top runners in our community leaderboard."
  />
  <meta
    property="og:image"
    content="https://grizzlybearrunningclub.com/bannerPhotos/events-banner.jpg"
  />
  <meta property="og:url" content="https://grizzlybearrunningclub.com/events" />
  <meta property="og:type" content="website" />
</Head>
     <div className="min-h-screen flex flex-col bg-rose-950 text-white">
      {isLoading ? (
        // Loading spinner
        <div className="fixed inset-0 flex items-center justify-center bg-rose-950 z-50">
          <Navbar />
          <LoadingThreeDotsJumping />
        </div>
      ) : (
        // Main content
        <>
          

          <div className="absolute inset-0 h-1/3 bg-cover bg-center bg-[url('/bannerPhotos/events-banner.jpg')] opacity-80"></div>
          <div className="bg-diagonal-stripes">
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
            <div className="md:w-1/2 flex justify-center p-6">
              <Image src="/gallery/events/runningBearthreecasa5k.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
            </div>
            <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
              <h2 className="text-3xl text-center font-bold mb-4 underline">Past Events</h2>
              <ul className="list-disc list-inside text-left space-y-2">
                <li className="text-lg">Zombie Run – October 12, 2024</li>
                <li className="text-lg">Día de Los Muertos 5K – November 2, 2024</li>
                <li className="text-lg">Rock ‘n’ Roll San Antonio – December 7, 2024</li>
                <li className="text-lg">Run Santa Run – December 24, 2024</li>
                <li className="text-lg">Run George Run 5K – February 3, 2025</li>
                <li className="text-lg">CASA Superhero Run – April 26, 2025</li>
              </ul>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
            <div className="md:w-1/2 flex justify-center p-6">
              <Image src="/gallery/johnyRuuning.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
            </div>
            <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
              <h2 className="text-3xl text-center font-bold mb-4 underline">Future Events</h2>
              <ul className="list-disc list-inside text-left space-y-2">
                
              </ul>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4 underline">Leaderboard</h2>
            <div className="w-full bg-black/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <button className="px-4 py-2 mx-2 bg-rose-800 text-white rounded hover:bg-rose-700" onClick={() => setActiveTab("5k")}>
                  5K
                </button>
                <button className="px-4 py-2 mx-2 bg-rose-800 text-white rounded hover:bg-rose-700" onClick={() => setActiveTab("10k")}>
                  10K
                </button>
                <button className="px-4 py-2 mx-2 bg-rose-800 text-white rounded hover:bg-rose-700" onClick={() => setActiveTab("halfMarathon")}>
                  Half Marathon
                </button>
                <button className="px-4 py-2 mx-2 bg-rose-800 text-white rounded hover:bg-rose-700" onClick={() => setActiveTab("marathon")}>
                  Marathon
                </button>
              </div>
              <table className="table-auto w-full text-left text-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-rose-700">Name</th>
                    <th className="px-4 py-2 border-b border-rose-700">Time</th>
                    <th className="px-4 py-2 border-b border-rose-700">Event</th>
                    <th className="px-4 py-2 border-b border-rose-700">Place</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData[activeTab].map((entry, index) => (
                    <tr key={index} className="hover:bg-rose-800">
                      <td className="px-4 py-2 border-b border-rose-700">{entry.name}</td>
                      <td className="px-4 py-2 border-b border-rose-700">{entry.time}</td>
                      <td className="px-4 py-2 border-b border-rose-700">{entry.event}</td>
                      <td className="px-4 py-2 border-b border-rose-700">{entry.place}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
          

          <Footer />
        </>
      )}
    </div>
    </>
    
  );
};

export default Events;