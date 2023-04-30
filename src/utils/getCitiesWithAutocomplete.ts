type CityData = {
  city: string;
  countryCode: string;
  id: number;
};

type Data = {
  data: CityData[];
};

const getCitiesWithAutocomplete = async (cityPrefix: string) => {
  let cityList: CityData[] | undefined = [];
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apiKey}`,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  async function fetchData() {
    try {
      let response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${cityPrefix}&namePrefixDefaultLangResults=true&limit=8&sort=population
`,
        options
      );
      let data: Data = await response.json();
      cityList = [];
      for (let i = 0; i < data.data.length; i++) {
        cityList.push({
          city: data.data[i].city,
          countryCode: data.data[i].countryCode,
          id: data.data[i].id,
        });
      }
    } catch (err) {
      console.error(err);
    }
    //console.log(cityList);

    //console.log("the data from the autocompletion API -------------------");
    //console.log(data);
  }
  await fetchData();
  //console.log("done with fetching the data now i gotta return");

  return cityList;
};

export default getCitiesWithAutocomplete;
