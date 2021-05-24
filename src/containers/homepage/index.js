import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCensusData } from "redux/slices";
import Header from "components/header";
import Population from "containers/population";
import UserSidebar from "components/user-sidebar";
import GithubBadge from "components/common/github-badge";

function Homepage() {
  const dispatch = useDispatch();
  const { friends = [] } = useSelector((state) => state.census);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(getCensusData());
  }, [dispatch]);

  const onUserBadgeClick = () => setIsSidebarOpen(true);
  const onCloseUserSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="container">
      <Header onUserBadgeClick={onUserBadgeClick} />
      <div className="content">
        <h1>Welcome to Brastlewark!</h1>
        <p>
          Hey there! Welcome to our town. Connect with other people and start
          trading today.
        </p>
        <Population />
        <UserSidebar
          isOpen={isSidebarOpen}
          onClose={onCloseUserSidebar}
          friends={friends}
        />
      </div>
      <GithubBadge />
    </div>
  );
}

export default Homepage;
