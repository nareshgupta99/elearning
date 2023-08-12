import React from "react";
import ReactPlayer from "react-player";

function Player({ videoUrl, video }) {
  return (
    <div className="d-flex">
      <ReactPlayer
        url={`http://localhost:8181/api/video/${videoUrl}`}
        width="100%"
        height="50%"
        poster=""
        controls
      />
    </div>
  );
}

export default Player;
