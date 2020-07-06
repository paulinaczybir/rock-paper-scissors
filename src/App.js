import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          Rock Paper Scissors
        </header>

        <div className="choices">
          <img src="/rock.png" alt="rock" className="choice"/>
          <img src="/paper.png" alt="paper" className="choice"/>
          <img src="/scissors.png" alt="scissors" className="choice"/>
        </div>
      </div>
    );
  }
}

export default App;
