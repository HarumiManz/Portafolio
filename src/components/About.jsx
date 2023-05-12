import React from "react";
import yo from "../img/yo.png";
import Slider from "./slider";
import Projects from "./projects";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="bg-gradient-to-r from-white to-white p-10 ">
          <div className="outline outline-offset-2 outline-slate-300  ">
            <div className=" mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg justify-items-center ">
                <div className="m-12 pl-8 ">
                  <img
                    className="h-auto max-w-full rounded-full bg-gradient-to-r from-purple-300 to-slate-200 p-5 "
                    src={yo}
                    alt=""
                  />
                </div>
                <div className=" h-auto text-start mr-28 max-w-full rounded-lg p-10 text-black inline-block align-middle ">
                  <p className="text-6xl md:hover:text-purple-800 ">
                    {" "}
                    Hi! I'm Harumi Manzano.
                  </p>
                  <p className="text-lg mt-10 mb-3 text-gray-900 font-[' Cambria']">
                    I am a computer technology engineer, currently in my sixth
                    semester of my degree. I'm interested in the part of the
                    networks and the design of web pages, on the other hand I
                    like the development of software, but I prefer the creative
                    part and the functionality more.
                  </p>
                  <p className=" text-primary text-2xl mt-10 mb-6 font-[' Cambria'] ">
                    Programming languages
                  </p>
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </section>
    </>
  );
}
