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

<div className="absolute inset-0 h-1/3 bg-cover bg-center bg-[url('/bannerPhotos/home-banner.jpg')] opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
    <div className = "bg-diagonal-stripes z-10">
       <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 mt-24 max-w-screen-2xl mx-auto">
        <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Plan: The Key to Success</h2>
          <p className="text-gray-600 mb-6">
            The key to success is consistency. Every goal—big or small—begins with a single step, and then another, and another.
            Progress may seem slow at first, but trust the process. This plan might not look flashy, but it delivers results.
            Follow along, stay patient, and enjoy the journey!
          </p>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">1. Start Small & Listen to Your Heart</strong>
              <p className="text-gray-600">Your heart rate is your best guide. Stay mindful of it, even if youre moving at a slow pace. Build a strong foundation first.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">2. Consistency, Consistency, Consistency</strong>
              <p className="text-gray-600">Nothing beats showing up. Keep going, even on days when motivation is low. Small efforts add up.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">3. Increase the Challenge</strong>
              <p className="text-gray-600">Once your heart rate stays consistently low during workouts, start gradually increasing your tempo and distance. Push yourself, but dont rush the process.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">4. Level Up</strong>
              <p className="text-gray-600">When both your heart rate and endurance feel strong, its time to mix things up. Split your week between sprints and long runs, and add weight training to keep your joints and smaller muscles strong.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">5. Recover Smart</strong>
              <p className="text-gray-600">Rest is just as important as training. Listen to your body, recover well, and never push beyond your limits—unless you do it wisely. Injuries will only set you back, so train with both effort and caution.</p>
            </li>
          </ul>
          <p className="mt-6 text-gray-700 font-semibold">
            Stick with it, trust the process, and youll see results. The journey might be tough, but every step makes you stronger.
          </p>
        </div>
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          <Image src="/gallery/community/juanLunaWoods.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          <Image src="/gallery/johnyRuuning.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
        <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Runners Diet</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">1. Macronutrient Balance</strong>
              <p className="text-gray-600">To perform your best, its crucial to maintain a balanced diet rich in carbohydrates, protein, and healthy fats, with an emphasis on carbs for energy. The ideal ratio varies for everyone, so dont be afraid to experiment and find what works best for you.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">2. Carbs, Carbs, Carbs</strong>
              <p className="text-gray-600">If youre running three or more times a week, you need plenty of carbohydrates to fuel your workouts. A great breakfast could include oatmeal with berries and honey alongside whole-grain toast. Prioritize complex carbs like whole grains, brown rice, and quinoa over processed options like candy and sugary granola bars.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">3. Carb-Loading for Race Day</strong>
              <p className="text-gray-600">Running burns a lot of energy, and on race days, you can lose 2-4 pounds or more just from exertion. To maintain energy levels and prevent sudden weight drops, carb-load in the days leading up to your race. Ideally, start increasing your carbohydrate intake at least two days before race day—some runners even begin a week in advance.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">4. Post-Race Recovery</strong>
              <p className="text-gray-600">After a run, your body craves fuel for recovery. Eat a nutrient-dense meal that includes high-quality carbs, protein, and healthy fats. Also, ensure you get plenty of rest to allow your body to rebuild.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong className="text-lg text-gray-800">5. Hydration Matters</strong>
              <p className="text-gray-600">Staying properly hydrated is essential, not just during runs but throughout the day. While Himalayan salt is beneficial, its important to replenish all six essential electrolytes (sodium, potassium, calcium, magnesium, chloride, and phosphate) for optimal recovery and performance.
              </p>
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