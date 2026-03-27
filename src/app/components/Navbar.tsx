"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/blog" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Tips", path: "/tips" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      } px-6 flex justify-between items-center ${isScrolled ? "h-20" : "h-20 md:h-24"}`}
    >
      {/* Title */}
      <div className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-red-950 dark:text-red-50" : "text-white"} font-headline`}>
        <Link href="/">Grizzly Bear Running Club</Link>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-2 rounded-lg transition-all duration-200 font-body font-medium ${
              isActive(item.path)
                ? isScrolled
                  ? "text-red-900 dark:text-red-400 font-bold border-b-2 border-red-900 dark:border-red-400"
                  : "text-white font-bold border-b-2 border-white"
                : isScrolled
                ? "text-zinc-600 dark:text-zinc-400 hover:text-red-900 dark:hover:text-red-200"
                : "text-white hover:text-red-200"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Hamburger button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className={`cursor-pointer flex items-center justify-center w-8 h-8 ${isScrolled ? "text-red-950" : "text-white"}`}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-zinc-950 transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 cursor-pointer"
          >
            <X className="w-8 h-8 text-red-950 dark:text-red-50" />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                isActive(item.path)
                  ? "text-red-900 dark:text-red-400"
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}