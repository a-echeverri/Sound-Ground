import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { deleteSong, getSongs, getUserSongs } from "../../store/song";

function SongPage() {
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();
  const songs = useSelector(state => state.songs.songs);
  console.log(songs)

  useEffect(() => {
    dispatch(getUserSongs(params.userID))
  }, [dispatch, params]);


  return (
    <div className="song-page-div">
      {songs?.map((song) => {
        <ul>
          <li>
            {song.name}
          </li>
        </ul>
        // return (
        //   <div className="song-info-div">
        //     <h2 className="song-title-div">{song.title}</h2>
        //     <h2 className="song-album-div">{song.album}</h2>
        //     <h2 className="song-url-div">{song.url}</h2>
        //     <button onClick={() => {
        //       dispatch(deleteSong(song))
        //       return history.push('/songs');
        //     }}>Delete Song</button>
        //   </div>
        // )
      })}
    </div>
  )
}

export default SongPage;