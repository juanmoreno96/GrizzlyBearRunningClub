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
  const leaderboardData: Record<LeaderboardTab, { name: string; time: string; event: string; place: string }[]> = {
    "5k": [
      { name: "Juan B", time: "25:45", event: "TAMIU Zombie Run", place: "Laredo Tx" },
      { name: "Juan M", time: "54:57", event: "CASA Superhero Run", place: "Laredo Tx" },
      { name: "Carlos D", time: "59:29", event: "Run George Run" , place: "Laredo TX" },
    ],
    "10k": [
      
    ],
    "halfMarathon": [
      { name: "Juan B", time: "2:26:25", event: "Laredo Half Marathon", place: "Laredo Tx" },
    ],
    "marathon": [
      
    ],
  };

  // Find the first non-empty tab starting from marathon down to 5k
  const getDefaultTab = (): LeaderboardTab => {
    const tabs: LeaderboardTab[] = ["marathon", "halfMarathon", "10k", "5k"];
    for (const tab of tabs) {
      if (leaderboardData[tab].length > 0) {
        return tab;
      }
    }
    return "5k"; // Fallback to 5k if all are empty
  };

  const [activeTab, setActiveTab] = useState<LeaderboardTab>(getDefaultTab()); // State to track active tab

// Move these hooks and variables above the return statement
const [activeYear, setActiveYear] = useState("2025");

const pastEventsByYear: Record<string, string[]> = {
  "2025": [
    "Run George Run 5K – February 3, 2025",
    "CASA Superhero Run – April 26, 2025",
    "TAMIU Zombie Run – October 11, 2025",
    "Steps Forward 5K – October 19, 2025",
    "Día de Los Muertos 5K – November 1, 2025",
    "Laredo Marathon – November 16, 2025",
  ],
  "2024": [
    "Zombie Run – October 12, 2024",
    "Día de Los Muertos 5K – November 2, 2024",
    "Rock ‘n’ Roll San Antonio – December 7, 2024",
    "Run Santa Run – December 24, 2024",
  ],
  // Add more years/events as needed
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="bg-diagonal-stripes">
          <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
            <div className="md:w-1/2 flex justify-center p-6">
              <Image
                src="/gallery/events/runningBearthreecasa5k.jpg"
                alt="CASA 5K Event"
                className="rounded-lg shadow-lg"
                width={800}
                height={600}
                priority
              />
            </div>
            <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
              <h2 className="text-3xl font-bold mb-4 underline">Past Events</h2>
              <div className="flex justify-center mb-4 space-x-2">
                {Object.keys(pastEventsByYear).map((year) => (
                  <button
                    key={year}
                    className={`px-4 py-2 rounded ${activeYear === year ? "bg-rose-800 text-white" : "bg-rose-950/30 text-white hover:bg-rose-800/80"}`}
                    onClick={() => setActiveYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
              <ul className="list-disc list-inside text-left space-y-2">
                {pastEventsByYear[activeYear].map((event, idx) => (
                  <li className="text-lg" key={idx}>{event}</li>
                ))}
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
                <li className="text-lg">Guajolote 10k Run– November 27, 2025</li>
                <li className="text-lg">Jolly Run – December 13, 2025</li>
                <li className="text-lg">Run Santa Run – December 24, 2025</li>
                <li className="text-lg">Austin Marathon – February 15, 2026</li>
                
              </ul>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4 underline">Leaderboard</h2>
            <div className="w-full bg-black/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <button className={`px-4 py-2 mx-2 rounded transition-colors ${activeTab === "5k" ? "bg-rose-600 text-white font-bold border-2 border-yellow-400" : "bg-rose-800 text-white hover:bg-rose-700"}`} onClick={() => setActiveTab("5k")}>
                  5K
                </button>
                <button className={`px-4 py-2 mx-2 rounded transition-colors ${activeTab === "10k" ? "bg-rose-600 text-white font-bold border-2 border-yellow-400" : "bg-rose-800 text-white hover:bg-rose-700"}`} onClick={() => setActiveTab("10k")}>
                  10K
                </button>
                <button className={`px-4 py-2 mx-2 rounded transition-colors ${activeTab === "halfMarathon" ? "bg-rose-600 text-white font-bold border-2 border-yellow-400" : "bg-rose-800 text-white hover:bg-rose-700"}`} onClick={() => setActiveTab("halfMarathon")}>
                  Half Marathon
                </button>
                <button className={`px-4 py-2 mx-2 rounded transition-colors ${activeTab === "marathon" ? "bg-rose-600 text-white font-bold border-2 border-yellow-400" : "bg-rose-800 text-white hover:bg-rose-700"}`} onClick={() => setActiveTab("marathon")}>
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