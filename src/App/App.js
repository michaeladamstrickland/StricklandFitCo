import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ShoppingCart from './CommonComponents/ShoppingCart/ShoppingCart';

import Home1 from "./Layouts/Home1";
import Pages from "./CommonComponents/Pages/pages";

import Header from './CommonComponents/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Home1} />
            <Route exact path="/ShoppingCart" component={ShoppingCart} />
            <Route exact path="/pages" component={Pages} />
          </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
