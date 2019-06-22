import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/posts" component={PostsPage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;
