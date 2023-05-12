import React from "react";
import atizapan from "../img/appatiz.png";

export default function card3() {
  return (
    <>
      <div className="-mx-4 mt-7 flex flex-wrap text-center justify-center items-center bg-transparent hover:scale-110 transition-all duration-200">
        <div className="showCards == 'all' || showCards == 'branding' ? 'block' : 'hidden' w-full px-4 md:w-1/2 xl:w-[90%] ">
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-lg">
              <img
                src={atizapan}
                alt="portfolio"
                className="w-full "
              />
            </div>
            <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white hover:bg-orange-100 md:hover:text-orange-800 py-9 px-3 text-center shadow-lg">
              <span class="text-primary mb-2 block text-sm font-semibold">
                mobile Application
              </span>
              <h3 class="text-dark mb-4 text-xl font-bold">App Atizapan</h3>
              <a
                href="https://youtu.be/v9Ao1k8z8QQ"
                class="text-body-color hover:bg-orange-600 hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
              >
                View video
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
