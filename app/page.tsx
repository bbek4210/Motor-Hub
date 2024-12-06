import BikeCard from "@/components/BikeCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/hero";
import SearchBar from "@/components/SearchBar";
import { fetchBikes } from "@/utils";
import React from "react";

const page = async () => {
  const allBikes = await fetchBikes();

  console.log(allBikes);

  const isDataEmpty =
    !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 max-width sm:px-16 px-6 py-4" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold ">Bike Store</h1>
          <p>Explore the bike you like.</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5  ">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allBikes?.map((bike) => (
                <BikeCard key={bike?.id} bike={bike} />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl">opps no result</h2>
            <p>{allBikes?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
