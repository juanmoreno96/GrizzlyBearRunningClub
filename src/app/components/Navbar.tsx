import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md py-4 px-6 flex justify-between items-center text-white z-50">
      <h1 className="text-2xl font-bold">Grizzly Bear Running Club</h1>

      {/* Hamburger Menu (Mobile) */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />
      <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
        <Menu size={28} className="peer-checked:hidden" />
        <X size={28} className="hidden peer-checked:block" />
      </label>

      {/* Navigation Links (Desktop + Mobile) */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/events" className="hover:text-gray-400">Events</Link>
        <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
        <Link href="/contact" className="hover:text-gray-400">Join Us</Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="hidden peer-checked:flex flex-col absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md items-center space-y-4 py-4 md:hidden">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/events" className="hover:text-gray-400">Events</Link>
        <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
        <Link href="/contact" className="hover:text-gray-400">Join Us</Link>
      </div>
    </nav>
  );
}
