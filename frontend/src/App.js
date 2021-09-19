import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SongPage from "./components/SongPage";
import AllSongsPage from "./components/AllSongsPage";
import AlbumPage from "./components/SongPage";
// import AllAlbumsPage from "./components/AllAlbumsPage";
import UserProfilePage from "./components/UserProfilePage";
import UploadFormPage from "./components/UploadFormPage";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
            <AudioPlayer />
					</Route>
          <Route exact path="/songs">
            <AllSongsPage />
            <AudioPlayer />
          </Route>
					<Route exact path="/songs/:id">
						<SongPage />
            <AudioPlayer />
					</Route>
          <Route exact path="/user/:id">
						<UserProfilePage />
            <AudioPlayer />
					</Route>
          {/* <Route exact path="/albums">
            <AllAlbumsPage />
            <AudioPlayer />
          </Route> */}
          <Route exact path="/albums/:id">
            <AlbumPage />
            <AudioPlayer />
          </Route>
          {/* <Route exact path="/signup">
            <SignupFormPage />
            <AudioPlayer />
          </Route> */}
          <Route exact path="/upload">
            <UploadFormPage />
            <AudioPlayer />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;