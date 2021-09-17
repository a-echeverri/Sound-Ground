import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { deleteSong, getSongs } from "../../store/song";

function SongPage() {
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();
  const allSongs = useSelector(state => state.songs.songs);
  console.log(allSongs)

  useEffect(() => {
    dispatch(getSongs(params.userID))
  }, [dispatch, params]);


  return (
    <div className="song-page-div">
      {allSongs?.map((song) => {
        return (
          <div className="song-info-div">
            <h2 className="song-title-div">{song.title}</h2>
            <h2 className="song-album-div">{song.album}</h2>
            <h2 className="song-url-div">{song.url}</h2>
            <button onClick={() => {
              dispatch(deleteSong(song))
              return history.push('/songs');
            }}>Delete Song</button>
          </div>
        )
      })}
    </div>
  )
}

export default SongPage;