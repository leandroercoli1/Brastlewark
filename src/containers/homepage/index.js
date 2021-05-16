import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCensusData } from "redux/slices";
import headerlogo from "assets/img/logo.png";
import Population from "components/population";

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCensusData());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="header">
        <div className="header-brand">
          <img src={headerlogo} alt="logo" className="header-logo" />
          <h2>Brastlewark</h2>
        </div>
      </div>
      <div className="content">
        <h2 style={{ color: "white" }}>Welcome to Brastlewark!</h2>
        <Population />
      </div>
    </div>
  );
}

export default Homepage;
