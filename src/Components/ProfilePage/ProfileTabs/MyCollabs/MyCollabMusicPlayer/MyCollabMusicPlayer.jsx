import React from 'react'
import './MyCollabMusicPlayer.css'
import MyCollabHeader from '../MyCollabHeader/MyCollabHeader'
import MyCollabVolume from '../MyCollabVolume/MyCollabVolume'

const MyCollabMusicPlayer = ({status}) => {
  return (
    <div className='collab__musicplayer__container'>
        <MyCollabHeader status={status} />
        <MyCollabVolume />
    </div>
  )
}

export default MyCollabMusicPlayer