import React from "react";
import MyCollabMusicPlayer from "../MyCollabs/MyCollabMusicPlayer/MyCollabMusicPlayer";

const MyMusic = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <MyCollabMusicPlayer status={0} />
      <div style={{ backgroundColor: '#fff', padding: '20px'}}></div>
    </div>
  );
};

export default MyMusic;
