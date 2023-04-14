type CityName = {
  name: string;
};

type CityCoordinates = {
  lat: number;
  lon: number;
};

export interface TodayWeatherMainDetails {
  name: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  feelsLike: number;
  description: string;
  uvMax: number;
  weatherCode: number;
}

export type DailyWeatherDetails = {
  max_temp: number;
  min_temp: number;
  uvMax: number;
  sunrise: string;
  dayName: string;
  weatherCode: { morning: number; night: number; overall: number };
  sunset: string;

  preception: {
    morning: number;
    night: number;
    overall: number;
  };
  hourly: {
    [hour: string]: HourlyWeatherDetails;
  };
  key: string;
};

export type HourlyWeatherDetails = {
  temp: number;
  percipiation_probability: number;
  rain?: number;
  snow?: number;
  weatherCode: number;
  key: string;
};

export type ForecastDetails = {
  [day: string]: DailyWeatherDetails;
};

export type CityDetails = CityName | CityCoordinates;
export type Temp = "C" | "F";
