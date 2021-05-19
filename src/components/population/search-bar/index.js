import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClearIcon from "components/common/icons/clear-icon";
import Alert from "components/common/alert";

const placeholder = "Search on Brastlewark";

function SearchBar({ onSearch }) {
  const { data, friends } = useSelector((state) => state.census);
  const [keyword, setKeyword] = useState("");
  const [showFriendsOnly, setShowFriendsOnly] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);

  function onChange(event) {
    setKeyword(event.target.value);
    if (noResultsFound) setNoResultsFound(false);
  }

  function onClear() {
    setKeyword("");
    setNoResultsFound(false);
    setShowFriendsOnly(false);
    onSearch(data);
  }

  function toggleFriendsCheckbox() {
    setNoResultsFound(false);
    setShowFriendsOnly(!showFriendsOnly);
  }

  const filteredData = useMemo(() => {
    const filteredData = showFriendsOnly
      ? data.filter((gnome) =>
          friends.map((friend) => friend.id).includes(gnome.id)
        )
      : data;
    const word = keyword.trim();
    return word.length > 0
      ? filteredData.filter(
          (gnome) =>
            gnome.name.toLowerCase().includes(word.toLowerCase()) ||
            gnome.professions.find((profession) =>
              profession.toLowerCase().includes(word.toLowerCase())
            )
        )
      : filteredData;
  }, [data, friends, keyword, showFriendsOnly]);

  useEffect(() => {
    if (!filteredData.length) setNoResultsFound(true);
    onSearch(filteredData);
  }, [filteredData, onSearch]);

  return (
    <div className="search-bar">
      <div className="search-box">
        <input
          className="search-box-input"
          onChange={onChange}
          type="text"
          value={keyword}
          placeholder={placeholder}
        />
        {(keyword.length > 0 || noResultsFound) && (
          <div className="search-box-clear-button" onClick={onClear}>
            <ClearIcon />
          </div>
        )}
      </div>
      <div className="filter-bar">
        <div
          className={`filter-button ${showFriendsOnly ? "active" : ""}`}
          onClick={toggleFriendsCheckbox}
        >
          {showFriendsOnly ? "Friends only" : "Show friends only"}
        </div>
      </div>
      {noResultsFound && (
        <Alert>
          No results found{keyword.length > 0 ? ` for ${keyword}` : ""}.
        </Alert>
      )}
    </div>
  );
}

export default SearchBar;
