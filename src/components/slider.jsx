import React from "react";
import java from "../img/java.png";
import python from "../img/python2.png";
import tailwind from "../img/tailwind2.png";
import react from "../img/react.png";
import cmas from "../img/cmas.png";
import csharp from "../img/Csharp.png";

export default function Slider() {
  return (
    <>
      <div className="rounded-lg ">
        <div className="grid grid-cols-6 gap-6">
          <div>
            <img className="" src={tailwind} alt="logo java" />
          </div>
          <div>
            <img className="" src={java} alt="logo java" />
          </div>
          <div>
            <img className="" src={python} alt="logo java" />
          </div>
          <div>
            <img className="" src={react} alt="logo java" />
          </div>
          <div>
            <img className="" src={cmas} alt="logo java" />
          </div>
          <div>
            <img className="" src={csharp} alt="logo java" />
          </div>
        </div>
      </div>
    </>
  );
}
