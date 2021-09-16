import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => {(
  <AudioPlayer
    autoPlay
    src="https://hosted-songs.s3.us-west-1.amazonaws.com/Thriller%2BRemix+-+Eric+Prydz.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
)};

export default Player;