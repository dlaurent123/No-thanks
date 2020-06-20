import React from "react";
import "./App.css";
import Home from "./features/home/Home";
import { Route, Switch } from "react-router-dom";
import SearchDisplayPage from "./features/searchDisplayPage/SearchDisplayPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
<<<<<<< HEAD
        <Route exact path="/search">
=======
        <Route exact path="/searchresults">
>>>>>>> 6a7833bfe8facf7ce5a6aae458b1b90eb4ae9427
          <SearchDisplayPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
