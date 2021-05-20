import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderApplication } from "./setup";
import axios from "axios";
import { longListOfGnomes } from "./utils";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({
    data: {
      Brastlewark: longListOfGnomes,
    },
  });
  renderApplication();
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
  it("displays search bar", async () => {
    const searchBar = await screen.findByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });
  it("displays a list of gnomes", async () => {
    const gnomeCard = await waitFor(() =>
      screen.findAllByTestId(/gnome-card-[0-9]*/)
    );
    expect(gnomeCard.length).toBeGreaterThan(1);
  });
  it("displays a `Load more` button when data list is too long", async () => {
    const loadMoreButton = await waitFor(() =>
      screen.findByTestId("load-more-button")
    );
    expect(loadMoreButton).toBeInTheDocument();
  });
  it("displays more items on `Load more` button click", async () => {
    const loadMoreButton = await waitFor(() =>
      screen.findByTestId("load-more-button")
    );
    const itemsDisplayed = await waitFor(() =>
      screen.findAllByTestId(/gnome-card-[0-9]*/)
    );
    fireEvent.click(loadMoreButton);
    const newItemsDisplayed = await screen.findAllByTestId(/gnome-card-[0-9]*/);
    expect(itemsDisplayed.length).toBeLessThan(newItemsDisplayed.length);
  });
});
