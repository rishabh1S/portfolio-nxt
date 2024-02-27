"use client";

import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string | undefined;
  width: number;
  height: number;
  className: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  width,
  height,
  className,
}) => {
  return (
    <ReactPlayer
      url={videoUrl}
      width={width}
      height={height}
      playing
      muted
      loop
      controls={false}
      onEnded={() => {}}
      className={className}
    />
  );
};

export default VideoPlayer;
