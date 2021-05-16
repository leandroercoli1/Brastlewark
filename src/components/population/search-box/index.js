import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "components/icons/search-icon";
import Alert from "components/alert";

const placeholder = "Search on Brastlewark";

function SearchBox({ onSearch }) {
  const { data } = useSelector((state) => state.census);
  const [keyword, setKeyword] = useState("");
  const [noResultsFound, setNoResultsFound] = useState(false);

  function onChange(event) {
    setKeyword(event.target.value);
  }

  function onClear() {
    setKeyword("");
    setNoResultsFound(false);
    onSearch(data);
  }

  function onSubmit(e) {
    e.preventDefault();
    const word = keyword.trim();
    if (word.length > 0) {
      const searchResults = data.filter(
        (gnome) =>
          gnome.name.toLowerCase().includes(word.toLowerCase()) ||
          gnome.professions.find((profession) =>
            profession.toLowerCase().includes(word.toLowerCase())
          )
      );
      if (!searchResults.length) setNoResultsFound(true);
      onSearch(searchResults);
    }
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
        {keyword.length > 0 && (
          <div className="search-box-clear-button" onClick={onClear}>
            <SearchIcon />
          </div>
        )}
      </div>
      {noResultsFound && <Alert>No results found for "{keyword}"</Alert>}
    </form>
  );
}

export default SearchBox;
