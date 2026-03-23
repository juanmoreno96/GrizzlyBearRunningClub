"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const menuToggleRef = useRef<HTMLInputElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Tips", path: "/tips" },
    { name: "Blog", path: "/blog" },
    { 
      name: "Join Us", 
      path: "/contact",
      children: [
        { name: "Running", path: "/contact" },
        { name: "Athletic", path: "/athletic" },
      ]
    },
  ];

  const handleLinkClick = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      } px-6 flex justify-between items-center text-white`}
    >
      <Link href="/" className="text-2xl font-bold font-sans">
        Grizzly Bear Running Club
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="peer hidden"
        ref={menuToggleRef}
      />
      <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
        <Menu size={28} className="peer-checked:hidden" />
        <X size={28} className="hidden peer-checked:block" />
      </label>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          item.children ? (
            <div key={item.path} className="relative group flex items-center">
              <Link
                href={item.path}
                className={`px-3 py-2 rounded-md transition duration-300 cursor-pointer ${
                  pathname === item.path || pathname?.startsWith(item.path.split('/')[1] ? `/${item.path.split('/')[1]}` : '')
                    ? "text-red-400"
                    : "hover:text-red-500"
                }`}
              >
                {item.name}
              </Link>
              <div className="absolute left-0 top-full mt-0 w-40 bg-black/90 backdrop-blur-md rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    className={`block px-4 py-2 first:rounded-t-md last:rounded-b-md transition duration-300 ${
                      pathname === child.path
                        ? "text-red-400 bg-red-900/30"
                        : "hover:text-red-500 hover:bg-white/10"
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md transition duration-300 ${
                pathname === item.path
                  ? "text-red-400"
                  : "hover:text-red-500"
              }`}
            >
              {item.name}
            </Link>
          )
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="hidden peer-checked:flex flex-col absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md items-center space-y-4 py-4 md:hidden">
        {navItems.map((item) => (
          item.children ? (
            <div key={item.path} className="w-full px-4">
              <Link
                href={item.path}
                className={`block px-3 py-2 w-full text-center transition duration-300 ${
                  pathname === item.path
                    ? "bg-red-900 text-white"
                    : "hover:text-gray-400"
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
              <div className="mt-1 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    className={`block px-3 py-2 w-full text-center transition duration-300 ${
                      pathname === child.path
                        ? "text-red-400"
                        : "hover:text-gray-400"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 w-full text-center transition duration-300 ${
                pathname === item.path
                  ? "bg-red-900 text-white"
                  : "hover:text-gray-400"
              }`}
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
}
