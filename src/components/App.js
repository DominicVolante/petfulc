import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Home from "../routes/Home.js";
import AdoptionRoute from "../routes/AdoptionRoute.js";

export default class App extends Component {
  render() {
    return (
      <div className="root">
        <header>
          <Route path="/" component={Header} />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={"/adoption"} component={AdoptionRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
