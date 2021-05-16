import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "components/icons/search-icon";
import Alert from "components/alert";

const placeholder = "Search on Brastlewark";

function SearchBox({ onSearch }) {
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
    onSearch(data);
  }

  const friendsFilter = useMemo(
    () =>
      showFriendsOnly
        ? data.filter((gnome) => friends.includes(gnome.id))
        : data,
    [data, friends, showFriendsOnly]
  );

  function toggleFriendsCheckbox() {
    setShowFriendsOnly(!showFriendsOnly);
  }

  function onSubmit(e) {
    e.preventDefault();
    const word = keyword.trim();
    const searchResults =
      word.length > 0
        ? friendsFilter.filter(
            (gnome) =>
              gnome.name.toLowerCase().includes(word.toLowerCase()) ||
              gnome.professions.find((profession) =>
                profession.toLowerCase().includes(word.toLowerCase())
              )
          )
        : friendsFilter;
    if (!searchResults.length) setNoResultsFound(true);
    onSearch(searchResults);
  }

  return (
    <form onSubmit={onSubmit}>
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
            <SearchIcon />
          </div>
        )}
      </div>
      <label>
        <input
          type="checkbox"
          value={showFriendsOnly}
          onChange={toggleFriendsCheckbox}
        />
        Show friends only
      </label>
      {noResultsFound && <Alert>No results found for "{keyword}"</Alert>}
    </form>
  );
}

export default SearchBox;
