import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from "utils/useInfiniteScroll";
import Loader from "components/loader";
import Alert from "components/alert";
import GnomeCard from "./gnome-card";

function Population() {
  const { isLoading, error, data } = useSelector((state) => state.census);
  const [currentBatch, setData, canScroll, scroll] = useInfiniteScroll([]);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Alert>{error}</Alert>}
      {data.length > 0 && (
        <>
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
    </div>
  );
}

export default Population;
