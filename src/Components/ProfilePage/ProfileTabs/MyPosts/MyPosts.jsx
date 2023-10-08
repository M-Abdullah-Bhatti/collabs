import React from 'react'
import MyCollabMusicPlayer from '../MyCollabs/MyCollabMusicPlayer/MyCollabMusicPlayer'
import CollabDetails from '../../Shared/CollabDetails/CollabDetails'

const MyPosts = () => {
  return (
    <div className="my__collabs__container">
      <div className="my__collabs__main">
        <MyCollabMusicPlayer />
        <CollabDetails />
      </div>
    </div>
  )
}

export default MyPosts