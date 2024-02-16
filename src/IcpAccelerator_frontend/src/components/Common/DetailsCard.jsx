import React from "react";

const DetailsCard = ({width,top}) => {
  return (
    <div className={`bg-gradient-to-r from-violet-800 to-blue-500 rounded-[20px] shadow-lg relative dxl:top-[370px] z-20 ${width} ${top}`}>
    <div className="container mx-auto px-4 py-4 md:py-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="text-white md:w-1/4 p-4">
          <h2 className="font-bold text-lg md:text-xl">What do you get by joining us?</h2>
          <h2 className="font-bold text-lg md:text-xl">Where will the program be run?</h2>
          <h2 className="font-bold text-lg md:text-xl">Why are we the best fit for you?</h2>
          <h2 className="font-bold text-lg md:text-xl">What happens after the program?</h2>
        </div>
        <div className="text-white md:w-3/4 p-4 md:border-l-2 border-t-2 md:border-t-0">
          <h2 className="font-bold text-lg md:text-xl break-words mb-4">If you are looking to turn your game-changing ideas into a viable business, we'll provide you:</h2>
          <ul className="list-disc pl-5 text-sm md:text-base break-words">
            <li>3-month fully remote accelerator program.</li>
            <li>Operational, legal, commercial, marketing, and tech support.</li>
            <li>Token engineering support and business model testing to pinpoint product-market fit.</li>
            <li>50+ mentors and active VC network featuring known names in Web3.</li>
            <li>Access to one of the largest web3 ecosystems operating since 2016.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default DetailsCard;
