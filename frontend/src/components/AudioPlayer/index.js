import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => (
  <div className="audio-player-footer">
  <AudioPlayer
    src="https://hosted-songs.s3.us-west-1.amazonaws.com/Thriller%2BRemix+-+Eric+Prydz.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
    
  />;
  </div>
);

export default Player;
