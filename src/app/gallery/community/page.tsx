import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import GridGallary from "@/app/components/communityGallary";

const community = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar></Navbar>
      <GridGallary></GridGallary>
      <Footer></Footer>
    </div>
  );
};

export default community;