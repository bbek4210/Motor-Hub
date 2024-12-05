import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/hero";
import SearchBar from "@/components/SearchBar";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 max-width sm:px-16 px-6 py-4" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold ">Car Store</h1>
          <p>Explore the bike you like.</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5  ">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
