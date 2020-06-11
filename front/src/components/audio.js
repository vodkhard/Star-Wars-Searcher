import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FiVolume, FiVolumeX } from "react-icons/fi";

const Audio = () => {
  const [muted, setMuted] = useState(true);

  return (
    <div
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
      }}
    >
      <ReactAudioPlayer
        src="https://www.dinosoria.com/cinema/StarWars%20Start%20Windows.mp3"
        autoPlay
        controls
        loop
        volume={0.1}
        muted={muted}
        style={{
          display: "none",
        }}
      />
      <div onClick={() => setMuted(!muted)}>
        {muted ? <FiVolumeX /> : <FiVolume />}
      </div>
    </div>
  );
};

export default Audio;
