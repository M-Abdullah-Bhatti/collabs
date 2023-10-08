import React from "react";
import "./MyCollabs.css";
import CollabStats from "./CollabStats/CollabStats";
import MyCollabHeader from "./MyCollabHeader/MyCollabHeader";
import MyCollabVolume from "./MyCollabVolume/MyCollabVolume";
import CollabDetails from "../../Shared/CollabDetails/CollabDetails";

const MyCollabs = ({type}) => {
  return (
    <div className="my__collabs__container">
      {type !== "myPost" && <CollabStats />}
      <div className="my__collabs__main">
        <MyCollabHeader />
        <MyCollabVolume />
        <CollabDetails />
      </div>
    </div>
  );
};

export default MyCollabs;
