import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Game from './Game';
import logo from './logo.svg';
import start from './start.png';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
    <div className = "App-Logo">
    <img src={logo} className="App-logo" alt="logo" />
    </div>
      <div className="StartButton">
        <Link to='/start'><img height='50px' src={start} /></Link>
      </div>
    </div>
);

const Home = (props) => (
  <Page title="Hee Won (Kiwi) Trivia Game: Video Games"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/start" component={Game}/>
      </Router>
    );
  }
}

export default App;
