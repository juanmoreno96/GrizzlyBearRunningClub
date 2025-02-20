import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-rose-950/30">
      <Navbar />

      <div className="absolute inset-0 bg-cover bg-center bg-[url('/bannerPhotos/running-hero.jpg')] opacity-40">
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold">Run Together, Stay Strong</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Join our running community and push your limits!
        </p>
        <Link href="/contact" passHref>
          <button className="mt-6 px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-500 rounded-lg">
            Join the Club
          </button>
        </Link>
        <div className="absolute bottom-0 w-full">
          <Footer/>
        </div>
        
      </div>
      
    </div>
  );
}