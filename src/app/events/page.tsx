"use client";

import Footer from "../components/footer";
import Image from "next/image";
import { useState } from "react";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";

const Events = () => {
  type LeaderboardTab = "5k" | "10k" | "halfMarathon" | "marathon";

  const leaderboardData: Record<LeaderboardTab, { name: string; time: string; event: string; place: string }[]> = {
    "5k": [
      { name: "Juan B", time: "25:45", event: "TAMIU Zombie Run", place: "Laredo Tx" },
      { name: "Sophia M", time: "37:41", event: "Dia De Lost Muertos 5K", place: "Laredo Tx" },
      { name: "Juan M", time: "54:57", event: "CASA Superhero Run", place: "Laredo Tx" },
      { name: "Carlos D", time: "59:29", event: "Run George Run", place: "Laredo TX" },
    ],
    "10k": [],
    "halfMarathon": [
      { name: "Juan B", time: "2:26:25", event: "Laredo Half Marathon", place: "Laredo Tx" },
    ],
    "marathon": [
      { name: "Juan B", time: "6:32:53", event: "Austin Marathon 2026", place: "Austin Tx" }
    ],
  };

  const getDefaultTab = (): LeaderboardTab => {
    const tabs: LeaderboardTab[] = ["marathon", "halfMarathon", "10k", "5k"];
    for (const tab of tabs) {
      if (leaderboardData[tab].length > 0) {
        return tab;
      }
    }
    return "5k";
  };

  const [activeTab, setActiveTab] = useState<LeaderboardTab>(getDefaultTab());
  const [activeYear, setActiveYear] = useState("2026");

  const pastEventsByYear: Record<string, string[]> = {
    "2026": [
      "Austin Marathon – February 15, 2026"
    ],
    "2025": [
      "Run George Run 5K – February 3, 2025",
      "CASA Superhero Run – April 26, 2025",
      "TAMIU Zombie Run – October 11, 2025",
      "Steps Forward 5K – October 19, 2025",
      "Día de Los Muertos 5K – November 1, 2025",
      "Laredo Marathon – November 16, 2025",
      "Guajolote 10k Run – November 27, 2025"
    ],
    "2024": [
      "Zombie Run – October 12, 2024",
      "Día de Los Muertos 5K – November 2, 2024",
      "Rock 'n' Roll San Antonio – December 7, 2024",
      "Run Santa Run – December 24, 2024",
    ],
  };

  return (
    <>
      <Head>
        <title>Grizzly Bear Running Club | Events & Leaderboard</title>
        <meta name="description" content="Explore upcoming and past Grizzly Bear Running Club events, and check out our running leaderboard to see top performances in 5K, 10K, half marathon, and marathon!" />
        <meta name="keywords" content="running events, race calendar, marathon, half marathon, 5K, 10K, Laredo running events, leaderboard, race results" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Grizzly Bear Running Club | Events & Leaderboard" />
        <meta property="og:description" content="Explore our running events and view top runners in our community leaderboard." />
        <meta property="og:image" content="https://grizzlybearrunningclub.com/bannerPhotos/events-banner.jpg" />
        <meta property="og:url" content="https://grizzlybearrunningclub.com/events" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grizzly Bear Running Club Events" />
        <meta name="twitter:description" content="Explore running events and view our community leaderboard." />
      </Head>
      <LoadingContent>
        <div className="min-h-screen flex flex-col bg-rose-950 text-white">
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
                  <li className="text-lg">Coming soon...</li>
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
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-white text-sm md:text-base">
                    <thead>
                      <tr>
                        <th className="px-2 md:px-4 py-2 border-b border-rose-700">Name</th>
                        <th className="px-2 md:px-4 py-2 border-b border-rose-700">Time</th>
                        <th className="px-2 md:px-4 py-2 border-b border-rose-700">Event</th>
                        <th className="px-2 md:px-4 py-2 border-b border-rose-700">Place</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData[activeTab].map((entry, index) => (
                        <tr key={index} className="hover:bg-rose-800">
                          <td className="px-2 md:px-4 py-2 border-b border-rose-700">{entry.name}</td>
                          <td className="px-2 md:px-4 py-2 border-b border-rose-700">{entry.time}</td>
                          <td className="px-2 md:px-4 py-2 border-b border-rose-700">{entry.event}</td>
                          <td className="px-2 md:px-4 py-2 border-b border-rose-700">{entry.place}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </LoadingContent>
    </>
  );
};

export default Events;
