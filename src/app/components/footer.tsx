import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 w-full py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-lg font-bold text-red-950 dark:text-red-50 font-headline">
            Grizzly Bear Running Club
          </span>
          <p className="font-body text-sm text-zinc-500 max-w-xs text-center md:text-left">
            © {new Date().getFullYear()} Grizzly Bear Running Club. Built by people from Laredo Tx.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Link 
            href="/contact" 
            className="font-label text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 hover:text-red-800 dark:hover:text-red-300 transition-opacity hover:opacity-100 underline underline-offset-4"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/grizzlybear_runningclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity p-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#991b1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://www.strava.com/clubs/1689981"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity p-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#991b1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.8-.1 2.6-.3"/>
              <path d="M19 14c1.4-1.4 2.3-3.1 2.3-5.2 0-4.4-4-8-8-8-.7 0-1.4.1-2 .3"/>
              <circle cx="12" cy="12" r="2"/>
              <path d="M14.5 6.5 17 3"/>
              <path d="M12 14c-2.8 0-5 2.2-5 5h8c0-2.8-2.2-5-5-5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;