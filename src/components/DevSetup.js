import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import { setup } from "../data";

export default function DevSetup() {
  return (
    <section id="dev">
      <div className="container px-5 py-9 mx-auto lg:px-40">
        <div className="text-center">
          <DesktopComputerIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Developer Setup
          </h1>
        </div>
        <h2 className="text-center title-font font-semibold text-white tracking-widest text-lg">
          Terminal
        </h2>
        <div className="md:w-full md:flex md:justify-between">
          <p className="bg-gray-800 rounded my-3 p-3 md:mr-10 text-white md:flex-1">
            Default: {setup.terminal.windows}
          </p>
          <p className="bg-gray-800 rounded my-3 p-3 text-white md:flex-1">
            For Linux Projects: {setup.terminal.linux}
          </p>
        </div>
        <h2 className="text-center title-font font-semibold text-white tracking-widest text-lg mt-5">
          Preferred Font
        </h2>
        <p className="bg-gray-800 rounded my-3 p-3 text-white">
          {setup.preferredFont}
        </p>
        <div className="md:flex">
          <div className="md:w-2/3 md:mr-4">
            <h2 className="text-center title-font font-semibold text-white tracking-widest text-lg mt-5">
              VS Code Settings
            </h2>
            <div className="mt-3">
              <img
                src={setup.vsCode.settings}
                alt="Screenshot of the settings.json file. Bracket pairs are active, tabs are set to size two, auto save is set to focus, white space is trimmed, and emmet.suggestions are snippets."
                className="rounded-lg border-2 border-green-400"
              />
            </div>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-center title-font font-semibold text-white tracking-widest text-lg mt-5 mb-3">
              Favourite Extensions
            </h2>
            <ul className="flex flex-wrap md:flex-col ">
              {setup.vsCode.extensions.map((extension) => (
                <li
                  key={extension}
                  className="m-3 p-3 text-white rounded-full border-2 border-green-600 md:my-0 md:rounded-none md:border-l-4 md:border-double md:border-0"
                >
                  {extension}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
