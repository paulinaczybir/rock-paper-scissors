import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlayerVsComputer from './components/PlayerVsComputer';
import ComputerVsComputer from './components/ComputerVsComputer';
import Navbar from './components/Navbar';


class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <header>
            Rock Paper Scissors
          </header>
            <Switch>
              <Route path="/computer">
                <ComputerVsComputer />
              </Route>
              <Route path="/">
                <PlayerVsComputer />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
