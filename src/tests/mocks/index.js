import axios from "axios";
import { longListOfGnomes } from "./data";

export const axiosSetup = () => {
  axios.get.mockResolvedValue({
    data: {
      Brastlewark: longListOfGnomes,
    },
  });
};

export const axiosClear = () => jest.clearAllMocks();
