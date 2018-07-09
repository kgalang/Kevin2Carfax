import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App grid">
        <Route exact path="/" component={Landing} />
        <Route exact path="/takequiz" component={Quiz}/>
        <Route exact path="/results" component={Results}/>
        </div>
      </Router>
    );
  }
}

export default (App);
