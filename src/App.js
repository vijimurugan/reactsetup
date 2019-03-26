import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import AppRoute from './Routes/AppRoute';
import RoutesList from './Routes/List';
import { Provider } from 'react-redux';
import store from './Store/Store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Switch>
                {  RoutesList.map((route,key) => {
                    return <AppRoute exact path={route.path} layout={route.layout} component={route.component} />
                })}
              </Switch>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
