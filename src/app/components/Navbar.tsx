"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const menuToggleRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Tips", path: "/tips" },
    { name: "Blog", path: "/blog" },
    {
      name: "Join Us",
      children: [
        { name: "Running", path: "/contact" },
        { name: "Athletic", path: "/athletic" },
      ],
    },
  ];

  const handleLinkClick = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
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
        {navItems.map((item) =>
          !item.children ? (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md transition duration-300 ${
                pathname === item.path ? "text-gray-700" : "hover:text-gray-400 glow-on-hover"
              }`}
            >
              {item.name}
            </Link>
          ) : (
            <div key={item.name} className="relative group">
              <button className="px-3 py-2 rounded-md transition duration-300 hover:text-gray-400 glow-on-hover">
                {item.name}
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-black/90 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="hidden peer-checked:flex flex-col absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md items-center space-y-4 py-4 md:hidden">
        {navItems.map((item) =>
          !item.children ? (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 w-full text-center transition duration-300 ${
                pathname === item.path ? "bg-blue-500 text-white" : "hover:text-gray-400"
              }`}
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ) : (
            <div key={item.name} className="w-full">
              <div className="px-3 py-2 w-full text-center font-semibold bg-gray-800 text-white rounded mb-1 flex items-center justify-center">
                {item.name}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  href={child.path}
                  className="block px-6 py-2 w-full text-center hover:bg-gray-800"
                  onClick={handleLinkClick}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )
        )}
      </div>
    </nav>
  );
}