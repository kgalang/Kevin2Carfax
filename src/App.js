import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App grid">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/takequiz" component={Quiz}/>
        <Route exact path="/results" component={Results}/>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default (App);
