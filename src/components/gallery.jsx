import React from "react";
import lol from "../img/lol.png";
import uno from "../img/uno.jpeg";
import dos from "../img/dos.jpeg";
import tres from "../img/tres.jpeg";
import cuatro from "../img/cuatro.jpeg";
import cinco from "../img/cinco.jpeg";
import seis from "../img/seis.jpeg";


export default function Gallery() {
  return (
    <>
      <div className="mx-10 grid grid-cols-3 gap-2 rounded-lg  ">
        <div>
          <img className="overflow-hidden pt-5 lg:pt-[1%] hover:scale-110 transition-all duration-200 rounded-lg " src={seis} alt="" />
        </div>
        <div>
          <img className="overflow-hidden pt-20 lg:pt-[30%] hover:scale-110 transition-all duration-200 rounded-lg " src={dos} alt="" />
        </div>
        <div>
          <img className="overflow-hidden pb-[85%] -mb-[85%] hover:scale-110 transition-all duration-200 rounded-lg" src={tres} alt="" />
        </div>
        <div>
          <img className="overflow-hidden pb-[90%] -mt-[65%] lg:pb-[90px] hover:scale-110 transition-all duration-200 rounded-lg" src={cuatro} alt="" />
        </div>
        <div>
          <img className="overflow-hidden pb-12 -mt-[40%] lg:pt-[-60px] lg:pb-[90px] hover:scale-110 transition-all duration-200 rounded-lg" src={cinco} alt="foto hamster" />
        </div>
        <div>
          <img className="overflow-hidden pb-5 lg:pb-[70%] pt-20 lg:pt-[3%] hover:scale-110 transition-all duration-200 rounded-lg" src={lol} alt="foto rompecabezas" />
        </div>
      </div>
    </>
  );
}
