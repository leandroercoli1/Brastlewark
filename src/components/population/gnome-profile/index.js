import React, { useEffect, useMemo, useState } from "react";
import ClearIcon from "components/common/icons/clear-icon";
import VerifiedIcon from "components/common/icons/verified-icon";
import GnomeCard from "../gnome-card";

function GnomeProfile({ selectedGnome, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    name,
    age,
    hair_color,
    height,
    weight,
    friends = [],
    professions = [],
    thumbnail,
    isVerified,
  } = selectedGnome || {};

  const selectedGnomeFriends = useMemo(() => {
    if (selectedGnome && friends.length > 0)
      return friends.map((gnomeFriend) =>
        data.find((gnome) => gnome.name === gnomeFriend)
      );
    return [];
  }, [data, friends, selectedGnome]);

  useEffect(() => {
    setIsOpen(selectedGnome !== null);
  }, [selectedGnome]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sidebar-slide ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <div className="profile-header">
          <h2>
            {name} {isVerified && <VerifiedIcon />}
          </h2>
          <div className="close-button" onClick={onClose}>
            <ClearIcon />
          </div>
        </div>
        <div className="profile-img">
          <img src={thumbnail} alt="gnome-img" />
        </div>
        <div className="stats-container">
          <div className="stat">
            <span>{Number(height).toFixed()}</span>
            <span>Height</span>
          </div>
          <div className="stat">
            <span>{Number(weight).toFixed()}</span>
            <span>Weight</span>
          </div>
          <div className="stat">
            <span>{age}</span>
            <span>Age</span>
          </div>
          <div className="stat">
            <span>{hair_color}</span>
            <span>Hair color</span>
          </div>
        </div>
        {professions.length > 0 && (
          <>
            <div className="divider" />
            <h2>Professions</h2>
            <span className="profession">{professions.join(", ")}</span>
          </>
        )}
        {selectedGnomeFriends.length > 0 && (
          <>
            <div className="divider" />
            <h2>Friends</h2>
            <div className="gnome-cards-container">
              {selectedGnomeFriends.map((gnome) => (
                <GnomeCard gnome={gnome} key={`gnome-${gnome.id}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GnomeProfile;
