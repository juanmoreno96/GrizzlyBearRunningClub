import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar />

      <div className="absolute inset-0 h-1/3 bg-cover bg-center bg-[url('/bannerPhotos/events-banner.jpg')] opacity-40"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex justify-center p-6">
          <Image src="/gallery/events/juanjuanrun.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
        <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
          <h2 className="text-3xl text-center font-bold mb-4 underline">Past Events</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li className="text-lg">Zombie Run – October 12, 2024</li>
            <li className="text-lg">Día de Los Muertos 5K – November 2, 2024</li>
            <li className="text-lg">Rock ‘n’ Roll San Antonio – December 7, 2024</li>
            <li className="text-lg">Run George Run 5K – February 3, 2025</li>
          </ul>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex justify-center p-6">
          <Image src="/gallery/johnyRuuning.jpg" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
        </div>
        <div className="md:w-1/2 md:ml-6 text-center bg-black/10 backdrop-blur-md p-6">
          <h2 className="text-3xl text-center font-bold mb-4 underline">Future Events</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li className="text-lg">LAP’s 5K Run – March 22, 2025</li>
            <li className="text-lg">Spring Fling – Austin – April 6, 2025</li>
            <li className="text-lg">CASA Superhero Run – April 26, 2025</li>
            <li className="text-lg">Austin Spartan – May 17, 2025</li>
            <li className="text-lg">The Luau 10K – Pflugerville – May 24, 2025</li>
            <li className="text-lg">Freed Run – Austin – July 5, 2025</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;