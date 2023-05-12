import React from "react";
import unity from "../img/unity.jpg";

export default function card5() {
  return (
    <>
      <div className="-mx-4 mt-7 flex flex-wrap text-center justify-center items-center bg-transparent hover:scale-110 transition-all duration-200">
        <div className="showCards == 'all' || showCards == 'branding' ? 'block' : 'hidden' w-full px-4 md:w-1/2 xl:w-[90%] ">
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-lg">
              <img
                src={unity}
                alt="portfolio"
                className="w-full "
              />
            </div>
            <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white hover:bg-green-100 md:hover:text-green-800 py-9 px-3 text-center shadow-lg">
              <span class="text-primary mb-2 block text-sm font-semibold">
                Multiagent 
              </span>
              <h3 class="text-dark mb-4 text-xl font-bold">Urban movility</h3>
              <a
                href="https://github.com/Bastian1110/UrbanMobility/tree/master"
                class="text-body-color hover:bg-green-600 hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
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
