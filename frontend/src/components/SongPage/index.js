import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link} from "react-router-dom"
import { getSong, deleteSong, updateSong } from "../../store/song";
import AudioPlayer from "../AudioPlayer";
import Player from "../AudioPlayer";

function SongPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id }= useParams();
  

  const song = useSelector(state => state.song.song);

  const [source, setSource] = useState('');
  
  useEffect(() => {
    dispatch(getSong(id))
  },[dispatch, id]);
  
  const handleDelete = () => {
      dispatch(deleteSong(+id));
      history.push('/songs');
    }
  
  // useEffect(() => {
  //   setSource()
  // })
  // console.log(song);

  return (
    <div className="song-page-div">
      <div>{song?.title}</div>
      <div>{song?.albumId}</div>
      <div>{song?.User.username}</div>
      <div>{song?.User.userId}</div>
      {/* <div>{song?.Album.title}</div> */}
      <div>
        <button onClick={() => setSource(song?.url)} >Play Song</button>
        {/* {console.log(source)} */}
        {/* <AudioPlayer src={source}/> */}
        {/* {console.log("song url after navlink", song?.url)} */}
        {/* <AudioPlayer src={source} autoPlay>{console.log("src", song?.url)}</AudioPlayer> */}
        {/* <AudioPlayer src={song?.url} onPlay>{console.log("src", song?.url)}</AudioPlayer> */}
      </div>
      <div>
      <button onClick={''} >Edit Song {console.log('fix edit button')}</button>
      </div>
      <div>
      <button onClick={handleDelete}>Delete Song</button>
      </div>
      {/* <div>{song?.Album.title}</div> */}
    </div>
  )
}

export default SongPage;