import { BikeProps } from "@/types";

export async function fetchBikes() {
  const headers = {
    "x-rapidapi-key": "377cb8b7e2msh4ae017ef8efa250p1faee1jsnd20bd07da375",
    "x-rapidapi-host": "motorcycles-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=Kawasaki",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateBikeRent = (bike: BikeProps) => {
  const basePricePerDay = 30; // Base rental price per day in dollars
  const displacementFactor = 0.05; // Additional rate per ccm of engine displacement
  const ageFactor = 0.03; // Additional rate per year of bike age

  // Parse displacement to get the numeric value only
  const displacementValue = parseFloat(bike.displacement.split(" ")[0]);

  // Calculate additional rate based on displacement and age
  const displacementRate = displacementValue * displacementFactor;
  const ageRate = (new Date().getFullYear() - bike.year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + displacementRate + ageRate;

  return rentalRatePerDay.toFixed(2); // Fixed to 2 decimal places for accuracy
};

export async function fetchBikeImage({ make, year, model }: BikeProps) {
  const url = `http://api-motorcycle.makingdatameaningful.com/files/${make.toLowerCase()}/${year}/${model.toLowerCase()}/imageName`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "377cb8b7e2msh4ae017ef8efa250p1faee1jsnd20bd07da375",
      "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`Error fetching image for articleId: ${make}`);
      return null;
    }

    const imageData = await response.json();
    return imageData.link;
  } catch (error) {
    console.error("Error fetching bike image:", error);
    return null;
    
  }
}
