import axios from "axios";

const URL_CENSUS_DATA =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export async function getCensusData() {
  try {
    const response = await axios.get(URL_CENSUS_DATA);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
