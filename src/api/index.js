const URL_CENSUS_DATA =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export async function getCensusData() {
  return await fetch(URL_CENSUS_DATA)
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
