import React, { Component } from "react";

class PlayerVsComputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      computerScore: 0,
      message: ""
    }
  }

  match = (playerChoice) => {
    let computerChoice = Math.floor(Math.random() * 3);

    if (playerChoice === 0 && computerChoice === 1) {
      this.setState({ 
        computerScore: this.state.computerScore + 1,
        message: "Rock loses to Paper. Computer wins!"
       })
    }
    else if (playerChoice === 0 && computerChoice === 2) {
      this.setState({ 
        playerScore: this.state.playerScore + 1,
        message: "Rock beats Scissors. You win!"
      })
    }
    else if (playerChoice === 1 && computerChoice === 0) {
      this.setState({ 
        playerScore: this.state.playerScore + 1,
        message: "Paper beats Rock. You win!"
      })
    }
    else if (playerChoice === 1 && computerChoice === 2) {
      this.setState({ 
        computerScore: this.state.computerScore + 1,
        message: "Paper loses to Scissors. Computer wins!"
       })
  }
    else if (playerChoice === 2 && computerChoice === 0) {
      this.setState({ 
        computerScore: this.state.computerScore + 1,
        message: "Scissors loses to Rock. Computer wins!"
      })
  }
    else if (playerChoice === 2 && computerChoice === 1) {
      this.setState({ 
        playerScore: this.state.playerScore + 1,
        message: "Scissors beats Paper. You win!"
       })
    } else {
      this.setState({ message: "It's a draw!"})
    }
  }

  newGame = () => {
    this.setState({
      playerScore: 0,
      computerScore: 0,
      message: ""
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="label">Player</div>
          <div className="score"> {this.state.playerScore} : {this.state.computerScore} </div>
          <div className="label">Computer</div>
        </div>
        <div className="match-message">{this.state.message}</div>
        <div className="choices clickable">
          <img onClick={() => this.match(0)} src="/rock.png" alt="rock" className="choice" />
          <img onClick={() => this.match(1)} src="/paper.png" alt="paper" className="choice" />
          <img onClick={() => this.match(2)} src="/scissors.png" alt="scissors" className="choice" />
        </div>
        <div className="container">
          <button className="btn new-game-btn" onClick={() => this.newGame()}>New game</button>
        </div>
      </div>
    );
  }
}

export default PlayerVsComputer;
