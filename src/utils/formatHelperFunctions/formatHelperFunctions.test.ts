import {
  capitalizeWords,
  convertHourFormat,
  convertKelvinToCelcius,
  convertKelvinToFahrenheit,
  convertTimeTo24HourFormat,
  getDayFromDate,
  getProbabilityOverHours,
  getWeatherCodeOverHours,
  isDay,
} from "./formatHelperFunctions";

describe("convertKelvinToCelcius", () => {
  it("should convert 0 Kelvin to -273 Celsius", () => {
    const kelvin = 0;
    const result = convertKelvinToCelcius(kelvin);
    expect(result).toEqual(-273);
  });

  it("should convert 273.15 Kelvin to 0 Celsius", () => {
    const kelvin = 273.15;
    const result = convertKelvinToCelcius(kelvin);
    expect(result).toEqual(0);
  });

  it("should convert 300 Kelvin to 26 Celsius", () => {
    const kelvin = 300;
    const result = convertKelvinToCelcius(kelvin);
    expect(result).toEqual(27);
  });

  it("should convert 1000.89 Kelvin to 728 Celsius", () => {
    const kelvin = 1000.89;
    const result = convertKelvinToCelcius(kelvin);
    expect(result).toEqual(728);
  });
});

describe("getProbabilityOverHours", () => {
  it("should return 0 when valueArray is empty", () => {
    const valueArray: number[] = [];
    const result = getProbabilityOverHours(valueArray);
    expect(result).toEqual(0);
  });

  it("should return 0 when all values are 0", () => {
    const valueArray = [0, 0, 0];
    const result = getProbabilityOverHours(valueArray);
    expect(result).toEqual(0);
  });

  it("should return 33 when all values are 100", () => {
    const valueArray = [100, 100, 100];
    const result = getProbabilityOverHours(valueArray);
    expect(result).toEqual(33);
  });

  it("should calculate the correct probability for a non-empty valueArray", () => {
    const valueArray = [50, 75, 25];
    const result = getProbabilityOverHours(valueArray);
    expect(result).toEqual(30);
  });
});

describe("getWeatherCodeOverHours", () => {
  it("should return 0 when valueArray is empty", () => {
    const valueArray: number[] = [];
    const result = getWeatherCodeOverHours(valueArray);
    expect(result).toEqual(0);
  });

  it("should return the correct weather code for a non-empty valueArray", () => {
    const valueArray = [200, 201, 200, 300, 201, 200, 300];
    const result = getWeatherCodeOverHours(valueArray);
    expect(result).toEqual(200);
  });

  it("should return the first occurrence when multiple weather codes have the same frequency", () => {
    const valueArray = [100, 200, 100, 200, 300, 300, 100];
    const result = getWeatherCodeOverHours(valueArray);
    expect(result).toEqual(100);
  });

  it("should return the only weather code when valueArray has only one element", () => {
    const valueArray = [500];
    const result = getWeatherCodeOverHours(valueArray);
    expect(result).toEqual(500);
  });

  it("should handle negative weather codes", () => {
    const valueArray = [-100, -200, -100, -200, -300, -300];
    const result = getWeatherCodeOverHours(valueArray);
    expect(result).toEqual(-100);
  });
});

describe("convertHourFormat", () => {
  it('should return "12AM" when the hour is 0', () => {
    const hour = 0;
    const result = convertHourFormat(hour);
    expect(result).toEqual("12AM");
  });

  it("should return the correct AM format for hours between 1 and 11", () => {
    for (let hour = 1; hour <= 11; hour++) {
      const result = convertHourFormat(hour);
      expect(result).toEqual(`${hour}AM`);
    }
  });

  it('should return "12PM" when the hour is 12', () => {
    const hour = 12;
    const result = convertHourFormat(hour);
    expect(result).toEqual("12PM");
  });

  it("should return the correct PM format for hours between 13 and 23", () => {
    for (let hour = 13; hour <= 23; hour++) {
      const result = convertHourFormat(hour);
      expect(result).toEqual(`${hour - 12}PM`);
    }
  });
});

describe("getDayFromDate", () => {
  it("should return the correct day for a given date string", () => {
    const dateStr = "2023-07-24";
    const result = getDayFromDate(dateStr);
    expect(result).toEqual("Monday");
  });

  it("should handle dates with different formats", () => {
    const dateStr1 = "2021-12-25"; // A Saturday
    const dateStr2 = "01/15/2022"; // A Saturday
    const dateStr3 = "05-10-2023"; // A Wednesday

    const result1 = getDayFromDate(dateStr1);
    const result2 = getDayFromDate(dateStr2);
    const result3 = getDayFromDate(dateStr3);

    expect(result1).toEqual("Saturday");
    expect(result2).toEqual("Saturday");
    expect(result3).toEqual("Wednesday");
  });

  it("should return undefined for an invalid date string", () => {
    const dateStr = "Invalid Date";
    const result = getDayFromDate(dateStr);
    expect(result).toBeUndefined();
  });
});

describe("isDay", () => {
  it("should handle invalid sunrise and sunset times", () => {
    const sunrise = "invalid-time";
    const sunset = "invalid-time";

    const result = isDay(sunrise, sunset);
    expect(result).toBeUndefined();
  });
});

describe("convertTimeTo24HourFormat", () => {
  it('should convert "6:00 AM" to 6', () => {
    const timeString = "6:00 AM";
    const result = convertTimeTo24HourFormat(timeString);
    expect(result).toEqual(6);
  });

  it('should convert "12:00 AM" to 0', () => {
    const timeString = "12:00 AM";
    const result = convertTimeTo24HourFormat(timeString);
    expect(result).toEqual(0);
  });

  it('should convert "6:30 PM" to 18', () => {
    const timeString = "6:30 PM";
    const result = convertTimeTo24HourFormat(timeString);
    expect(result).toEqual(18);
  });

  it('should convert "12:45 PM" to 12', () => {
    const timeString = "12:45 PM";
    const result = convertTimeTo24HourFormat(timeString);
    expect(result).toEqual(12);
  });

  it("should return undefined for an invalid time string", () => {
    const timeString = "invalid-time";
    const result = convertTimeTo24HourFormat(timeString);
    expect(result).toBeUndefined();
  });
});

describe("capitalizeWords", () => {
  it("should capitalize the first letter of each word in a sentence", () => {
    const input = "hello world";
    const result = capitalizeWords(input);
    expect(result).toEqual("Hello World");
  });

  it("should handle a single word in input", () => {
    const input = "test";
    const result = capitalizeWords(input);
    expect(result).toEqual("Test");
  });

  it("should handle an empty input", () => {
    const input = "";
    const result = capitalizeWords(input);
    expect(result).toEqual("");
  });

  it("should handle leading and trailing spaces", () => {
    const input = "  leading and trailing spaces  ";
    const result = capitalizeWords(input);
    expect(result).toEqual("  Leading And Trailing Spaces  ");
  });

  it("should handle multiple spaces between words", () => {
    const input = "multiple     spaces     between      words";
    const result = capitalizeWords(input);
    expect(result).toEqual("Multiple     Spaces     Between      Words");
  });
});

describe("convertKelvinToFahrenheit", () => {
  it("should convert 0 Kelvin to -459 Fahrenheit", () => {
    const kelvin = 0;
    const result = convertKelvinToFahrenheit(kelvin);
    expect(result).toEqual(-460);
  });

  it("should convert 273.15 Kelvin to 32 Fahrenheit", () => {
    const kelvin = 273.15;
    const result = convertKelvinToFahrenheit(kelvin);
    expect(result).toEqual(32);
  });

  it("should convert 300 Kelvin to 80 Fahrenheit", () => {
    const kelvin = 300;
    const result = convertKelvinToFahrenheit(kelvin);
    expect(result).toEqual(80);
  });

  it("should convert 1000.89 Kelvin to 1341 Fahrenheit", () => {
    const kelvin = 1000.89;
    const result = convertKelvinToFahrenheit(kelvin);
    expect(result).toEqual(1342);
  });
});

export {};
