"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header({ config }) {
  const [isOpen, setIsOpen] = useState(false);

  // Remove or comment out console.log before deployment
  // console.log("config", config);
  // console.log("innehåll", config.content.body[0].link[0]);
  // console.log("Blok data:", config);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 pl-6 pr-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            {config?.content?.body[0].logo && (
              <Image
                src={config.content.body[0].logo.filename}
                alt="Logo"
                width={100} // Adjust if dynamic dimensions are available
                height={50} // Adjust if dynamic dimensions are available
                className="w-full h-8 mr-3"
              />
            )}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isOpen}
              aria-controls="navbar-dropdown"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                {config?.content?.body[0].link?.map((link) => (
                  <li key={link._uid}>
                    <Link
                      href={link.link.cached_url}
                      className="block py-2 px-3 text-gray-900 hover:text-gray-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
