import Image from "next/image";

export default function About({ blok }) {
  const { title, about, image, extraInfo } = blok || {}; // Destructure blok for better readability

  return (
    <section className="py-12 px-6 md:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{title || "Default Title"}</h1>
        <p className="text-lg text-gray-700 mb-8">{about || "Default description"}</p>

        {image && (
          <div className="mb-8">
            <Image
              src={image.filename}
              alt={image.alt || "About image"}
              layout="responsive"
              width={image.width || 100} // Use dynamic width if available
              height={image.height || 50} // Use dynamic height if available
              className="w-full h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <p className="text-md text-gray-600">{extraInfo || "Additional information"}</p>
      </div>
    </section>
  );
}
