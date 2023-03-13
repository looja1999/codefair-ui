import React from "react";

const Card = () => {
  return (
    <div className="h-[200px] flex flex-col justify-evenly items-start p-4 overflow-hidden shadow-lg border rounded-md ">
      <h1 className=" ">
        Project:
        <span className="font-bold text-secondary">
          <span> </span>Voice Comparison Project
        </span>
      </h1>
      <p>
        Type: <span className="font-bold">Individual</span>
      </p>
      <p>
        Category: <span className="text-danger font-bold">Proficient </span>
      </p>
      <div className="w-full flex justify-end">
        <button className="w-24 h-8 bg-secondary rounded-md text-white font-bold hover:bg-[#05647178]">
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
