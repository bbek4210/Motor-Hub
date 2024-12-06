"use client";
import { BikeProps } from "@/types";
import { calculateBikeRent, fetchBikeImage } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import BikeDetails from "./BikeDetails";

interface BikeCardProps {
  bike: BikeProps;
}

const BikeCard = ({ bike }: BikeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      if (!bike.make || !bike.model || !bike.year) return;
      try {
        const imageUrl = await fetchBikeImage(bike);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    loadImage();
  }, [bike]);

  const carRent = calculateBikeRent(bike);
  console.log(carRent);

  return (
    <div className="flex flex-col p-6 justify-center items-start group text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {bike?.make} {bike?.model}
        </h2>{" "}
      </div>
      <p className="flex mt-6 text-[32px font-extrabold]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 object-contain my-3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            fill
            alt="bike"
            priority
            className="object-contain"
          />
        ) : null}
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/helmet.png" width={30} height={30} alt="bike typr" />
            <p className="text-[14px]">{bike?.type}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/time.png" width={25} height={25} alt="bike typr" />
            <p className="text-[14px]">{bike?.year}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gear.png" width={25} height={25} alt="bike typr" />
            <p className="text-[14px]">{bike?.gearbox}</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          ></CustomButton>
        </div>
      </div>
      <BikeDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        bike={bike}
      />
    </div>
  );
};

export default BikeCard;
