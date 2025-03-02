import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import TrailsGallary from "@/app/components/trailsGallary";


const trails = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar></Navbar>
      <TrailsGallary></TrailsGallary>
      <Footer></Footer>
    </div>
  );
};

export default trails;