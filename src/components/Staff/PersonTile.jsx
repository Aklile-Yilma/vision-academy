import React from "react";

const PersonTile = ({ fullName, position, img }) => {
  return (
    <div className="flex">
      <img
        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
        src={img}
        alt="Person"
      />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold">{fullName}</p>
        <p className="text-sm text-gray-800">{position}</p>
      </div>
    </div>
  );
};

export default PersonTile;
