import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/takequiz" component={Quiz}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default (App);
