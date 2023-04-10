type cityData = {
  city: string;
  countryCode: string;
};

type Data = {
  data: cityData[];
};

const getCitiesWIthAutocomplete = (cityPrefix: string): string[] => {
  let cityList: string[] | undefined = [];
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "46d19eea50mshe41b79d61a95610p1465ebjsn3028fccf8526",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  async function fetchData() {
    let response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${cityPrefix}&namePrefixDefaultLangResults=true&limit=8&sort=population
`,
      options
    );
    let data: Data = await response.json();
    cityList = [];
    for (let i = 0; i < data.data.length; i++) {
      cityList.push(`${data.data[i].city}, ${data.data[i].countryCode}`);
    }
    console.log(cityList);

    console.log("the data from the autocompletion API -------------------");
    console.log(data);
  }
  fetchData();

  return cityList;
};

export default getCitiesWIthAutocomplete;
