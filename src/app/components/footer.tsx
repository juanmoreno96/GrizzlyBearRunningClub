const Footer = () => {
  return (
    <footer className="bg-rose-950/50 text-white py-6 mt-auto relative z-50">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* Copyright Section */}
        <p>&copy; {new Date().getFullYear()} Grizzly Bear Running Club. All rights reserved.</p>
        
        {/* Social Links Section */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" className="text-blue-500 hover:underline">Facebook</a>
          <a href="https://www.twitter.com" className="text-blue-400 hover:underline">Twitter</a>
          <a href="https://www.instagram.com" className="text-pink-500 hover:underline">Instagram</a>
        </div>
        <p>Build by people from Laredo Tx</p>
      </div>
    </footer>
  );
};

export default Footer;