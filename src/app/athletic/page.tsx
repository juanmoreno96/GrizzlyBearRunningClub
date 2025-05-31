import AthleticsVideoGallery from "../components/athleticsVideoGallery";
import Image from "next/image";
const Athletics = () => {
  return (
    <div >

        <div className="">
          <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center bg-black/10 backdrop-blur-md md:text-center p-5">
              <h1 className="text-3xl font-bold mb-4">Grizzly Bear Athletic Club</h1>
              <p className="mb-4 text-left">
            <strong>Welcome to Grizzly Bear Athletics</strong> — a space dedicated to strength,
            discipline, and steady progress. Here, we focus on the fundamentals of weightlifting
            and strength training, helping you build a strong foundation before you ever set foot
            on the trail or track.
              </p>
              <p className="mb-4 text-left">
            This is what we call the <strong>Iron Paradise</strong> — not because it&#39;s easy, but because
            it&#39;s where growth happens. Through consistent effort, proper technique, and a commitment
            to learning, we believe anyone can develop the physical and mental strength to reach their goals.
              </p>
              <p className="mb-4 text-left">
            Whether you&#39;re new to lifting or returning after some time away, this page is built for you.
            We&#39;re here to guide you from the very first rep to major milestones — offering knowledge,
            support, and resources every step of the way.
              </p>
              <p className="mb-4 text-left">
            Think of this as your starting point — the place where strength is built before endurance is tested.
              </p>
              <p className="font-semibold text-left">
            Welcome to the journey. Welcome to <strong>Grizzly Bear Athletics</strong>.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src="/athleticBanner.png" alt="Contact Image" className="rounded-lg shadow-lg" width={800} height={600} />
            </div>
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">
              Check Out Some Of Our Favorite Videos To Keep You Motivated!
            </h1>
            <AthleticsVideoGallery />
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
            <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
            <ul className="space-y-4">
              <li>
            <a href="https://www.instagram.com/grizzlybearathleticclub/" className="text-pink-500 hover:underline text-2xl" target="_blank" rel="noopener noreferrer">
              Instagram: @grizzlybearathleticclub
            </a>
              </li>
            </ul>
          </div>
          <footer className="bg-gray-950 text-white py-6 mt-auto relative z-50">
            <div className="container mx-auto text-center flex flex-col items-center">
              {/* Copyright Section */}
              <p>&copy; {new Date().getFullYear()} Grizzly Bear Running Club. All rights reserved.</p>
              {/* Social Links Section */}
              <div className="flex space-x-4"></div>
              <p>Build by people from Laredo Tx</p>
            </div>
          </footer>
        </div>
    </div>
  );
};
export default Athletics;