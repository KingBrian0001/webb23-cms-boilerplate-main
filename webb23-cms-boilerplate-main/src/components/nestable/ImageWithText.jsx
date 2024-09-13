import Image from "next/image";

export default function ImageWithText({ blok }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      <div className="md:w-1/2">
        <Image
          src={blok.image?.filename || "/default-image.jpg"} // Provide a fallback image
          alt={blok.image?.alt || "Default alt text"} // Provide a fallback alt text
          layout="responsive"
          width={blok.image?.width || 100} // Use dynamic dimensions if available
          height={blok.image?.height || 50} // Use dynamic dimensions if available
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{blok.h2 || "Default Heading"}</h2>
        <p className="text-gray-700">{blok.description || "Default description"}</p>
      </div>
    </div>
  );
}
