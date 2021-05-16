import React from "react";
import VerifiedIcon from "components/verified-icon";

function GnomeCard({ gnome }) {
  const {
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
          <div className="follow-button">Follow</div>
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
