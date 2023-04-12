type CityName = {
  name: string;
};

type CityCoordinates = {
  lat: number;
  lon: number;
};

export type CityDetails = CityName | CityCoordinates;
export type Temp = "C" | "F";