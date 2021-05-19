import React, { useMemo } from "react";
import VerifiedIcon from "components/common/icons/verified-icon";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, removeFriend, selectGnome } from "redux/slices";

function GnomeCard({ gnome }) {
  const dispatch = useDispatch();
  const { friends: userFriends } = useSelector((state) => state.census);
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
    if (!isFollowing) dispatch(addFriend(gnome));
    else dispatch(removeFriend(id));
  }

  function onCardClick() {
    dispatch(selectGnome(gnome));
  }

  return (
    <div className="gnome-card" onClick={onCardClick}>
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
