import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from "utils/useInfiniteScroll";
import Loader from "components/common/loader";
import Alert from "components/common/alert";
import GnomeProfile from "./gnome-profile";
import GnomeCard from "./gnome-card";
import SearchBar from "./search-bar";

function Population() {
  const { isLoading, error, data } = useSelector((state) => state.census);
  const [currentScrollBatch, setScrollData, canScroll, scroll] =
    useInfiniteScroll([]);

  function onSearch(searchResults) {
    setScrollData(searchResults);
  }

  useEffect(() => {
    setScrollData(data);
  }, [data, setScrollData]);

  return (
    <>
      <div>
        {isLoading && <Loader />}
        {data.length > 0 && (
          <>
            <SearchBar onSearch={onSearch} />
            <div className="gnome-cards-container">
              {currentScrollBatch.map((gnome, idx) => (
                <GnomeCard
                  gnome={{ ...gnome, isVerified: idx % 3 === 0 }}
                  key={`gnome-${gnome.id}`}
                />
              ))}
            </div>
            {canScroll && (
              <div className="load-more-button-container">
                <div
                  className="load-more-button"
                  onClick={scroll}
                  data-testid="load-more-button"
                >
                  Load more
                </div>
              </div>
            )}
          </>
        )}
        {error && <Alert>{error}</Alert>}
      </div>
      <GnomeProfile />
    </>
  );
}

export default Population;
