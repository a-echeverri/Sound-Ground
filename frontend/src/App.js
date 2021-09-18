import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal";
// import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import HomePage from "./components/HomePage";
import SongPage from "./components/SongPage";
import UserProfilePage from "./components/UserProfilePage";

import AudioPlayer from "./components/AudioPlayer";
import { getSongs } from "./store/song";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
            {/* <AudioPlayer /> */}
					</Route>
          <Route path="/player">
            {/* <AudioPlayer /> */}
          </Route>
					<Route path="/songs/:songId">
						<SongPage />
					</Route>
          <Route path="/user">
						{/* <UserProfilePage /> */}
					</Route>
        </Switch>
      )}
    </>
  );
}

export default App;