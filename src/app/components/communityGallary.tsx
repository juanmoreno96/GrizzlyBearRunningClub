import { galleryCommunity } from "../../lib/gallaryComunity";
import Image from "next/image";

const GridGallary = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-diagonal-stripes p-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-2xl">
        {Object.entries(galleryCommunity).map(([key, src], index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            {/* Image with zoom-in effect */}
            <Image
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              src={src}
              alt={key}
              fill
            />

            {/* Dark gradient overlay that fades in */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Optional centered text (if you want labels over images) */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-center z-10">
              <h2 className="text-xl font-semibold text-white drop-shadow-lg">{key}</h2>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridGallary;