import React from "react";
import heroIcon from "assets/img/hero.jpg";

function UserBadge({ onClick }) {
  return (
    <div className="user-badge" onClick={onClick}>
      <img src={heroIcon} alt="logo" />
    </div>
  );
}

export default UserBadge;
