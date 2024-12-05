"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox, ComboboxInput, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState, Fragment } from "react";

const SearchManufacturer = ({
  setManufacturer,
  manufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              alt="bike-logo"
              height={20}
              width={20}
              src="/bike-logo.png"
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Search manufacturer"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              

            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
