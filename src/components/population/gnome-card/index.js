import React, { useMemo } from "react";
import VerifiedIcon from "components/icons/verified-icon";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, removeFriend } from "redux/slices";

function GnomeCard({ gnome }) {
  const dispatch = useDispatch();
  const { friends: userFriends } = useSelector((state) => state.census);
  const {
    id,
    name,
    age,
    hair_color,
    height,
    weight,
    friends,
    professions,
    thumbnail,
    isVerified,
  } = gnome;
  const isFollowing = useMemo(
    () => userFriends.includes(id),
    [id, userFriends]
  );

  function onFollow() {
    if (!isFollowing) dispatch(addFriend(id));
    else dispatch(removeFriend(id));
  }

  return (
    <div className="gnome-card">
      <div className="gnome-card-img-container">
        <a
          href={thumbnail}
          target="_blank"
          rel="noreferrer"
          aria-current="true"
        >
          <img src={thumbnail} alt="gnome-img" />
        </a>
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
            onClick={onFollow}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </div>
        </div>
        <p
          className="gnome-card-description"
          style={{ whiteSpace: "pre-line" }}
        >
          Age: {age}, Hair color: {hair_color}, Height: {height}, Weight:{" "}
          {weight}
          <br />
          <small>Professions: {professions.join(", ")}</small>
          <br />
          <small>Friends: {friends.join(", ")}</small>
        </p>
      </div>
    </div>
  );
}

export default GnomeCard;
