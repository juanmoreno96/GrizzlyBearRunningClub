"use client";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";

const Tips = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "training", label: "Training" },
    { id: "nutrition", label: "Nutrition" },
    { id: "recovery", label: "Recovery" },
  ];

  const tips = [
    {
      id: 1,
      category: "training",
      title: "The 16-Week Sub-3 Marathon Blueprint",
      description: "Mastering the sub-3 hour marathon requires more than just high weekly volume. We explore the critical role of lactate threshold sessions.",
      image: "/gallery/trails/DSC00422.jpg",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 2,
      category: "nutrition",
      title: "Glycogen Loading: Race Day Fuel",
      description: "Learn how to properly fuel your body before, during, and after your race.",
      image: "/gallery/johnyRuuning.jpg",
      readTime: "5 min read",
    },
    {
      id: 3,
      category: "recovery",
      title: "Rest Days: The Secret Weapon",
      description: "Why recovery is just as important as training. Listen to your body and train smart.",
      image: "/gallery/community/juanLunaWoods.jpg",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "training",
      title: "Start Small & Listen to Your Heart",
      description: "Your heart rate is your best guide. Stay mindful of it, even if you're moving at a slow pace.",
      image: "/gallery/trails/DSC00290.jpg",
      readTime: "6 min read",
    },
    {
      id: 5,
      category: "nutrition",
      title: "Carbs, Carbs, Carbs",
      description: "If you're running three or more times a week, you need plenty of carbohydrates to fuel your workouts.",
      image: "/gallery/events/runningBearcasa5k.jpg",
      readTime: "7 min read",
    },
    {
      id: 6,
      category: "training",
      title: "Master Your Mechanics",
      description: "Every Monday, our biomechanics team breaks down one specific element of running form.",
      image: "/gallery/trails/DSC00315.jpg",
      readTime: "8 min read",
    },
  ];

  const filteredTips = activeFilter === "all" 
    ? tips 
    : tips.filter(tip => tip.category === activeFilter);

  const featuredTip = filteredTips.find(tip => tip.featured) || filteredTips[0];
  const otherTips = filteredTips.filter(tip => tip !== featuredTip);

  return (
    <LoadingContent>
      <Head>
        <title>Grizzly Bear Running Club | Running Tips</title>
        <meta name="description" content="Get expert running tips and training advice from the Grizzly Bear Running Club. Learn about marathon training, proper form, nutrition, and staying motivated." />
        <meta name="keywords" content="running tips, marathon training, running advice, training plan, running form, nutrition for runners" />
        <meta property="og:title" content="Grizzly Bear Running Club | Running Tips" />
        <meta property="og:description" content="Expert running tips and training advice for all levels." />
        <meta property="og:url" content="https://grizzlybearrunningclub.com/tips" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen flex flex-col bg-rose-950 text-on-surface bg-diagonal-stripes">
        <Navbar />

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/bannerPhotos/running-hero.jpg"
              alt="Hero"
              fill
              className="object-cover object-[center_bottom]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-rose-950" />
          </div>
          <header className="relative max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="font-label text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">The Modern Trailblazer Hub</span>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.9]">Expertise for the <span className="text-secondary">Long Run.</span></h1>
                <p className="mt-6 text-white/90 text-lg md:text-xl font-medium leading-relaxed">Curated intelligence for the dedicated runner. From biomechanics to nutrition, we&apos;ve got you covered.</p>
              </div>
              <div className="flex flex-wrap gap-2 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 py-2 rounded-full font-label text-sm transition-all ${
                      activeFilter === cat.id
                        ? "bg-primary-container text-on-primary-container"
                        : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </header>
        </div>

        {/* Tips Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          {/* Featured Tip */}
          {featuredTip && (
            <div className="md:col-span-8 group mb-8">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={featuredTip.image}
                    alt={featuredTip.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                </div>
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-secondary px-3 py-1 rounded text-[10px] font-label font-bold text-white uppercase tracking-tighter">{featuredTip.category}</span>
                    <span className="text-white/80 font-label text-sm">{featuredTip.readTime}</span>
                  </div>
                  <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">{featuredTip.title}</h2>
                  <p className="text-white/90 text-lg mb-8 max-w-xl">{featuredTip.description}</p>
                  <button className="btn-primary-gradient text-white px-8 py-4 rounded-md font-label font-bold text-sm tracking-wide shadow-xl active:scale-95 transition-transform w-fit">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTips.map((tip) => (
              <div key={tip.id} className="group cursor-pointer">
                <div className="h-full bg-surface-container-low rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container">
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={tip.image}
                      alt={tip.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest">{tip.category}</span>
                      <h3 className="font-headline text-xl font-bold mt-2 leading-tight group-hover:text-secondary transition-colors">{tip.title}</h3>
                      <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">{tip.description}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-surface-container">
                      <span className="text-xs text-on-tertiary-container font-label">{tip.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Plan Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest mb-4">Training Plan</span>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-6">The Key to Success</h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  The key to success is consistency. Every goal—big or small—begins with a single step, and then another, and another.
                  Progress may seem slow at first, but trust the process.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <div>
                      <strong className="text-on-surface block">Start Small & Listen to Your Heart</strong>
                      <p className="text-on-surface-variant text-sm">Build a strong foundation first.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <div>
                      <strong className="text-on-surface block">Consistency, Consistency, Consistency</strong>
                      <p className="text-on-surface-variant text-sm">Small efforts add up.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <div>
                      <strong className="text-on-surface block">Recover Smart</strong>
                      <p className="text-on-surface-variant text-sm">Rest is just as important as training.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[400px]">
                <Image
                  src="/gallery/community/juanLunaWoods.jpg"
                  alt="Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Runner's Diet Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest mb-4">Nutrition</span>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-6">Runner&apos;s Diet</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <div>
                      <strong className="text-on-surface block">Macronutrient Balance</strong>
                      <p className="text-on-surface-variant text-sm">Carbs, protein, and healthy fats.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <div>
                      <strong className="text-on-surface block">Carb-Loading for Race Day</strong>
                      <p className="text-on-surface-variant text-sm">Start 2 days before race day.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <div>
                      <strong className="text-on-surface block">Hydration Matters</strong>
                      <p className="text-on-surface-variant text-sm">Replenish all six electrolytes.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[400px]">
                <Image
                  src="/gallery/johnyRuuning.jpg"
                  alt="Runner's Diet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mechanics Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest mb-4">The Blueprint Series</span>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">Master Your Mechanics.</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">Our biomechanics team breaks down one specific element of running form—from foot strike to arm carriage. High-definition video analysis included.</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.instagram.com/grizzlybear_runningclub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-label text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity inline-block"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[400px] relative">
              <Image
                src="/gallery/trails/DSC00290.jpg"
                alt="Running form analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </LoadingContent>
  );
};

export default Tips;
