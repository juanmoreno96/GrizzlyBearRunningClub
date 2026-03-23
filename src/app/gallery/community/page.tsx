"use client";

import Footer from "../../components/footer";
import GridGallery from "@/app/components/communityGallery";
import LoadingContent from "../../components/LoadingContent";

const Community = () => {
  return (
    <LoadingContent>
      <div className="min-h-screen flex flex-col bg-rose-950 text-white bg-diagonal-stripes">
        <GridGallery />
        <div className="flex justify-center my-6">
          <a
            href="/gallery"
            className="px-4 py-2 bg-rose-800 hover:bg-rose-700 rounded text-white font-semibold transition"
            aria-label="Go to gallery main page"
          >
            ← Back to Gallery
          </a>
        </div>
        <Footer />
      </div>
    </LoadingContent>
  );
};

export default Community;
