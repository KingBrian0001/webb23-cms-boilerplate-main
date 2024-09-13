import Link from "next/link";
import Image from "next/image";

export default function Footer({ blok }) {
  // Remove or comment out console.log before deploying to production
  // console.log(blok);

  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between items-start">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">{blok.title || "Default Title"}</h2>
          <p className="text-gray-700 mb-4 max-w-[400px]">{blok.description || "Default description"}</p>
        </div>
        {blok.link && (
          <Link href={blok.link.cached_url} className="text-blue-500 hover:underline">
            {blok.image && (
              <Image
                src={blok.image.filename}
                alt={blok.image.alt || "Footer image"}
                layout="responsive"
                width={blok.image.width || 100}  // Use dynamic width if available
                height={blok.image.height || 50} // Use dynamic height if available
                className="w-full h-auto mt-4 max-w-xs"
              />
            )}
          </Link>
        )}
      </div>
    </footer>
  );
}
