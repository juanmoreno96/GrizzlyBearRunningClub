import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar />

      <div className="absolute inset-0 h-1/3 bg-cover bg-center bg-[url('/bannerPhotos/Events-banner.jpg')] opacity-40"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex justify-center p-6">
          <img src="/gallery/juanjuanrun.jpg" alt="Contact Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
          <h2 className="text-3xl text-center font-bold mb-4 underline">Past Events</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li className="text-lg">Santa run December</li>
            <li className="text-lg">Zombie run October</li>
            <li className="text-lg">Run George Run February</li>
          </ul>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex justify-center p-6">
          <img src="/gallery/johnyRuuning.jpg" alt="Contact Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
          <h2 className="text-3xl text-center font-bold mb-4 underline">Future Events</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Austin Run</li>
            <li>Laredo Run</li>
          </ul>
        </div>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

      <div className="w-full max-w-screen-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Plan: The Key to Success</h2>
        <p className="text-gray-600 mb-6">
          The key to success is consistency. Every goal—big or small—begins with a single step, and then another, and another.
          Progress may seem slow at first, but trust the process. This plan might not look flashy, but it delivers results.
          Follow along, stay patient, and enjoy the journey!
        </p>
        
        <ul className="space-y-4">
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <strong className="text-lg text-gray-800">1. Start Small & Listen to Your Heart</strong>
            <p className="text-gray-600">Your heart rate is your best guide. Stay mindful of it, even if you’re moving at a slow pace. Build a strong foundation first.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <strong className="text-lg text-gray-800">2. Consistency, Consistency, Consistency</strong>
            <p className="text-gray-600">Nothing beats showing up. Keep going, even on days when motivation is low. Small efforts add up.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <strong className="text-lg text-gray-800">3. Increase the Challenge</strong>
            <p className="text-gray-600">Once your heart rate stays consistently low during workouts, start gradually increasing your tempo and distance. Push yourself, but don’t rush the process.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <strong className="text-lg text-gray-800">4. Level Up</strong>
            <p className="text-gray-600">When both your heart rate and endurance feel strong, it’s time to mix things up. Split your week between sprints and long runs, and add weight training to keep your joints and smaller muscles strong.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">
            <strong className="text-lg text-gray-800">5. Recover Smart</strong>
            <p className="text-gray-600">Rest is just as important as training. Listen to your body, recover well, and never push beyond your limits—unless you do it wisely. Injuries will only set you back, so train with both effort and caution.</p>
          </li>
        </ul>

        <p className="mt-6 text-gray-700 font-semibold">
          Stick with it, trust the process, and you’ll see results. The journey might be tough, but every step makes you stronger.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Events;