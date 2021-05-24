import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFriend, removeFriend, selectGnome } from "redux/slices";
import useInfiniteScroll from "utils/useInfiniteScroll";
import Loader from "components/common/loader";
import Alert from "components/common/alert";
import GnomeProfile from "components/population/gnome-profile";
import GnomeCard from "components/population/gnome-card";
import SearchBar from "components/population/search-bar";

function Population() {
  const dispatch = useDispatch();
  const {
    isLoading,
    error,
    data,
    friends = [],
    selectedGnome,
  } = useSelector((state) => state.census);
  const [currentScrollBatch, setScrollData, canScroll, scroll] =
    useInfiniteScroll([]);

  function onSearch(searchResults) {
    setScrollData(searchResults);
  }

  function onAddFriend(gnome) {
    dispatch(addFriend(gnome));
  }
  function onRemoveFriend(gnomeId) {
    dispatch(removeFriend(gnomeId));
  }
  function onSelectGnome(gnome) {
    dispatch(selectGnome(gnome));
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
            <SearchBar onSearch={onSearch} data={data} friends={friends} />
            <div className="gnome-cards-container">
              {currentScrollBatch.map((gnome, idx) => (
                <GnomeCard
                  gnome={{ ...gnome, isVerified: idx % 3 === 0 }}
                  userFriends={friends}
                  onAddFriend={onAddFriend}
                  onRemoveFriend={onRemoveFriend}
                  onSelectGnome={onSelectGnome}
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
      <GnomeProfile data={data} selectedGnome={selectedGnome} />
    </>
  );
}

export default Population;
