import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-950/30 text-white">
      <Navbar />

      <div className="absolute inset-0 h-1/3 bg-cover bg-center bg-[url('/bannerPhotos/lunaEars.jpg')] opacity-40"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 mt-24 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center bg-black/10 backdrop-blur-md md:text-center p-5">
          <h1 className="text-3xl font-bold mb-4">Our Story</h1>
          <p className="text-left leading-loose">
            Grizzly Bear Running Club started with a simple drawing of a bear with a backpack and a newfound love for running and hiking. What began as just an idea soon became a community built on adventure, perseverance, and the joy of movement.
          </p>
          <p className="text-left leading-loose">
            We may not be the fastest on the trails, but we believe in welcoming everyone—whether youre sprinting up mountains or taking it one step at a time. Join us as we explore the outdoors, embrace the challenge, and grow together, one run and hike at a time.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/gallery/trioOg.jpg" alt="Contact Image" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

      <div className="relative w-full h-96 mt-12 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join us in our runs</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7071.515790563925!2d-99.47216621602932!3d27.601034662518988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866120a0e58514df%3A0x71da9bd4c3366a59!2sNorth%20Central%20Park!5e0!3m2!1sen!2sus!4v1739734318047!5m2!1sen!2sus"
          width="100%"
          height="90%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-6 flex-grow max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <img src="/gallery/merchvtwo.jpg" alt="Contact Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center bg-black/10 backdrop-blur-md md:text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
          <ul className="space-y-4">
            <li>
              <a href="https://www.facebook.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinUs;
