import React from "react";
import { useDispatch, useSelector } from "react-redux";
import headerlogo from "../../assets/img/logo.png";

function Homepage() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.census);

  return (
    <div className="container">
      <div className="header">
        <div className="header-brand">
          <img src={headerlogo} alt="logo" className="header-logo" />
          <h1>Brastlewark</h1>
        </div>
      </div>
      <div className="content">
        <h1>Welcome to Brastlewark!</h1>
      </div>
      <div className="footer">
        <h6>Contact information</h6>
      </div>
    </div>
  );
}

export default Homepage;
