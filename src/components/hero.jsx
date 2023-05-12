import React from "react";
import harumi from "../img/harumi.png";

export default function Hero() {
  return (
    <>
      <nav class=" bg-gradient-to-r from-purple-300 to-zinc-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center">
            <img src={harumi} class="h-16 mr-1" alt="harumi Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          ></button>
          <div
            class="hidden w-full md:block md:w-auto font-bold"
            id="navbar-default"
          >
            <ul class="font-lg flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#about"
                  class=" block py-2 pl-3 pr-4 text-slate-600 rounded  md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-purple-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  class="block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#hobbies"
                  class="block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Hobbies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
