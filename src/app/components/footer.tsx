const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-6 mt-auto relative z-50">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* Copyright Section */}
        <p>&copy; {new Date().getFullYear()} Grizzly Bear Running Club. All rights reserved.</p>
        
        {/* Social Links Section */}
        <div className="flex space-x-4">
        </div>
        <p>Build by people from Laredo Tx</p>
      </div>
    </footer>
  );
};

export default Footer;