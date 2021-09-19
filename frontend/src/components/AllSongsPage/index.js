import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSongs } from "../../store/song";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import "./AllSongsPage.css"

function AllSongsPage() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.song.songs);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  // Display all songs in the database
  return (
    <div className="all-songs-div">
      <h1>Song Feed</h1>
      {songs?.map((song) => (
        <div key={song.id}>
          <NavLink to={`/songs/${song.id}`}>
            <div>
              <div> {song.title}</div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default AllSongsPage;
