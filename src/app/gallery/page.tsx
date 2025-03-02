import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar />
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-20">
        <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
          <Link href="/gallery/community" passHref>
            <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
              <h1 className="text-2xl font-bold text-white">Community</h1>
            </div>
          </Link>
          <Image
            src="https://vdbtnhct9do3gpjg.public.blob.vercel-storage.com/community/johnycarlos-1gTj9k6PSnKscNovjK4HRSawp1O4XX.jpg"
            alt="Community"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
          <Link href="/gallery/events" passHref>
            <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
              <h1 className="text-2xl font-bold text-white">Events</h1>
            </div>
          </Link>
          <Image
            src="https://vdbtnhct9do3gpjg.public.blob.vercel-storage.com/events/477042486_659149196830259_7450223642701792381_n-QrtNZk3KlLKs76zyvUEMOJDwILOTnW.jpg"
            alt="Events"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
          <Link href="/gallery/merch" passHref>
            <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
              <h1 className="text-2xl font-bold text-white">Merch/Designs</h1>
            </div>
          </Link>
          <Image
            src="https://vdbtnhct9do3gpjg.public.blob.vercel-storage.com/merch/merchvtwo-LQCO3svk2LiAJz2M62sy4pHinTWUg2.jpg"
            alt="Merch/Designs"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="relative aspect-w-1 aspect-h-1 glow-on-hover">
          <Link href="/gallery/trails" passHref>
            <div className="absolute w-full h-full flex items-center justify-center text-center z-10">
              <h1 className="text-2xl font-bold text-white">Trails</h1>
            </div>
          </Link>
          <Image
            src="https://vdbtnhct9do3gpjg.public.blob.vercel-storage.com/trails/bear%20one-IYuFNOQOTupduk2vuXEpWRMy92PnGh.jpg"
            alt="Trails"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;