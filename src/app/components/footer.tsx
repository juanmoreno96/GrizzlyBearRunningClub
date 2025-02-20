const Footer = () => {
    return (
      <footer className="bg-rose-950/50 text-white py-6 mt-auto relative z-50">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Grizzly Bear Running Club. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://www.facebook.com" className="text-blue-500 hover:underline mx-2">Facebook</a>
            <a href="https://www.twitter.com" className="text-blue-400 hover:underline mx-2">Twitter</a>
            <a href="https://www.instagram.com" className="text-pink-500 hover:underline mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    );
    }
  
  export default Footer;
