import React from "react";
import Homepage from "containers/homepage";
import { Provider } from "react-redux";
import { store } from "redux/store";
import "styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
