import React from "react";
import classNames from "../../utils/classNames";

const AboutTile = ({ text, img, reverse, heading }) => {
  return (
    <section
      className={classNames(
        reverse
          ? "bg-primary text-white flex-row-reverse"
          : "bg-white text-black",
        "flex  p-2 lg:p-20"
      )}
    >
      <div className="w-full lg:w-1/2 px-4 lg:flex hidden">
        <div className="w-2/3 lg:w-2/3 m-auto">
          <img src={img} className="w-full" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4 text-center lg:text-left mt-5 lg:mt-0">
        <div className="w-full lg:w-3/4 px-4 my-auto">
          <h1 className="font-bold text-4xl text-center lg:text-left">
            {heading}
          </h1>
          <p className="mt-4 text-justify lg:text-left">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTile;
