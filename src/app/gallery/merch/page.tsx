import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import MerchGallary from "@/app/components/merchGallary";


const merch = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar></Navbar>
      <MerchGallary></MerchGallary>
      <Footer></Footer>
    </div>
  );
};

export default merch;