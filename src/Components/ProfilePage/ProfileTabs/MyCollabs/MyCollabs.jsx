import React from "react";
import "./MyCollabs.css";
import CollabStats from "./CollabStats/CollabStats";
import CollabDetails from "../../Shared/CollabDetails/CollabDetails";
import MyCollabMusicPlayer from "./MyCollabMusicPlayer/MyCollabMusicPlayer";

const MyCollabs = () => {
  return (
    <div className="my__collabs__container">
      <CollabStats />
      <div className="my__collabs__main">
        <MyCollabMusicPlayer status={1} />
        <CollabDetails />
      </div>
      <div className="my__collabs__main">
        <MyCollabMusicPlayer status={0} />
        <CollabDetails />
      </div>
    </div>
  );
};

export default MyCollabs;
