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

  async function fetchData() {
    try {
      let response = await fetch(
        `/.netlify/functions/getAutocompleteData?keyword=${cityPrefix}`,
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );
      console.log("afterwards");
      let data: Data = await response.json();
      console.log(
        "🚀 ~ file: getCitiesWithAutocomplete.ts:34 ~ fetchData ~ data:",
        data
      );

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
  }
  await fetchData();

  return cityList;
};

export default getCitiesWithAutocomplete;
