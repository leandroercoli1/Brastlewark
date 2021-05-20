import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import censusReducer from "redux/slices";
import Population from "components/population";
import { longListOfGnomes } from "../../utils";

describe("gnomes list", () => {
  describe("available data", () => {
    beforeEach(() => {
      const store = configureStore({
        reducer: {
          census: censusReducer,
        },
        preloadedState: {
          census: {
            isLoading: false,
            error: null,
            data: longListOfGnomes,
            friends: [],
            selectedGnome: null,
          },
        },
      });
      render(
        <Provider store={store}>
          <Population />
        </Provider>
      );
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
      const newItemsDisplayed = await screen.findAllByTestId(
        /gnome-card-[0-9]*/
      );
      expect(itemsDisplayed.length).toBeLessThan(newItemsDisplayed.length);
    });
  });
  describe("no available data", () => {
    beforeEach(() => {
      const store = configureStore({
        reducer: {
          census: censusReducer,
        },
        preloadedState: {
          census: {
            isLoading: false,
            error: "Server error",
            data: [],
            friends: [],
            selectedGnome: null,
          },
        },
      });
      render(
        <Provider store={store}>
          <Population />
        </Provider>
      );
    });
    it("displays error message", async () => {
      const alert = await screen.findByTestId("alert");
      expect(alert).toBeInTheDocument();
    });
    it("no gnomes are displayed", async () => {
      const gnomeCards =  screen.queryAllByTestId(/gnome-card-[0-9]*/)
      expect(gnomeCards.length).toEqual(0);
    });
  });
});
