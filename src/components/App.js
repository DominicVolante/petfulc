import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import LandingRoute from "../routes/LandingRoute.js";
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
            <Route exact path="/" component={LandingRoute} />
            <Route path={"/adoption"} component={AdoptionRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
