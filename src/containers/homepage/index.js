import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCensusData } from "redux/slices";
import headerlogo from "../../assets/img/logo.png";
import Loader from "components/loader";
import Alert from "components/alert";

function Homepage() {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.census);

  useEffect(() => {
    dispatch(getCensusData());
  }, [dispatch]);

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
        {isLoading && <Loader />}
        {error && <Alert>{error}</Alert>}
        {/* {data.length > 0 && <CensusPage data={population} />} */}
      </div>
      <div className="footer">
        <h6>Contact information</h6>
      </div>
    </div>
  );
}

export default Homepage;
