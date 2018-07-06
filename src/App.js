import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/takequiz" component={Quiz}/>
        <Route exact path="/results" component={Results}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default (App);
