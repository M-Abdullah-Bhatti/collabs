import React from 'react'
import './MyCollabMusicPlayer.css'
import MyCollabHeader from '../MyCollabHeader/MyCollabHeader'
import MyCollabVolume from '../MyCollabVolume/MyCollabVolume'

const MyCollabMusicPlayer = () => {
  return (
    <div className='collab__musicplayer__container'>
        <MyCollabHeader />
        <MyCollabVolume />
    </div>
  )
}

export default MyCollabMusicPlayer