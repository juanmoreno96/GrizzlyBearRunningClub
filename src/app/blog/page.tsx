"use client";
import { useState } from "react";
import Footer from "../components/footer";
import Image from "next/image";
import LoadingContent from "../components/LoadingContent";
import Head from "next/head";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const categories = ["All Stories", "Training", "Race Reports","Community"];

  const categoryButtonClass = (category: string) =>
    `px-6 py-2 rounded-full font-label text-xs uppercase tracking-wider whitespace-nowrap transition-colors ${
      selectedCategory === category
        ? 'bg-primary text-white'
        : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
    }`;

  const blogs = [
    {
      id: 'madeOfIron',
      title: 'Made of Iron: My Austin Marathon Journey',
      date: 'February 15, 2026',
      category: 'Race Reports',
      image: '/blogPhotos/austinMarathon26/austinMarathon_johny_running.jpg',
      excerpt: 'Twenty-six miles of grit, elevation, and the relentless heat of the Texas sun. Here\'s how I pushed through the wall at mile 20 and found a new version of myself.',
      link: '/blog/blogStories/austinmarathonrun26',
      featured: true
    },
    {
      id: 'austinMarathon',
      title: 'End of the Road: GBRC 2025-26 Season Finale',
      date: 'January 15, 2026',
      category: 'Community',
      image: '/blogPhotos/gbrc_austin_blog.png',
      excerpt: 'What started as jokes between three friends finding a new love for running has become a thriving community. Five races completed, countless miles logged, and unforgettable friendships forged on the pavement.',
      link: '/blog/blogStories/austinMarathonBlog'
    },
    {
      id: 'laredoMarathon',
      title: 'From Spectator to Finisher: My Laredo Marathon Journey',
      date: 'November 16, 2025',
      category: 'Race Reports',
      image: '/blogPhotos/laredo_marathon_group.jpg',
      excerpt: 'Two years ago, I watched runners cross McPherson Street and thought, "There\'s no way a fat guy like me could ever do that." Fast forward to 2025: I found myself at the starting line of the Laredo Marathon.',
      link: '/blog/blogStories/laredoMarathonBlog'
    },
    {
      id: 'diaDeMuertos',
      title: 'What a Night! Our Día de los Muertos 5K Glow Run',
      date: 'November 01, 2025',
      category: 'Community',
      image: '/blogPhotos/dia_del_lost_muerto_all_group.jpg',
      excerpt: 'This past weekend was truly special for the Grizzly Bear Running Club. We participated in our first nighttime race — the Día de los Muertos 5K Glow Run — and it was an unforgettable experience.',
      link: '/blog/blogStories/diaDeMuertosBlog'
    },
    {
      id: 'runningTour2025',
      title: 'Grizzly Bear Running Club Kicks Off Its First Running Tour!',
      date: 'October 11, 2025',
      category: 'Community',
      image: '/blogPhotos/zombieRunTreat.jpeg',
      excerpt: 'The season\'s just getting started, and so are we! The Grizzly Bear Running Club has officially launched its first-ever Running Tour — here\'s how our first few races went and what\'s coming next.',
      link: '/blog/blogStories/runningTour2025'
    },
    {
      id: 'mysecond5k',
      title: 'My Second 5K Race: Chasing the Hour',
      date: 'April 26, 2025',
      category: 'Training',
      image: '/gallery/events/runningBearthreecasa5k.jpg',
      excerpt: 'Hello! I\'m Juan M, aka Bear — one of the founders of the Grizzly Bear Running Club — and this April, I completed my second 5K race. Why is this race more important than the first? Because this was the first time I went in with a real goal.',
      link: '/blog/blogStories/mySecondFiveKRace'
    },
    {
      id: 'yearOfTransformation',
      title: 'A Year of Transformation',
      date: 'March 23, 2025',
      category: 'Community',
      image: '/johnyJourny/johnyfourth.jpg',
      excerpt: 'A year ago today, I started a journey that, honestly, I never thought I\'d get far in. I\'d tried to lose weight countless times before—so many times, I\'ve lost track of how many failures I\'ve had.',
      link: '/blog/blogStories/yearOfTransformation'
    }
  ];

  const filtered = selectedCategory === "All Stories"
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

  const featured = filtered.find((b) => b.featured);
  const gridBlogs = filtered.filter((b) => !b.featured);

  return (
    <LoadingContent>
      <Head>
        <title>Grizzly Club Blog | Grizzly Bear Running Club</title>
        <meta name="description" content="Stories from the trail: running adventures, race recaps, training tips, and community experiences from the Grizzly Bear Running Club." />
      </Head>
      <div className="w-full bg-rose-950 bg-diagonal-stripes">
        <main className="pt-32 pb-20 max-w-7xl mx-auto">
          {/* Page Header Section */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-label text-secondary font-semibold uppercase tracking-[0.2em] mb-4 text-xs">Stories from the trail</p>
              <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-white tracking-tight leading-none">
                Grizzly Club Blog
              </h1>
            </div>
            {/* Simplified Category Filter */}
            <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={categoryButtonClass(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>
        {/* Featured Post - Asymmetric Layout */}
        {featured && (
          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 bg-surface-container-low rounded-xl overflow-hidden group">
              <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 to-transparent"></div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Featured Story</span>
                  <span className="w-8 h-[1px] bg-outline-variant"></span>
                  <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider">8 min read</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-body">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-label text-on-surface-variant uppercase tracking-tighter">{featured.date}</span>
                  <a href={featured.link} className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-widest font-bold text-secondary group/btn">
                    Read Full Story
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Main Blog Grid - Editorial Rhythm */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {gridBlogs.map((blog, index) => (
            <article key={blog.id} className={`flex flex-col group overflow-visible ${index === 3 ? 'md:col-span-2' : ''}`}>
              {index === 3 ? (
                // Asymmetric Large Card
                <div className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low p-8 rounded-xl shadow-sm shadow-red-900/5 group">
                  <div className="w-full md:w-1/2 aspect-video md:aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-label text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-secondary/10 text-secondary rounded">{blog.category}</span>
                      <span className="text-xs text-on-surface-variant/60 font-label">{blog.date}</span>
                    </div>
                    <h3 className="text-3xl font-headline font-bold text-primary mb-6 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-on-surface-variant text-base leading-relaxed mb-8 font-body">
                      {blog.excerpt}
                    </p>
                    <a href={blog.link} className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-primary transition-colors inline-block text-center">
                      Full {blog.category === 'Race Reports' ? 'Race Recap' : 'Story'}
                    </a>
                  </div>
                </div>
              ) : (
                // Regular Card
                <div className="bg-surface-container-low rounded-xl flex flex-col min-h-[480px] overflow-visible">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-label text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-secondary/10 text-secondary rounded">{blog.category}</span>
                      <span className="text-xs text-on-surface-variant/60 font-label">{blog.date}</span>
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-primary mb-4 leading-snug group-hover:text-secondary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">
                      {blog.excerpt}
                    </p>
                    <a href={blog.link} className="mt-auto inline-flex items-center font-label text-xs text-black uppercase tracking-widest font-bold border-b-2 border-secondary/20 pb-1 hover:border-secondary transition-all w-fit">
                      Read more
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>
        
        </main>
      </div>
      <Footer />
    </LoadingContent>
  );
};

export default Blog;
