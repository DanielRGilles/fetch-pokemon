import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import SearchPage from "./SearchPage"; 
import Home from "./Home";
import Detail from "./Detail";

export default class App extends Component {
  render() {
  return (
      <div>
          <Router>
            <header>
              <NavLink
              exact
              activeStyle={{fontSize:'1.5rem'}}
              to='/'>Home
              </NavLink>
              <NavLink
              exact
              activeStyle={{fontSize:'1.5rem'}}
              to='/SearchPage'>Search
              </NavLink>
            </header>
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
                            path="/Detail/:_id"
                            exact
                            render={(routerProps) => <Detail {...routerProps} />} 
                        />
            </Switch>
          </Router>
      </div>
  );
}}