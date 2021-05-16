import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCensusData } from "redux/slices";
import Header from "components/header";
import Population from "components/population";

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCensusData());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <div className="content">
        <h1>Welcome to Brastlewark!</h1>
        <p>Hey there! Welcome to our town. Connect with other people and start trading today.</p>
        <Population />
      </div>
    </div>
  );
}

export default Homepage;
