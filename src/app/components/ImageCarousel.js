"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { galleryEvents } from "../../lib/gallaryEvents";
import { galleryCommunity } from "../../lib/gallaryComunity";
import { galleryTrails } from "../../lib/gallaryTrails";
import "swiper/css";
import "swiper/css/autoplay";

// non-mutating shuffle (returns a new array)
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// stable combined array used during SSR (no randomness here)
const combinedImages = [...galleryEvents, ...galleryCommunity, ...galleryTrails];

export default function SwiperCarousel() {
  // initial state = combinedImages so server and initial client render match
  const [slides, setSlides] = useState(combinedImages);

  // shuffle only on the client after hydration
  useEffect(() => {
    setSlides(shuffleArray(combinedImages));
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1.5}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        enabled: true
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="mySwiper h-96 w-full"
    >
      {slides.map((image) => (
        <SwiperSlide key={image.id}>
          <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}