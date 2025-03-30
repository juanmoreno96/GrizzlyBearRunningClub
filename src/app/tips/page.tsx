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
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      {isLoading ? (
        // Loading dots animation
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-950 z-50">
          <Navbar />
          <LoadingThreeDotsJumping />
        </div>
      ) : ( <>  

<div className="absolute inset-0 h-1/3 bg-cover bg-center bg-[url('/bannerPhotos/home-banner.jpg')] opacity-40"></div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 z-10 max-w-screen-2xl mx-auto">
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
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
      <h2 className="text-3xl text-center font-bold mb-4 underline">A Year of Transformation</h2>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          <Image src="/johnyJourny/johnysecond.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
        <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">A year ago today, I started a journey that, honestly, I never thought I’d get far in. I’d tried to lose weight countless times before—so many times, I’ve lost track of how many failures I’ve had. Each attempt had its small victories, but nothing ever seemed to stick.
              </p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">Like many others on a weight-loss journey, I had a general idea of what needed to be done: move more, eat better. But I had no clue how to start. It felt like trying to write an essay without knowing the topic. But, one thing I remembered from school was the importance of just starting, even if it was messy. So, I began with simple steps: walking after work, cutting out soda, and eating less fast food. It wasn’t much, but it was something.
              </p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">People often ask why I started this journey. And while I wish I could say it was about becoming fit or leading a healthier life, the truth is more raw. It came from stress—stress from my job, but more than that, from the hurtful words of my ex. She said some cruel things about my weight, and those words hit harder than I ever expected. I had always been a bit self-conscious about my body. At 347 lbs, I had learned to accept myself, but her words shattered that. I realized then that I needed change—not just physically, but emotionally, mentally, and spiritually. I was so dissatisfied with my life that it became clear: I had to do something about it.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">At first, it was a struggle. I had no idea what I was doing. My first workout? A 15-minute walk around Cielito Lindo Park. When I was done, I was out of breath, my back ached, I was drenched in sweat, and feeling dizzy from dehydration. But somehow, I kept going. Even when I wanted to quit, her words—those sharp, hurtful words—echoed in my head. Work wasn’t helping either. I was overloaded with responsibilities, and my ideas were dismissed at every turn. I felt invisible. But something inside me told me to keep going. So, I did.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">Months passed, and progress was slow. After three months of walking and trying to eat healthier, I still couldn’t walk for more than 15 minutes without feeling exhausted. I was disappointed, frustrated, and close to giving up. I even started to believe my ex was right—that maybe I was destined to be overweight forever. After all, I had tried so many times before and had always been overweight. What made this time different? But then, a small voice inside me said, “Just give it one more week.” So, I did. And I’m so glad I did.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">One day, after that extra week of pushing through, I looked in the mirror and saw something I hadn’t seen in months: a noticeable change. Not a huge difference, but enough to make my size 58 pants feel looser around the waist. For anyone who has struggled with their weight, you know that feeling. It was a victory, and it was enough to fuel me for the next phase.</p>
            </li>
          </ul> 
        </div>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          <Image src="/johnyJourny/johnythird.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
        <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">As the weeks went on, I started adding resistance training into the mix. I reconnected with a good friend who had taught me about cardio back in my college days, and my old supervisor introduced me to flexibility training. It was clear now—I was slowly practicing all the key components of fitness: resistance, diet, flexibility, and cardio. Little did I know, I was building the foundation for something far greater than just weight loss.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">But something more than just physical transformation was happening. I was facing challenges at work and dealing with the fallout from my breakup, and it pushed me to reconnect with God. I started praying for guidance, strength, and clarity. What happened next is something I still don’t fully understand, but I believe it was divine intervention.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">One particularly tough day, I walked out of work feeling drained. I asked God if I was on the right path, if He was even there, and as I stepped into the parking lot, something surreal happened. It felt like the air around me shifted, and I was surrounded by butterflies. It sounds strange, but it was beautiful. That moment stayed with me.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">The next day at the gym, an elderly man I had never seen before approached me. He touched my shoulder and, calmly, told me, “You’re on the right path, and she didn’t deserve you. If only you knew the better things in store for you.” In that moment, I felt an overwhelming sense of peace, like everything would be okay. When I turned to thank him, he was gone—vanished. I looked for him, but no one at the gym remembered him. To this day, I don’t know if he was an angel or God’s messenger, but he showed up at some of the hardest moments of my life. And it gave me hope.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">Fast forward, and fitness became my anchor. Working out wasn’t a chore anymore; it was a form of meditation. I wasn’t just losing weight—I was rediscovering who I was. I started running. A friend invited me to a 5k, and despite my doubts, I signed up. I could barely run for a minute without feeling like I was dying, but I stuck with it. Running went from survival mode to something I enjoyed. One day, I ran a 5k nonstop. It wasn’t fast, but I finished. And that was all that mattered.</p>
            </li>
          </ul> 
        </div>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-5 max-w-screen-2xl mx-auto">
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          <Image src="/johnyJourny/johnyfifth.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
        <div className="col-span-2 w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">The Zombie Run in October 2024 was a test, one I wasn’t sure I could pass. But I did. Though I was one of the last to cross the finish line, I met my goals: I ran the whole race and didn’t come in last. The next few months were a blur of races. I kept pushing, and each time, I improved.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">The San Antonio race in December 2024 was a game-changer. Despite freezing temperatures and rain, I pushed myself harder than ever before. I passed person after person and finished in 32 minutes—my best time yet. It was a clear sign that all my hard work was paying off.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">But I didn’t stop there. I kept training, kept researching, kept improving. By the time I ran the George Washington Celebration Run, I had shaved minutes off my time, finishing in 28 minutes—my fastest yet. I wasn’t just keeping up; I was ahead of the pack. And for the first time, I felt like I belonged.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-600">Throughout this process, I realized something important: I had become a hybrid athlete. Running was no longer my sole focus. My resistance training and flexibility were just as important. My relationship with food had transformed. I gained muscle, lost weight, and, most importantly, grew emotionally and mentally. I got a new job, one that supported my mental health. I found a family in the Laredo fitness community, and we pushed each other to be better every day.</p>
            </li>
          </ul> 
        </div>
      </div>
      <div className = "relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <Image src="/johnyJourny/johnyfirst.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={400} height={300}/>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/johnyJourny/johnyfourth.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={335} height={600}/>
         </div>
      </div>
      <Footer />
      </>)}
      
    </div>
  );
};

export default Tips;