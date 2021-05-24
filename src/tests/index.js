import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import censusReducer from "redux/slices";
import { render } from "@testing-library/react";

export const renderWithStore = (Component, preloadedState) => {
  const store = configureStore({
    reducer: {
      census: censusReducer,
    },
    preloadedState,
  });
  return render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
