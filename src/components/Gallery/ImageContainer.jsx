import React from "react";

const ImageContainer = ({ img }) => {
  return (
    <div className="flex w-full lg:w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
