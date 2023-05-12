import React from "react";
import wow from "../img/wow.jpeg";

export default function Card4() {
  return (
    <>
      <div className="-mx-4 flex flex-wrap text-center justify-center items-center bg-transparent hover:scale-110 transition-all duration-200 ">
        <div className="showCards == 'all' || showCards == 'branding' ? 'block' : 'hidden' w-full px-4 md:w-1/2 xl:w-[90%] ">
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-lg">
              <img
                src={wow}
                alt="portfolio"
                className="w-full rounded-lg mt-6"
              />
            </div>
            <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white hover:bg-violet-100 md:hover:text-violet-800 py-9 px-3 text-center shadow-lg">
              <span class="text-primary mb-2 block text-sm font-semibold">
                web page
              </span>
              <h3 class="text-dark mb-4 text-xl font-bold">Wheel Wise </h3>
              <a
                href="https://github.com/WheelWise"
                class="text-body-color hover:bg-violet-600 hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
              >
                link 
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
