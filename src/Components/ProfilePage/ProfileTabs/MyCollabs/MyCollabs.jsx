import React from "react";
import "./MyCollabs.css";
import CollabStats from "./CollabStats/CollabStats";
import MyCollabHeader from "./MyCollabHeader/MyCollabHeader";
import MyCollabVolume from "./MyCollabVolume/MyCollabVolume";
import Details from '../../../CollabPage/Details/Details'

const MyCollabs = () => {
  return (
    <div className="my__collabs__container">
      <CollabStats />
      <div className="my__collabs__main">
        <MyCollabHeader />
        <MyCollabVolume />
        <Details />
      </div>
    </div>
  );
};

export default MyCollabs;
