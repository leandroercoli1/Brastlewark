import React from "react";
import headerlogo from "assets/img/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-brand">
        <img src={headerlogo} alt="logo" className="header-logo" />
        <h2>Brastlewark</h2>
      </div>
      <div>
        <div className="sign-in-button">Sign In</div>
        <div className="sign-up-button active">Sign Up</div>
      </div>
    </div>
  );
}

export default Header;
