import React from "react";

const MainVideo = () => {
  return (
    <div className="video">
      <video className="video__video" muted autoPlay loop>
        <source src="/videos/video.webm" type="video/webm" />
        <source src="/videos/video.mp4" type="video/mp4" />
        Sorry, your browser does not support videos.
      </video>
    </div>
  );
};

export default MainVideo;
