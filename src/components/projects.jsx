import React from "react";
import Card from "./card";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";
import Card6 from "./card6";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div class="-mx-4 flex flex-wrap ">
          <div class="w-full px-4">
            <div class="mx-auto mb-5 max-w-[510px] text-center">
              <span class="text-primary mb-2 block text-lg font-semibold text-pink-600">
                Portafolio
              </span>
              <h2 class="text-zinc-600 md:hover:text-purple-800 mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Some of my recent Projects
              </h2>
              <p class="text-body-color text-base">
                Here are some of the projects I've done in the last 2 years.
                Under each card you will find a description and a link with more
                information about each project.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-white via-pink-200 to-white">
          <div className="mx-10 grid grid-cols-3 gap-2 ">
            <div>
              <Card />
            </div>
            <div>
              <Card2 />
            </div>
            <div>
              <Card6 />
            </div>
          </div>
          <div className="mx-10 grid grid-cols-3 gap-1 ">
            <div>
              <Card4 />
            </div>
            <div>
              <Card5 />
            </div>
            <div>
              <Card3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
