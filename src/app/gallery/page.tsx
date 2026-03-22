"use client";

import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";

const Gallery = () => {
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
      <div className="min-h-screen flex flex-col bg-rose-950 text-white">
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-20 bg-diagonal-stripes">
          {[
            { href: "/gallery/community", title: "Community", src: "/gallery/community/johnycarlos.jpg" },
            { href: "/gallery/events", title: "Events", src: "/gallery/events/477042486_659149196830259_7450223642701792381_n.jpg" },
            { href: "/gallery/merch", title: "Merch/Designs", src: "/gallery/merch/merchvtwo.jpg" },
            { href: "/gallery/trails", title: "Trails", src: "/gallery/trails/bear%20one.jpg" },
          ].map((item, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Link href={item.href} passHref>
                <div className="absolute inset-0 flex items-center justify-center text-center z-10 transition-transform duration-300 group-hover:scale-105">
                  <h1 className="text-2xl font-bold text-white drop-shadow-lg">{item.title}</h1>
                </div>

                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </LoadingContent>
  );
};

export default Gallery;
