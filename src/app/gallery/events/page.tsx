import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import EventsGallary from "@/app/components/eventsGallary";

const events = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar></Navbar>
      <EventsGallary></EventsGallary>
      <Footer></Footer>
    </div>
  );
};

export default events;