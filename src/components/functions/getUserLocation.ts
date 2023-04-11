const getUserLocation = async (setLocation: any) => {
  let lat: number | null = null;
  let lon: number | null = null;
  async function getLocation() {
    if (navigator.geolocation) {
      await navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(function (position) {
              console.log(position.coords.latitude, position.coords.longitude);
              lat = position.coords.latitude;

              console.log(lat);
              lon = position.coords.longitude;
              console.log(lon);
              setLocation((prev: any) => ({
                ...prev,
                lat: lat,
                lon: lon,
              }));
            });
            console.log(result.state);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(function (position) {
              console.log(position.coords.latitude, position.coords.longitude);
              lat = position.coords.latitude;
              lon = position.coords.longitude;
            });
            console.log(result.state);
          } else if (result.state === "denied") {
            alert(
              "Please allow access to your location in order to provide the best experience. Click 'Allow' when prompted or go to your browser settings to enable location services. Thank you!"
            );
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry not available for your browser!");
    }
  }
  await getLocation();
};

export default getUserLocation;
