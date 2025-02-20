// page.tsx
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import GridGallary from "../components/gridGallary";

const Gallery = () => {
  return (
    
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">

      <Navbar/> 
      <GridGallary />
      <Footer />
    </div>
  );
};

export default Gallery;
