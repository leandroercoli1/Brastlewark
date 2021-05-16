import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from "utils/useInfiniteScroll";
import Loader from "components/loader";
import Alert from "components/alert";
import GnomeCard from "./gnome-card";
import SearchBox from "./search-box";

function Population() {
  const { isLoading, error, data } = useSelector(
    (state) => state.census
  );
  const [currentBatch, setData, canScroll, scroll] = useInfiniteScroll([]);

  function onSearch(searchResults) {
    setData(searchResults);
  }

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return (
    <div>
      {isLoading && <Loader />}
      {data.length > 0 && (
        <>
          <SearchBox onSearch={onSearch} />
          <div className="gnome-cards-container">
            {currentBatch.map((gnome, idx) => (
              <GnomeCard
                gnome={{ ...gnome, isVerified: idx % 3 === 0 }}
                key={`gnome-${gnome.id}`}
              />
            ))}
          </div>
          {canScroll && (
            <div className="load-more-button-container">
              <div className="load-more-button" onClick={scroll}>
                Load more
              </div>
            </div>
          )}
        </>
      )}
      {error && <Alert>{error}</Alert>}
    </div>
  );
}

export default Population;
