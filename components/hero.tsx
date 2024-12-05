"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleClick = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px text-[50px] font-extrabold">
          Live with your dream Bike.{" "}
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your bike experiences with dignity.
        </p>
        <CustomButton
          title="Explore Bikes"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleClick}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen ">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image alt="" src="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
