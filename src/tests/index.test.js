import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";
import { longListOfGnomes } from "./utils";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({
    data: {
      Brastlewark: longListOfGnomes,
    },
  });
  render(<App />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("homepage", () => {
  it("fetches data on start", async () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  it("displays welcome message", async () => {
    const welcomeText = await screen.findByText("Welcome to Brastlewark!");
    const welcomeSubtitle = await screen.findByText(
      "Hey there! Welcome to our town. Connect with other people and start trading today."
    );
    expect(welcomeText).toBeInTheDocument();
    expect(welcomeSubtitle).toBeInTheDocument();
  });
  it("displays a list of gnomes", async () => {
    const gnomeCard = await waitFor(() =>
      screen.findAllByTestId(/gnome-card-[0-9]*/)
    );
    expect(gnomeCard.length).toBeGreaterThan(1);
  });
});
