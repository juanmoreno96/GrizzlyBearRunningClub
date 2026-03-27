"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";
import { Instagram, Activity, MapPin, Mail, Clock } from "lucide-react";

const JoinUs = () => {
  return (
    <LoadingContent>
      <Head>
        <title>Join the Grizzly Bear Running Club | Running</title>
        <meta
          name="description"
          content="Join the Grizzly Bear Running Club in Laredo, TX. Sign up for our running group, participate in marathons, 5K, 10K, and half marathon events. All levels welcome!"
        />
        <meta name="keywords" content="join running club, Laredo running, marathon sign up, 5K, 10K, half marathon, running group, fitness community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Join the Grizzly Bear Running Club" />
        <meta property="og:description" content="Join our running community in Laredo, TX. All levels welcome - from beginners to marathon runners." />
        <meta property="og:url" content="https://grizzlybearrunningclub.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://grizzlybearrunningclub.com/bannerPhotos/events-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join the Grizzly Bear Running Club" />
        <meta name="twitter:description" content="Join our running community in Laredo, TX. All levels welcome!" />
      </Head>

      <div className="min-h-screen flex flex-col bg-rose-950 text-on-surface bg-diagonal-stripes">
        <Navbar />

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/bannerPhotos/lunaEars.jpg"
              alt="Hero"
              fill
              className="object-cover object-[center_bottom]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-rose-950" />
          </div>
          <header className="relative max-w-7xl mx-auto px-6 pt-48 pb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="font-label text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.9]">Never Run <span className="text-secondary">Alone.</span></h1>
                <p className="mt-6 text-white/90 text-lg md:text-xl font-medium leading-relaxed">Join the pack. From sunrise community sprints to high-altitude marathons, find your next challenge below.</p>
              </div>
            </div>
          </header>
        </div>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest mb-4">Our Story</span>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-6">Started with a Bear & a Dream</h2>
                <p className="text-on-surface-variant mb-4 leading-relaxed">
                  Grizzly Bear Running Club started with a simple drawing of a bear with a backpack and a newfound love for running and hiking. What began as just an idea soon became a community built on adventure, perseverance, and the joy of movement.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  We may not be the fastest on the trails, but we believe in welcoming everyone—whether you&apos;re sprinting up mountains or taking it one step at a time. Join us as we explore the outdoors, embrace the challenge, and grow together, one run and hike at a time.
                </p>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] lg:min-h-[400px]">
                <Image
                  src="/gallery/community/trioOg.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="mb-8">
            <span className="font-label text-secondary font-semibold tracking-widest uppercase text-xs mb-2 block">Find Us</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white">Join Us on Our Runs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Laredo */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/gallery/community/lunaEars.jpg"
                  alt="Laredo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-white">Laredo, TX</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-on-surface-variant">North Central Park</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-on-surface-variant">Every Wednesday, 5:30 AM</span>
                </div>
                <div className="h-80 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7071.515790563925!2d-99.47216621602932!3d27.601034662518988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866120a0e58514df%3A0x71da9bd4c3366a59!2sNorth%20Central%20Park!5e0!3m2!1sen!2sus!4v1739734318047!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Round Rock */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/gallery/trails/DSC00315.jpg"
                  alt="Round Rock"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-white">Round Rock, TX</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-on-surface-variant">Virgil Rabb Pavilion</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-on-surface-variant">Weekend Long Runs</span>
                </div>
                <div className="h-80 w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1718.262874972042!2d-97.62584750520374!3d30.53444670403131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d08a6a9e92f7%3A0x121c91cd8529a794!2sVirgil%20Rabb%20Pavilion!5e0!3m2!1sen!2sus!4v1757206662661!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[300px] lg:min-h-[400px]">
                <Image
                  src="/gallery/merch/merchvtwo.jpg"
                  alt="Connect"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="font-label text-secondary text-xs font-bold uppercase tracking-widest mb-4">Connect With Us</span>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-6">Join the Pack</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Follow us on social media or come join us for a run. All levels welcome—from first-time runners to seasoned marathoners.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://www.instagram.com/grizzlybear_runningclub/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors group"
                  >
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                      <Instagram className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-label text-xs text-on-surface-variant uppercase tracking-wider">Instagram</p>
                      <p className="font-headline font-bold text-on-surface">@grizzlybear_runningclub</p>
                    </div>
                  </a>
                  <a 
                    href="https://www.strava.com/clubs/1689981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors group"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <Activity className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-label text-xs text-on-surface-variant uppercase tracking-wider">Strava</p>
                      <p className="font-headline font-bold text-on-surface">Grizzly Bear Running Club</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-surface-container rounded-xl">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-label text-xs text-on-surface-variant uppercase tracking-wider">Email</p>
                      <p className="font-headline font-bold text-on-surface">TBA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
          <div className="bg-surface-container-lowest p-12 rounded-2xl tonal-shadow">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">Ready to Run?</h2>
            <p className="text-on-surface-variant mb-8">Join us for a run and experience the community yourself. No matter your pace, you&apos;re welcome here.</p>
            <a 
              href="https://www.instagram.com/grizzlybear_runningclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary-gradient text-white px-10 py-5 rounded-md font-label font-bold tracking-widest uppercase text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              Join Us Tomorrow
            </a>
          </div>
        </section>

        {/* Athletic Club CTA Section */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="bg-stone-950 p-12 rounded-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">Interested in Powerlifting?</h2>
            <p className="text-gray-300 mb-8">If you&apos;re interested in powerlifting or lifting, you might like our sister club Grizzly Bear Athletic Club.</p>
            <a 
              href="/athletic"
              className="inline-block bg-white text-black px-10 py-5 rounded-md font-label font-bold tracking-widest uppercase text-sm hover:bg-gray-200 active:scale-95 transition-all"
            >
              Visit Grizzly Bear Athletic Club
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </LoadingContent>
  );
};

export default JoinUs;
