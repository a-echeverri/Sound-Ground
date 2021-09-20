import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory} from "react-router-dom"
import { getSong, deleteSong, updateSong } from "../../store/song";
import "./SongPage.css";

// import AudioPlayer from "../AudioPlayer";


function SongPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id }= useParams();
  

  const song = useSelector(state => state.song.song);

  // const [source, setSource] = useState('');
  
  useEffect(() => {
    dispatch(getSong(id))
  },[dispatch, id]);
  
  const handleDelete = () => {
      dispatch(deleteSong(+id));
      history.push('/songs');
    }

  const handleEdit = () => {
    dispatch(updateSong(+id));
    history.push('/songs/');
  }
  
  // useEffect(() => {
  //   setSource()
  // })
  // console.log(song);

  return (
    <div className="song-page-div">
      <div className="">Song Title: {song?.title}</div>
      {/* <div>{song?.album}</div> */}
      <div>Uploaded By User: {song?.User.userId}</div>
      <div>{song?.User.username}</div>
      
      {/* <div>{song?.Album.title}</div> */}
      <div>
        {/* <button onClick={() => setSource(song?.url)} >Play Song</button> */}
        {/* {console.log(source)} */}
        {/* <AudioPlayer src={source}/> */}
        {/* {console.log("song url after navlink", song?.url)} */}
        {/* <AudioPlayer src={source} autoPlay>{console.log("src", song?.url)}</AudioPlayer> */}
        {/* <AudioPlayer src={song?.url} onPlay>{console.log("src", song?.url)}</AudioPlayer> */}
      </div>
      <div className='edit-button-container'>
      <button className='edit-button'onClick={handleEdit} >Edit Song </button>
      </div>
      <div className='delete-button-container'>
      <button className='delete-button' onClick={handleDelete}>Delete Song</button>
      </div>
      {/* <div>{song?.Album.title}</div> */}
    </div>
  )
}

export default SongPage;