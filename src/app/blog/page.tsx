"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "../components/LoadingThreeDotsJumping"; // Import the loading dots component


const Tips = () => {
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
  return (
    <div className="min-h-screen flex flex-col bg-rose-950 text-white">
      {isLoading ? (
        // Loading dots animation
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-950 z-50">
          <Navbar />
          <LoadingThreeDotsJumping />
        </div>
      ) : ( <>  
      
      <div className="bg-diagonal-stripes">
        <div className="max-w-screen-2xl mx-auto p-6">
          <div className="mt-24 bg-black/80 text-white py-2 px-4 rounded-full mb-4 inline-block">
            <div className="container mx-auto flex flex-col items-center">
              <a href="#yearOftransformation" className="hover:underline">
                Year of Transformation (March 23, 2025)
              </a>
              <a href="#mysecond5k" className="hover:underline mt-1">
                My Second 5K Race: Chasing the Hour (April 26, 2025)
              </a>
              <a href="#runningRout2025" className="hover:underline">
                Grizzly Bear Running Club Kicks Off Its First Running Tour! (October 11, 2025)
              </a>
              <a href="#diaDeMuertos" className="hover:underline">
                What a Night! Our Día de los Muertos 5K Glow Run! (November 01, 2025)
              </a>
              <a href="#laredoMarathon" className="hover:underline">
                From Spectator to Finisher: My Laredo Marathon Journey (November 16, 2025)
              </a>
              <a href="#austinMarathon" className="hover:underline">
                At the end of the road Austin Marathon (January 15, 2026)
              </a>
            </div>
          </div>
      </div>
      <h2 id="austinMarathon" className="text-3xl text-center font-bold mb-4">End of the Road: GBRC 2025-26 Season Finale (January 15, 2026)</h2>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
          <div className="w-full md:col-span-2 p-6 flex items-center justify-center bg-transparent">
            <div className="overflow-hidden rounded-lg shadow-lg w-full h-[200px] md:h-[300px]">
              <Image
                src="/blogPhotos/gbrc_austin_blog.png"
                alt="GBRC 2025-26 Season Finale Group Photo"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                style={{ objectPosition: '50% 0%' }}
              />
            </div>
          </div>
          <div className="col-span- w-full p-6 shadow-lg rounded-xl bg-white">
            <ul className="space-y-1">
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">What started as jokes between three friends finding a new love for running has become a thriving community. Five races completed, countless miles logged, and unforgettable friendships forged on the pavement.
                </p> 
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">Now, as we approach the end of the 2025-26 racing season, we&apos;re preparing for our final chapter: the Austin Marathon. This is where it all started, and this is where we finish—together.
                </p>
                <a href="/blog/blogStories/austinMarathonBlog" className="text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block" aria-label="Read more about End of the Road: GBRC 2025-26 Season Finale">Read more...</a>
              </li>
            </ul> 
          </div>
        </div> 
      <h2 id="laredoMarathon" className="text-3xl text-center font-bold mb-4">From Spectator to Finisher: My Laredo Marathon Journey (November 16, 2025)</h2>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
          <div className="w-full md:col-span-2 p-6 flex items-center justify-center bg-transparent">
            <div className="overflow-hidden rounded-lg shadow-lg w-full h-[200px] md:h-[300px]">
              <Image
                src="/blogPhotos/laredo_marathon_group.jpg"
                alt="Día de los Muertos 5K Glow Run Group Photo"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
          </div>
          <div className="col-span- w-full p-6 shadow-lg rounded-xl bg-white">
            <ul className="space-y-1">
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">Two years ago, I watched runners cross McPherson Street and thought, 
                  &quot;There&apos;s no way a fat guy like me could ever do that.&quot;
                </p> 
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600"> Fast forward to 2025: I found myself at the starting line of the Laredo Marathon, 
                  ready to prove that anything is possible with determination and hard work.
                </p>
                <a href="/blog/blogStories/laredoMarathonBlog" className="text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block" aria-label="Read more about Día de los Muertos 5K Glow Run">Read more...</a>
              </li>
            </ul> 
          </div>
        </div> 
      <h2 id="diaDeMuertos" className="text-3xl text-center font-bold mb-4">What a Night! Our Día de los Muertos 5K Glow Run (November 01, 2025)</h2>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
          <div className="w-full md:col-span-2 p-6 flex items-center justify-center bg-transparent">
            <div className="overflow-hidden rounded-lg shadow-lg w-full h-[200px] md:h-[300px]">
              <Image
                src="/blogPhotos/dia_del_lost_muerto_all_group.jpg"
                alt="Día de los Muertos 5K Glow Run Group Photo"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="col-span- w-full p-6 shadow-lg rounded-xl bg-white">
            <ul className="space-y-1">
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">This past weekend was truly special for the Grizzly Bear Running Club. We participated in our first nighttime race — the Día de los Muertos 5K Glow Run
                </p> 
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">— and it was an unforgettable experience filled with party lights, mariachi music, and a celebration of culture and community.
                </p>
                <a href="/blog/blogStories/diaDeMuertosBlog" className="text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block" aria-label="Read more about Día de los Muertos 5K Glow Run">Read more...</a>
              </li>
            </ul> 
          </div>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

      <h2 id= "runningRout2025"className="text-3xl text-center font-bold mb-4">Grizzly Bear Running Club Kicks Off Its First Running Tour! (October 11, 2025)</h2>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
          <div className="w-full md:col-span-2 p-6 flex items-center justify-center bg-transparent">
            <div className="overflow-hidden rounded-lg shadow-lg w-full h-[200px] md:h-[300px]">
          <Image
            src="/blogPhotos/zombieRunTreat.jpeg"
            alt="Zombie Run Event Image"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
            </div>
          </div>
          <div className="col-span- w-full p-6 shadow-lg rounded-xl bg-white">
            <ul className="space-y-1">
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600">The season’s just getting started, and so are we! The Grizzly Bear Running Club has officially launched its first-ever Running Tour
            </p> 
          </li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600">— here’s how our first few races went and what’s coming next.
             </p>
            <a href="/blog/blogStories/runningTour2025" className="text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block" aria-label="Read more about My Second 5K Race">Read more...</a>
          </li>
            
            </ul> 
          </div>
        </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
      <h2 id= "mysecond5k"className="text-3xl text-center font-bold mb-4">My Second 5K Race: Chasing the Hour (April 26, 2025)</h2>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
          <div className="w-full md:col-span-2 p-6 flex items-center justify-center bg-transparent">
            <div className="overflow-hidden rounded-lg shadow-lg w-full h-[420px] md:h-[600px]">
          <Image
            src="/gallery/events/runningBearthreecasa5k.jpg"
            alt="Contact Image"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
            </div>
          </div>
          <div className="col-span-1 w-full p-6 shadow-lg rounded-xl bg-white">
            <ul className="space-y-1">
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600">Hello! I&apos;m Juan M, aka Bear — one of the founders of the Grizzly Bear Running Club — and this April, I completed my second 5K race.
            </p> 
            <p className="text-gray-600">Why is this race more important than the first? Because this was the first time I went in with a real goal: I wanted to beat my previous time and finish under an hour.
            </p>
            <a href="/blog/blogStories/mySecondFiveKRace" className="text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block" aria-label="Read more about My Second 5K Race">Read more...</a>
          </li>
            </ul> 
          </div>
        </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
        <h2 id= "yearOftransformation"className="text-3xl text-center font-bold mb-4">A Year of Transformation (March 23, 2025)</h2>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
        <div className="w-full max-w-screen-2xl mx-auto p-6 flex items-center justify-center">
          <div className="overflow-hidden rounded-lg shadow-lg w-full h-[500px]">
            <Image 
              src="/johnyJourny/johnyfourth.jpg" 
              alt="Contact Image" 
              width={800} 
              height={600}
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
        <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
            <ul className="space-y-4">
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">A year ago today, I started a journey that, honestly, I never thought I’d get far in. I’d tried to lose weight countless times before—so many times, I’ve lost track of how many failures I’ve had. Each attempt had its small victories, but nothing ever seemed to stick.
                </p>
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-600">Like many others on a weight-loss journey, I had a general idea of what needed to be done: move more, eat better. But I had no clue how to start. It felt like trying to write an essay without knowing the topic. But, one thing I remembered from school was the importance of just starting, even if it was messy. So, I began with simple steps: walking after work, cutting out soda, and eating less fast food. It wasn&apos;t much, but it was something.
                  </p>
                  <a href="/blog/blogStories/yearOfTransformation" className="text-blue-600 hover:text-blue-800 hover:underline">Read more...</a>
              </li>
            </ul> 
          </div>
        </div>
        </div>
      <Footer />
      </>)}
      
    </div>
  );
};

export default Tips;
