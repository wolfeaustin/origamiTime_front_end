import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import About from "./Components/About";
import ModelShowPage from "./Components/ModelShowPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/models/:modelId" component={ModelShowPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/about" component={About} />
          <Route path={["/home", "/"]} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
