import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
