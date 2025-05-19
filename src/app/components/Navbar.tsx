"use client"; // Required for hooks in Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current route
import { Menu, X } from "lucide-react"; // Icons for the mobile menu
import { useRef } from "react"; // Import useRef to manage the checkbox reference

export default function Navbar() {
  const pathname = usePathname(); // Get the current page route
  const menuToggleRef = useRef<HTMLInputElement>(null); // Create a ref for the menu toggle checkbox

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Tips", path: "/tips" },
    { name: "Blog", path: "/blog" },
    { name: "Join Us", path: "/contact" },
  ];

  const handleLinkClick = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false; // Uncheck the checkbox to close the menu
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md py-4 px-6 flex justify-between items-center text-white z-50">
      <Link href="/contact" className="text-2xl font-bold">
        Grizzly Bear Running Club
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" ref={menuToggleRef} />
      <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
        <Menu size={28} className="peer-checked:hidden" />
        <X size={28} className="hidden peer-checked:block" />
      </label>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-2 rounded-md transition duration-300 ${
              pathname === item.path ? "text-gray-700" : "hover:text-gray-400 glow-on-hover"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="hidden peer-checked:flex flex-col absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md items-center space-y-4 py-4 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-2 w-full text-center transition duration-300 ${
              pathname === item.path ? "bg-blue-500 text-white" : "hover:text-gray-400"
            }`}
            onClick={handleLinkClick} // Attach the handleLinkClick function to the onClick event
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}