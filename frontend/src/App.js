import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import LandingPage from "./components/LandingPage";
import FeedPage from "./components/FeedPage";
import Discover from "./components/Discover";
import AboutPage from "./components/AboutPage";
import SongPage from "./components/SongPage";
import UploadPage from "./components/UploadPage";
import AlbumPage from "./components/AlbumPage";
import * as sessionActions from "./store/session";
import UserProfilePage from "./components/UserProfilePage";
import Navigation from "./components/Navigation";
import Player from "./components/AudioPlayer";


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
            <LandingPage />
            <Player />		 
					</Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
					<Route path="/discover">
						<Discover />
            <Player />
					</Route>
					<Route path="/about">
						<AboutPage />
            <Player />
					</Route>
					<Route path="/upload">
						<UploadPage />
					</Route>
					<Route path="/albums/:albumId">
						<AlbumPage />
            <Player />
					</Route>
					<Route path="/search/:searchTerm">
						<FeedPage />
					</Route>
					<Route path="/songs/:songId">
						<SongPage />
            <Player />
					</Route>
					<Route path="/users/:username">
						<UserProfilePage />
            <Player />
					</Route>
        </Switch>
      )}
    </>
  );
}

export default App;