import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from "./SearchPage"; 
import Home from "./Home";
import Detail from "./Detail";

export default class App extends Component {
  render() {
  return (
      <div>
          <Router>
            <Switch>
            <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
            <Route 
                            path="/SearchPage" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
            <Route 
                            path='/Detail'
                            exact
                            render={(routerProps) => <Detail {...routerProps} />} 
                        />
            </Switch>
          </Router>
      </div>
  );
}}