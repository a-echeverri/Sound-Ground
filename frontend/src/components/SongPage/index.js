import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSong, getSongs } from "../../store/song";

function SongPage() {
  const dispatch = useDispatch();
  let { id }= useParams();

  const song = useSelector(state => state.song.song);
  
  useEffect(() => {
    dispatch(getSong(id))
  },[dispatch, id]);
  
  console.log(song);

  return (
    <div className="song-page-div">
      <div> {song?.title}</div>
      <div>{song?.albumId}</div>
      <div>{song?.User.username}</div>
      <div>{song?.url}</div>
      {/* <div>{song?.Album.title}</div> */}
    </div>
  )
}

export default SongPage;