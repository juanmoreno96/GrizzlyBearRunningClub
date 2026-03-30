"use client";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";
import Link from "next/link";

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
  const [activeFilter, setActiveFilter] = useState("all");

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
      "Rock &apos;n&apos; Roll San Antonio – December 7, 2024",
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
        <div className="min-h-screen flex flex-col bg-rose-950 text-on-surface bg-diagonal-stripes">
          <Navbar />

          {/* Hero Section */}
          <div className="relative">
            <div className="absolute inset-0 h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src="/bannerPhotos/home-banner.jpg"
                alt="Hero"
                fill
                className="object-cover object-[center]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-rose-950" />
            </div>
            <header className="relative max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="font-label text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">Upcoming Expeditions</span>
                  <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.9]">Trail & Grit.</h1>
                  <p className="mt-6 text-white/90 text-lg md:text-xl font-medium leading-relaxed">Join the pack. From sunrise community sprints to high-altitude marathons, find your next challenge below.</p>
                </div>
                <div className="flex gap-2 pb-2">
                  <button 
                    onClick={() => setActiveFilter("all")}
                    className={`px-6 py-2 rounded-full font-label text-sm font-bold shadow-sm transition-all ${activeFilter === "all" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}
                  >
                    All Events
                  </button>
                  <button 
                    onClick={() => setActiveFilter("races")}
                    className={`px-6 py-2 rounded-full font-label text-sm font-medium transition-all ${activeFilter === "races" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}
                  >
                    Races
                  </button>
                  <button 
                    onClick={() => setActiveFilter("meetups")}
                    className={`px-6 py-2 rounded-full font-label text-sm font-medium transition-all ${activeFilter === "meetups" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}
                  >
                    Meetups
                  </button>
                </div>
              </div>
            </header>
          </div>

          {/* Events Bento Grid */}
          <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Featured Event (Large Bento Card) */}
              <div className="md:col-span-8 group">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <Image
src="/bannerPhotos/events-banner.jpg"
                      alt="Austin Marathon"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  </div>
                  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-secondary px-3 py-1 rounded text-[10px] font-label font-bold text-white uppercase tracking-tighter">Premium Race</span>
                      <span className="text-white/80 font-label text-sm">February 15, 2026</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">Austin Marathon &apos;26</h2>
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span className="font-medium text-sm">Austin, Texas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span className="font-medium text-sm">05:30 AM</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/events">
                        <button className="btn-primary-gradient text-white px-8 py-4 rounded-md font-label font-bold text-sm tracking-wide shadow-xl active:scale-95 transition-transform">
                          Register Now
                        </button>
                      </Link>
                      <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-md font-label font-bold text-sm border border-white/20 hover:bg-white/20 transition-all">
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Card (Meetup) */}
              <div className="md:col-span-4 group">
                <div className="h-[500px] w-full bg-surface-container-low rounded-xl overflow-hidden flex flex-col transition-all duration-300">
                  <div className="h-1/2 overflow-hidden relative">
                    <Image
                      src="/gallery/community/johnycarlos.jpg"
                      alt="Weekly Coffee Run"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest">Weekly Meetup</span>
                      <h3 className="font-headline text-2xl font-bold mt-2 leading-tight">Downtown Pavement Pounders</h3>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                          <span>TBA</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                          <span>Central Plaza Fountain</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/events" className="mt-6 w-full py-3 rounded-md bg-surface-variant text-on-surface font-label font-bold text-xs uppercase tracking-widest hover:bg-surface-container-highest transition-colors text-center">
                      See Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tertiary Card (Upcoming) */}
              <div className="md:col-span-4 group">
                <div className="h-full bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">
                  <div>
                    <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                    </div>
                    <span className="font-label text-on-surface-variant text-xs font-medium">TBA</span>
                    <h3 className="font-headline text-xl font-bold mt-2">Summit Sprint Series</h3>
                    <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">Vertical gain focus. 1,200ft elevation over 4 miles. Not for the faint of heart.</p>
                  </div>
                  <div className="mt-8">
                    <Link href="/events" className="inline-flex items-center text-secondary font-label font-bold text-sm group-hover:gap-3 transition-all">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                    <div className="mt-4 pt-4 border-t border-surface-container text-[10px] font-label text-on-tertiary-container flex justify-between">
                    </div>
                  </div>
                </div>
              </div>

              {/* Asymmetric Card (Wide Content) */}
              <div className="md:col-span-8 group">
                <div className="h-full bg-surface-container-low rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest">Hike</span>
                    <h3 className="font-headline text-3xl font-extrabold mt-3 leading-tight">Going to the trails</h3>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/></svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-on-surface-variant font-label font-bold">DATE</p>
                          <p className="text-sm font-medium">TBA</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-on-surface-variant font-label font-bold">LOC</p>
                          <p className="text-sm font-medium">TBA</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center gap-4">                    </div>
                  </div>
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                    <Image
                      src="/gallery/trails/DSC00315.jpg"
                      alt="Forest trail"
                      fill
                      className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Club Leaderboard Section */}
          <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight">Club Leaderboard</h2>
                  <p className="text-white mt-2">Celebrating the pack&apos;s seasonal milestones.</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-red-950 text-white text-xs font-bold font-label">All-Time</button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800">
                      <th className="py-3 md:py-4 font-label text-[10px] font-bold uppercase tracking-widest text-white">Rank</th>
                      <th className="py-3 md:py-4 font-label text-[10px] font-bold uppercase tracking-widest text-white">Runner</th>
                      <th className="py-3 md:py-4 font-label text-[10px] font-bold uppercase tracking-widest text-white text-right">Time</th>
                      <th className="py-3 md:py-4 font-label text-[10px] font-bold uppercase tracking-widest text-white text-right hidden md:table-cell">Event</th>
                      <th className="py-3 md:py-4 font-label text-[10px] font-bold uppercase tracking-widest text-white text-right hidden md:table-cell">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {leaderboardData[activeTab].map((entry, index) => (
                      <tr key={index} className="group hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="py-3 md:py-5 font-bold text-white">#{index + 1}</td>
                        <td className="py-3 md:py-5">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-300 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
                              <span className="text-[10px] md:text-xs font-bold">{entry.name.charAt(0)}</span>
                            </div>
                            <span className="font-medium text-white text-sm md:text-base">{entry.name}</span>
                          </div>
                        </td>
                        <td className="py-3 md:py-5 text-right font-medium text-white text-sm md:text-base">{entry.time}</td>
                        <td className="py-3 md:py-5 text-right text-white text-sm md:text-base hidden md:table-cell">{entry.event}</td>
                        <td className="py-3 md:py-5 text-right text-white text-sm md:text-base hidden md:table-cell">{entry.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Leaderboard Tabs */}
              <div className="flex flex-wrap justify-center mt-8 gap-1 sm:gap-2">
                {(["5k", "10k", "halfMarathon", "marathon"] as LeaderboardTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 sm:px-4 py-2 rounded transition-colors text-xs sm:text-sm ${activeTab === tab ? "bg-primary-container text-on-primary-container font-bold border-2 border-secondary" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}
                  >
                    {tab === "halfMarathon" ? "Half" : tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="py-20 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
                <div className="md:w-1/2 flex justify-center p-6">
                  <Image
                    src="/gallery/events/477042486_659149196830259_7450223642701792381_n.jpg"
                    alt="Past Events"
                    className="rounded-lg shadow-lg"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:w-1/2 md:ml-6 text-center bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-white">Past Events</h2>
                  <div className="flex justify-center mb-4 space-x-2">
                    {Object.keys(pastEventsByYear).map((year) => (
                      <button
                        key={year}
                        className={`px-4 py-2 rounded ${activeYear === year ? "bg-primary-container text-on-primary-container font-bold" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}
                        onClick={() => setActiveYear(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-left space-y-2">
                    {pastEventsByYear[activeYear].map((event, idx) => (
                      <li className="text-lg text-white" key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Explore CTA */}
          <section className="max-w-3xl mx-auto px-6 py-20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-950 dark:text-red-500 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-red-950 dark:text-red-50">Never Run Alone.</h2>
            <p className="text-on-surface-variant text-lg mb-10">Connect with fellow runners, explore new terrains, and push your limits in an environment built for the modern trailblazer.</p>
            <Link href="/contact">
              <button className="px-10 py-5 rounded-md bg-gradient-to-br from-red-950 to-red-900 text-white font-label font-extrabold tracking-widest uppercase text-sm shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                Explore Upcoming Races
              </button>
            </Link>
          </section>
        </div>

        <Footer />
      </LoadingContent>
    </>
  );
};

export default Events;
