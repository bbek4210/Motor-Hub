import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            alt="logo"
            width={112}
            height={28}
            src="/logo.png"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            MotorHub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex flex-col gap-6 text-base min-w-[170px]">
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
