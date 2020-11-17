import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyList from "./MyList";
import NavBar from "./NavBar";
import "./index.css";
import MovieType from "./MovieType";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/movie/:id" component={MovieType} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
