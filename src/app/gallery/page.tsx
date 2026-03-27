"use client";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";
import { useState } from "react";
import { galleryCommunity } from "../../lib/galleryCommunity";
import { galleryEvents } from "../../lib/galleryEvents";
import { galleryTrails } from "../../lib/galleryTrails";
import { galleryMerch } from "../../lib/galleryMerch";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "community" | "events" | "trails" | "merch";
  aspectRatio: string;
};

const allGalleryItems: GalleryItem[] = [
  ...galleryCommunity.map((img) => ({
    ...img,
    id: `community-${img.id}`,
    category: "community" as const,
    aspectRatio: "square",
  })),
  ...galleryEvents.map((img) => ({
    ...img,
    id: `events-${img.id}`,
    category: "events" as const,
    aspectRatio: "square",
  })),
  ...galleryTrails.map((img) => ({
    ...img,
    id: `trails-${img.id}`,
    category: "trails" as const,
    aspectRatio: "square",
  })),
  ...Object.entries(galleryMerch).map(([id, img]) => ({
    id: `merch-${id}`,
    src: img.src,
    alt: "Merchandise design",
    category: "merch" as const,
    aspectRatio: "square",
  })),
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "events", label: "Events" },
  { id: "trails", label: "Trail Runs" },
  { id: "community", label: "Community" },
  { id: "merch", label: "Merch/Designs" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all"
    ? allGalleryItems
    : allGalleryItems.filter((item) => item.category === activeFilter);

  return (
    <LoadingContent>
      <Head>
        <title>Grizzly Bear Running Club | Gallery</title>
        <meta name="description" content="Explore the Grizzly Bear Running Club gallery featuring community photos, event highlights, trail runs, and merchandise designs." />
        <meta name="keywords" content="running club gallery, Laredo runners photos, community running events, trail running, running merchandise" />
        <meta property="og:title" content="Grizzly Bear Running Club | Gallery" />
        <meta property="og:description" content="Explore photos from our running community, events, trails, and merchandise." />
        <meta property="og:url" content="https://grizzlybearrunningclub.com/gallery" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen flex flex-col bg-background text-on-background bg-rose-950 bg-diagonal-stripes">
        <Navbar />

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/bannerPhotos/events-banner.jpg"
              alt="Hero"
              fill
              className="object-cover object-[center]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-rose-950" />
          </div>
          <header className="relative pt-48 md:pt-56 pb-8 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">Visual Journal</span>
                <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tighter text-white leading-none mb-4">
                  The Modern <br/> Trailblazer.
                </h1>
                <p className="text-lg text-white/90 max-w-md font-medium">
                  A curated collection of moments from the trail, the road, and the finish line.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full font-label text-sm transition-all ${
                      activeFilter === cat.id
                        ? "bg-primary-container text-on-primary"
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

        {/* Masonry Gallery Grid */}
        <main className="max-w-7xl mx-auto px-6 pb-24">
          {/* Masonry Grid - All Photos */}
          <div className="masonry-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="masonry-item group cursor-pointer">
                <div className="relative overflow-hidden bg-surface-container rounded-xl">
                  <div className="relative aspect-square">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="font-label text-xs uppercase tracking-widest text-white/80 mb-1">
                      {item.category === "events" ? "Austin Marathon '26" : item.category === "trails" ? "Trail Runs" : item.category === "community" ? "Community" : "Merch/Designs"}
                    </span>
                    <h3 className="font-headline text-white text-xl">{item.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* CTA Section: Join Club */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="bg-primary-container rounded-2xl p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-primary tracking-tighter mb-6">Want to be in the frame?</h2>
              <p className="text-on-primary-container text-lg font-medium opacity-90 mb-8">Join the Grizzly Bear Running Club and start your journey today. From trail veterans to marathon first-timers.</p>
              <Link href="/contact">
                <button className="btn-primary-gradient text-white px-10 py-4 rounded-lg font-headline font-bold scale-95 hover:scale-100 active:scale-90 transition-transform">
                  Get in Touch
                </button>
              </Link>
            </div>
            {/* Decorative Gradient Shape */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/20 blur-3xl rounded-full" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/20 blur-3xl rounded-full" />
          </div>
        </section>
      </div>

      <Footer />
    </LoadingContent>
  );
};

export default Gallery;
