import React from "react";
import { useSelector } from "react-redux";
import ClearIcon from "components/common/icons/clear-icon";
import heroIcon from "assets/img/hero.jpg";
import GnomeCard from "components/population/gnome-card";

function UserSidebar({ isOpen, onClose }) {
  const { friends = [] } = useSelector((state) => state.census);

  return (
    <div
      className={`sidebar-slide ${isOpen ? "open" : ""}`}
      data-testid="user-sidebar"
    >
      <div className="sidebar-content">
        <div className="profile-header">
          <h2>Guest user</h2>
          <div className="close-button" onClick={onClose}>
            <ClearIcon />
          </div>
        </div>
        <div className="profile-img">
          <img src={heroIcon} alt="hero-img" />
        </div>
        <div className="divider" />
        <h2>My friends ({friends.length})</h2>
        {friends.length > 0 ? (
          <div className="gnome-cards-container">
            {friends.map((gnome) => (
              <GnomeCard gnome={gnome} key={`gnome-${gnome.id}`} />
            ))}
          </div>
        ) : (
          <p>You haven't made any friends yet.</p>
        )}
      </div>
    </div>
  );
}

export default UserSidebar;
