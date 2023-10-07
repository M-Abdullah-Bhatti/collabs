import React from "react";
import "./MyCollabs.css";
import CollabStats from "./CollabStats/CollabStats";
import MyCollabHeader from "./MyCollabHeader/MyCollabHeader";
import MyCollabVolume from "./MyCollabVolume/MyCollabVolume";

const MyCollabs = () => {
  return (
    <div className="my__collabs__container">
      <CollabStats />
      <div className="my__collabs__main">
        <MyCollabHeader />
        <MyCollabVolume />
      </div>
    </div>
  );
};

export default MyCollabs;
