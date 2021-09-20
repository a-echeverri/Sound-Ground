import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../store/user";
import { useDispatch } from "react-redux";
// import "./AllSongsPage.css"

function UserProfilePage() {
  const dispatch = useDispatch();
  const { user } = useParams();
  const profile = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser(profile));
  }, [dispatch, profile]);

  // Display all songs in the database
  return (
    <div className="song-page-div">
    <div>{user?.username}</div>
    {/* <div>{user?.albumId}</div>
    <div>{user?.User.username}</div>
    <div>{user?.url}</div> */}
    {/* <div>{song?.Album.title}</div> */}
  </div>
  );
}

export default UserProfilePage;