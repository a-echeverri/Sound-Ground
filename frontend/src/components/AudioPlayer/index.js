import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import { useState } from "react";
// import { getSong } from "../../store/song"

const Player = ( source ) => (
  <>
  {/* {console.log("source", source)} */}
  <div className="audio-player-footer">
  <AudioPlayer
    // autoPlay
    src= "https://hosted-songs.s3.us-west-1.amazonaws.com/Tame+Impala+(Live+from+Wave+House).mp3"
    onPlay={e => console.log("onPlay", source)}
    // other props here
    
  />;
  </div>
  </>
);

export default Player;
