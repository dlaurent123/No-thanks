import React from "react";
import "./App.css";
import Home from "./features/home/Home";
import { Route, Switch } from "react-router-dom";
import SearchDisplayPage from "./features/searchDisplayPage/SearchDisplayPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/searchresults">
          <SearchDisplayPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
