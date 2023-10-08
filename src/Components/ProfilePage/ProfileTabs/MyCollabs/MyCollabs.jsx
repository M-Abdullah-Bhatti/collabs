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
        <MyCollabMusicPlayer />
        <CollabDetails />
      </div>
    </div>
  );
};

export default MyCollabs;
