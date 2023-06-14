import React from "react";

import HeroBannerImg from "../assets/images/banner.png";
export default function HeroBanner() {
  return (
    <div className="heroBanner mt-[26%] mb-[30%]">
      <p className="text-primary font-bold text-xl mb-7">Fitness Club</p>
      <h1 className="font-bold text-4xl w-56 leading-relaxed mb-7">
        Sweat, Smile And Repeat
      </h1>
      <p className="sm:font-medium mb-10 text-lg">
        Check out the most effective exercises personalized to you
      </p>
      <button className="px-6 py-3 bg-primary rounded inline-block  text-white hover:scale-105 hover:shadow-2xl transition-all">
        Explore Exercises
      </button>
      <div className="absolute top-0 right-6 sm:block hidden ">
        <img src={HeroBannerImg} alt="HeroBanner" />
      </div>
    </div>
  );
}
