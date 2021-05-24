import React, { useMemo } from "react";
import VerifiedIcon from "components/common/icons/verified-icon";

function GnomeCard({
  gnome,
  userFriends = [],
  onAddFriend,
  onRemoveFriend,
  onSelectGnome,
}) {
  const {
    id,
    name = "",
    professions = [],
    thumbnail,
    isVerified,
  } = gnome || {};
  const isFollowing = useMemo(
    () => userFriends.map((friend) => friend.id).includes(id),
    [id, userFriends]
  );

  function onFollow(e) {
    e.stopPropagation();
    if (!isFollowing) onAddFriend(gnome);
    else onRemoveFriend(id);
  }

  function onCardClick() {
    onSelectGnome(gnome);
  }

  return (
    <div
      className="gnome-card"
      onClick={onCardClick}
      data-testid={`gnome-card-${id}`}
    >
      <div className="gnome-card-img-container">
        <img src={thumbnail} alt="gnome-img" />
      </div>
      <div className="gnome-card-content">
        <div className="gnome-card-title">
          <div>
            <h4>
              {name} {isVerified && <VerifiedIcon />}
            </h4>
            <small>@{name.replace(/ /g, "")}</small>
          </div>
          <div
            className={`follow-button ${isFollowing ? "active" : ""}`}
            onClick={(e) => onFollow(e)}
          >
            {isFollowing ? "Following" : "Follow"}
          </div>
        </div>
        <p className="gnome-card-description">
          {professions.map((profession, idx) => (
            <small className="profession-badge" key={`profession-${idx}`}>
              {profession}
            </small>
          ))}
        </p>
      </div>
    </div>
  );
}

export default GnomeCard;
