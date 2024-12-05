import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            className="object-contain"
            alt="Logo"
            width={118}
            height={28}
          ></Image>
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white font-bold min-w-[130px]"
          btnType="button"
        ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;
