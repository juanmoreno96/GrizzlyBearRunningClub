import { galleryImages } from "../../lib/gallaryComunity";
import Image from "next/image";

const GridGallary = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-2xl mx-auto p-20">
      {Object.entries(galleryImages).map(([key, src], index) => (
        <div key={index} className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full rounded-lg" src={src} alt={key} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridGallary;