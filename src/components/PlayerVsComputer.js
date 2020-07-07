import React, { Component } from "react";

class PlayerVsComputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      computerScore: 0,
      playerChoice: null,
      computerChoice: null
    }
  }


  getPlayerChoice = (choice) => {
    this.setState({
      playerChoice: choice,
      computerChoice: Math.floor(Math.random() * 3)
    })
  }

  render() {
    return (
      <div>
        <div className="match-container">
          <div className="label">Player</div>
          <div className="score"> {this.state.playerScore} : {this.state.computerScore} </div>
          <div className="label">Computer</div>
        </div>
        <div className="match-message">Rock beats scissors. You win!</div>
        <div className="choices">
          <img onClick={() => this.getPlayerChoice(0)} src="/rock.png" alt="rock" className="choice" />
          <img onClick={() => this.getPlayerChoice(1)} src="/paper.png" alt="paper" className="choice" />
          <img onClick={() => this.getPlayerChoice(2)} src="/scissors.png" alt="scissors" className="choice" />
        </div>
      </div>
    );
  }
}

export default PlayerVsComputer;
