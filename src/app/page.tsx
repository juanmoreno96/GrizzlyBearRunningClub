"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "./components/LoadingThreeDotsJumping";
import Head from "next/head";
import { ChevronDown, ArrowRight, BookOpen, Users, NotebookPen, Newspaper, Camera } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToContent = () => {
    const contentSection = document.getElementById('news-section');
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
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
        <meta name="keywords" content="running club, Laredo running, group runs, marathon training, 5K, 10K, half marathon, fitness, community running" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Grizzly Bear Running Club | Fun Group Runs & Community Fitness" />
        <meta property="og:description" content="Join the Grizzly Bear Running Club for fun, friendly group runs and running tips. Open to all levels in Laredo, TX." />
        <meta property="og:image" content="https://grizzlybearrunningclub.com/bannerPhotos/home-banner.jpg" />
        <meta property="og:url" content="https://grizzlybearrunningclub.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grizzly Bear Running Club" />
        <meta name="twitter:description" content="Join the Grizzly Bear Running Club for fun, friendly group runs and running tips." />
      </Head>

      <div className="relative">
        {isLoading ? (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-950 z-50">
            <Navbar />
            <LoadingThreeDotsJumping />
          </div>
        ) : (
          <>
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/bannerPhotos/running-hero.jpg"
                  alt="Athletic runners on a trail"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: "center bottom" }}
                />
                <div className="absolute inset-0 hero-gradient" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                  <span className="font-label text-secondary-container tracking-widest uppercase text-sm mb-4 block">Est. 2024</span>
                  <h1 className="font-headline text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
                    Run Together <br/>Stay <span className="text-secondary-container">Strong.</span>
                  </h1>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <button className="btn-primary-gradient text-white px-8 py-4 rounded-md font-label font-bold text-lg hover:scale-95 transition-transform duration-200">
                        Our Story
                      </button>
                    </Link>
                    <Link href="/events">
                      <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-label font-bold text-lg hover:bg-white/20 transition-all">
                        View Schedule
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToContent}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-red-200 transition-colors animate-bounce z-30"
              >
                <ChevronDown className="h-8 w-8" />
              </button>
            </section>

            {/* Main Content */}
            <div id="news-section">
              <main className="relative z-20 bg-surface min-h-[100vh] text-gray-800">
                {/* Our Story Section */}
                <section className="py-32 bg-surface">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                      <div className="md:col-span-7 order-2 md:order-1">
                        <div className="relative">
                          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                              src="/blogPhotos/laredo_marathon_group.jpg"
                              alt="Group of founding running club members"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-primary-container p-4 md:p-8 flex items-center justify-center rounded-xl shadow-xl">
                            <span className="font-headline text-white text-center text-xl font-bold">A Legacy in Motion</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-5 order-1 md:order-2">
                        <h2 className="font-headline text-primary-container text-4xl md:text-5xl font-bold mb-8 tracking-tight">Our Story</h2>
                        <div className="space-y-6 text-on-surface-variant leading-relaxed font-body text-lg">
                          <p>Founded in 2024, the Grizzly Bear Running Club was born from a singular vision: to bridge the gap between high-performance trail running and a deep, authentic sense of community.</p>
                          <p>We believe that the trail is the ultimate equalizer. Whether you&apos;re chasing an ultra-marathon podium or taking your first steps into the wild, we provide the technical training and the camaraderie needed to conquer any terrain.</p>
                          <div className="pt-4">
                            <Link className="text-secondary font-headline font-bold border-b-2 border-secondary/30 hover:border-secondary transition-all pb-1 inline-flex items-center gap-2" href="/blog">
                              Read our full story
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="py-32 bg-surface-container-low">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                      <div>
                        <span className="font-label text-secondary tracking-widest uppercase text-xs mb-2 block">The Calendar</span>
                        <h2 className="font-headline text-primary-container text-4xl font-bold tracking-tight">Upcoming Events</h2>
                      </div>
                      <Link className="text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-primary transition-colors" href="/events">
                        View All Events
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Event Card 1 */}
                      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
                        <div className="aspect-[16/10] overflow-hidden relative">
                          <Image
                            src="/gallery/events/runningBearthreecasa5k.jpg"
                            alt="Austin Marathon"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">TBA</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Austin Marathon &apos;26</h3>
                          <p className="text-on-surface-variant mb-6 line-clamp-2">Join the Grizzly pack as we take on the streets of the Texas capital. Full support stations provided.</p>
                          <Link href="/events" className="text-primary font-bold font-label text-sm uppercase tracking-tighter hover:gap-4 transition-all flex items-center gap-2">
                            Event Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Event Card 2 */}
                      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
                        <div className="aspect-[16/10] overflow-hidden relative">
                          <Image
                            src="/gallery/trails/DSC00326.jpg"
                            alt="Hill Country Trail"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">TBA</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Hill Country Trail Runs</h3>
                          <p className="text-on-surface-variant mb-6 line-clamp-2">A three-part race series through the rugged hill country trails. All skill levels welcome.</p>
                          <Link href="/events" className="text-primary font-bold font-label text-sm uppercase tracking-tighter hover:gap-4 transition-all flex items-center gap-2">
                            Event Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Event Card 3 */}
                      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
                        <div className="aspect-[16/10] overflow-hidden relative">
                          <Image
                            src="/gallery/community/johnycarlos.jpg"
                            alt="Weekly Coffee Run"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">TBA</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Weekly Coffee Run</h3>
                          <p className="text-on-surface-variant mb-6 line-clamp-2">The heart of our club. 5k social run followed by brew and banter at local partners.</p>
                          <Link href="/events" className="text-primary font-bold font-label text-sm uppercase tracking-tighter hover:gap-4 transition-all flex items-center gap-2">
                            Event Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* What's Happened Section */}
                <section className="py-16 px-6 max-w-5xl mx-auto bg-surface">
                  <h2 className="flex items-center justify-center text-4xl font-bold text-primary-container mb-8 border-b-2 pb-2">
                    What&apos;s Happened Recently?
                    <Newspaper className="ml-2 h-10 w-10 text-primary-container" />
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="group p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:bg-rose-50">
                      <BookOpen className="mb-2 h-6 w-6 text-rose-600"/>
                      <h3 className="text-2xl font-semibold mb-2">Latest Blog!</h3>
                      <p className="text-gray-600">Check out our Latest Blog Post about our recent marathon success and how our members achieved their personal bests.</p>
                      <Link href="/blog" className="inline-flex items-center text-rose-600 font-medium mt-4 transition-all group-hover:text-rose-800">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="group p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:bg-rose-50">
                      <NotebookPen className="mb-2 h-6 w-6 text-rose-600"/>
                      <h3 className="text-2xl font-semibold mb-2">Tips and Tricks</h3>
                      <p className="text-gray-600">Go to our Tips Page to find expert advice on improving your running form, nutrition, and injury prevention.</p>
                      <Link href="/tips" className="inline-flex items-center text-rose-600 font-medium mt-4 transition-all group-hover:text-rose-800">
                        View Our Page
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="group p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:bg-rose-50">
                      <Users className="mb-2 h-6 w-6 text-rose-600"/>
                      <h3 className="text-2xl font-semibold mb-2">Check out our Story</h3>
                      <p className="text-gray-600">Welcome to all new members! Check out our story and follow us through our adventures.</p>
                      <Link href="/contact" className="inline-flex items-center text-rose-600 font-medium mt-4 transition-all group-hover:text-rose-800">
                        Details Here
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </section>

                <hr className="my-8" />

                {/* Gallery Carousel Section */}
                <section className="bg-gray-50 py-16 px-6">
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

                {/* Newsletter CTA */}
                {/* todd: make a functional newsletter form that collects emails and sends to a service like mailchimp or convertskit */}
                <section className="py-24 bg-primary-container relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/30 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 blur-3xl rounded-full" />
                  </div>
                  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="font-headline text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to hit the trails?</h2>
                    <p className="text-on-primary-container text-lg mb-10 max-w-xl mx-auto">Join a community that pushes boundaries and supports your journey every step of the way.</p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                      <Link href="/contact" passHref>
                      <button
                        className="bg-secondary text-white px-8 py-4 rounded-md font-label font-bold uppercase tracking-widest text-sm hover:bg-secondary-container hover:text-primary transition-colors"
                        type="submit"
                      >
                        Contact Us 
                      </button>
                      </Link>
                    </form>
                  </div>
                </section>
              </main>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
