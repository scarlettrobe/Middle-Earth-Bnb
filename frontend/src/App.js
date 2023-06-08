import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { SpotIndex } from "./components/Spots/SpotIndex";
import { SpotList } from "./components/Spots/SpotList";
import { CurrentSpots } from "./components/Spots/CurrentSpots";
import { UpdateSpot } from "./components/Spots/UpdateSpot";
import { CreateSpot } from "./components/Spots/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
        <Route exact path='/'>
          <SpotIndex />
        </Route>
        <Route exact path="/spots/new"><CreateSpot /></Route>
        <Route exact path="/spots/current"><CurrentSpots /></Route>
        <Route exact path="/spots/:spotId/edit"><UpdateSpot /></Route>
        <Route exact path="/spots/:spotId"><SpotList /></Route>
      </Switch>}
    </>
  );
}

export default App;
