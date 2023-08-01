import React from 'react'
import ReactPlayer from 'react-player'

function Player({video}) {
  return (
    
    <div className='d-flex'>
        <ReactPlayer
            url={video}
            width="100%"
            height="50%"
            poster=""
            controls
        />
    </div>
  )
}

export default Player