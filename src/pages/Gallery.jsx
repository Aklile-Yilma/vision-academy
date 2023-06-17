import React, { useState, useEffect } from "react";
import images from "../data/gallery.json";
import ImageContainer from "../components/Gallery/ImageContainer";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 p-2 animate-pulse"
              >
                <div className="h-48 bg-gray-300 rounded-lg"></div>
              </div>
            ))
          : images.map((image, index) => (
              <ImageContainer key={index} img={image.url} />
            ))}
      </div>
    </div>
  );
};

export default Gallery;
