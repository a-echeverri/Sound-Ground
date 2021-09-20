import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
// import { getSong } from "../../store/song"

const Player = ( source ) => (
  <>
  {/* {console.log("source", source)} */}
  <div className="audio-player-footer">
  <AudioPlayer
    // autoPlay
    src= {source}
    onPlay={e => console.log("onPlay", source)}
    // other props here
    
  />;
  </div>
  </>
);

export default Player;
