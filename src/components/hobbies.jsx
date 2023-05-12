import React from "react";
import Gallery from "./gallery";
import lux from "../img/lux2.png";

export default function Hobbies() {
  return (
    <>
      <section id="hobbies" className="scroll-smooth" >
        <div className="">
          <div className="mx-20 mb-10 mt-20">
            <h1 className="text-primary mb-2 block text-lg font-semibold text-pink-600">
              {" "}
              Hobbies
            </h1>
            <h2 className="text-zinc-600 md:hover:text-purple-800 mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Some of my hobbies
            </h2>
            <h3 className="text-body-color text-base ">
              Some of the activities that I most enjoy doing in my spare time or
              I practice between classes :D
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-gradient-to-t from-white via-purple-200 to-white">
            <div className=" ml-20 mb-[1%] mt-7  outline-slate-300 bg-transparent ">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img
                    className="pb-10 m-auto w-full"
                    src={lux}
                    alt="lux image"
                  />
                </div>
                <div>
                  <p className="text-start justify-center items-cente text-primary mb-2 block text-lg font-semibold text-zinc-700 mt-10 m-5">
                    A summary of what I like to do as extra activities is mainly
                    dancing, I have danced ballet and currently I dance street
                    dance, I love to do puzzles, read psychology and social
                    books, I like many little plants and weave flower pots.
                    Almost lastly my favorite game is League of legends, in fact
                    on the left side is my favorite character which is lux and
                    lastly I love rabbits and mice but I only put the hamster
                    because I thought the hamster in crisis was pretty.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Gallery />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
