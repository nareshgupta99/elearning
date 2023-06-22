import React from 'react'
import ReactPlayer from 'react-player'

function Player() {
  return (
    
    <div>
        <ReactPlayer
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            width="70%"
            height="50%"
            poster=""
            controls
        />
    </div>
  )
}

export default Player