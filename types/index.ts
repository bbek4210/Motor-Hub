import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface BikeProps {
  make: string;
  model: string;
  year: number;
  type: string;
  displacement: string;
  engine: string;
  power: string;
  torque: string;
  compression: string;
  boreStroke: string;
  valvesPerCylinder: number;
  fuelSystem: string;
  fuelControl: string;
  ignition: string;
  lubrication: string;
  cooling: string;
  gearbox: string;
  transmission: string;
  clutch: string;
  frame: string;
  frontSuspension: string;
  frontWheelTravel: number;
  rearSuspension: string;
  rearWheelTravel: number;
  frontTire: string;
  rearTire: string;
  frontBrakes: string;
  rearBrakes: string;
  totalWeight: number;
  seatHeight: string;
  totalHeight: number;
  totalLength: number;
  totalWidth: number;
  groundClearance: number;
  wheelbase: number;
  fuelCapacity: string;
  starter: string;
}
