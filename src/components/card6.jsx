import React from "react";
import analisis from "../img/analisis.png";

export default function card6() {
  return (
    <>
      <div className="-mx-4 mt-7 flex flex-wrap text-center justify-center items-center bg-transparent hover:scale-110 transition-all duration-200">
        <div className="showCards == 'all' || showCards == 'branding' ? 'block' : 'hidden' w-full px-4 md:w-1/2 xl:w-[90%] ">
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-lg">
              <img
                src={analisis}
                alt="portfolio"
                className="w-full "
              />
            </div>
            <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 hover:bg-red-100 md:hover:text-red-800 px-3 text-center shadow-lg">
              <span class="text-primary mb-2 block text-sm font-semibold">
              statistic analysis using Rstudio  
              </span>
              <h3 class="text-dark mb-4 text-xl font-bold">Colon cancer analysis</h3>
              <a
                href="https://docs.google.com/document/d/1IGGbRN6107xvNh0OAYnqs0jKE-4a_oGRkXIxT5Kihcw/edit?usp=share_link"
                class="text-body-color hover:bg-red-600 hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
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
