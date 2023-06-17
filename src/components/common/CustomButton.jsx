import React from "react";

const CustomButton = ({ text, callback }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={callback}
        className="py-2 px-6 rounded bg-primary border border-primary text-base text-white font-semibold uppercase hover:bg-white hover:text-primary transition duration-300 ease-in-out"
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
