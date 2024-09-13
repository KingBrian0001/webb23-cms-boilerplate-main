"use client";
import Image from "next/image";

export default function ImageGrid({ blok }) {
  // Uncomment or remove console.log before deployment
  // console.log(blok);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 lg:gap-20">
      {blok.columns?.map((item) => (
        <div key={item._uid} className="flex flex-col items-center">
          {item.image && (
            <Image
              src={item.image.filename}
              alt={item.image.alt || "Image"}
              layout="responsive"
              width={item.image.width || 100} // Use dynamic width if available
              height={item.image.height || 50} // Use dynamic height if available
              className="w-full h-auto mt-4 max-w-xs"
            />
          )}
          <h2 className="text-2xl font-bold mb-1 mt-3">{item.h2 || "Default Title"}</h2>
          <p className="text-center">{item.description || "Default description"}</p>
        </div>
      ))}
    </div>
  );
}
