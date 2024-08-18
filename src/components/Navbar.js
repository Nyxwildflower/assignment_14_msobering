import { ArrowRightIcon, MenuIcon } from "@heroicons/react/solid";
import { React, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container md:flex md:justify-stretch mx-auto p-5">
        <div className="flex justify-between md:justify-self-start">
          <a
            href="#about"
            className="title-font font-medium text-white md:w-max md:mt-2"
          >
            <h1 className="ml-3 text-xl">Madison Sobering</h1>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <MenuIcon className="w-7 h-7" />
          </button>
        </div>
        <div
          className={`md:flex md:block md:w-full ${menuOpen ? "block" : "hidden"}`}
        >
          <nav className="flex flex-wrap md:mr-auto md:ml-4 md:mt-1 md:pl-4 md:border-l md:border-gray-700 text-base">
            <a
              href="#work"
              className="w-full md:w-auto md:mr-5 my-2 text-center hover:text-white"
            >
              Past Work
            </a>
            <a
              href="#skills"
              className="w-full md:w-auto md:mr-5 my-2 text-center hover:text-white"
            >
              Skills
            </a>
            <a
              href="#dev"
              className="w-full md:w-auto md:mr-5 my-2 text-center hover:text-white"
            >
              Dev Setup
            </a>
          </nav>
          <a
            href="#resources"
            className="flex w-full md:w-auto justify-center items-center border-0 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-2 md:mt-0 md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
