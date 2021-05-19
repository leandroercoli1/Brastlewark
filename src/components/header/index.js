import React from "react";
import headerlogo from "assets/img/logo.png";
import UserBadge from "../common/user-badge";

function Header({ onUserBadgeClick }) {
  return (
    <div className="header">
      <div className="header-brand">
        <img src={headerlogo} alt="logo" className="header-logo" />
        <h2>Brastlewark</h2>
      </div>
      <UserBadge onClick={onUserBadgeClick} />
    </div>
  );
}

export default Header;
