import React, { Component } from "react";

class PlayerVsComputer extends Component {
  render() {
    return (
      <div>
        <div className="score"> 0 : 0 </div>
        <div className="match-message">Rock beats scissors. You win!</div>
        <div className="choices">
          <img src="/rock.png" alt="rock" className="choice" />
          <img src="/paper.png" alt="paper" className="choice" />
          <img src="/scissors.png" alt="scissors" className="choice" />
        </div>
      </div>
    );
  }
}

export default PlayerVsComputer;
