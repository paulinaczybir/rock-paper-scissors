import React, { Component } from "react";

class ComputerVsComputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerOneScore: 0,
      computerTwoScore: 0,
      computerOneImg: "",
      computerTwoImg: "",
      imgBeginingState: true,
      message: "",
    };
  }

  displayMatch(computerOneImg, computerTwoImg, message) {
    this.setState({
      computerOneImg: `/${computerOneImg}.png`,
      computerTwoImg: `/${computerTwoImg}.png`,
      message: message,
    });
  }

  match = () => {
    let computerOneChoice = Math.floor(Math.random() * 3);
    let computerTwoChoice = Math.floor(Math.random() * 3);

    if (computerOneChoice === 0 && computerTwoChoice === 1) {
      this.setState({ computerTwoScore: this.state.computerTwoScore + 1 });
      this.displayMatch(
        "rock",
        "paper",
        "Rock loses to Paper. Computer Two wins!"
      );
    } else if (computerOneChoice === 0 && computerTwoChoice === 2) {
      this.setState({ computerOneScore: this.state.computerOneScore + 1 });
      this.displayMatch(
        "rock",
        "scissors",
        "Rock beats Scissors. Computer One wins!"
      );
    } else if (computerOneChoice === 1 && computerTwoChoice === 0) {
      this.setState({ computerOneScore: this.state.computerOneScore + 1 });
      this.displayMatch(
        "paper",
        "rock",
        "Paper beats Rock. Computer One wins!"
      );
    } else if (computerOneChoice === 1 && computerTwoChoice === 2) {
      this.setState({ computerTwoScore: this.state.computerTwoScore + 1 });
      this.displayMatch(
        "paper",
        "scissors",
        "Paper loses to Scissors. Computer Two wins!"
      );
    } else if (computerOneChoice === 2 && computerTwoChoice === 0) {
      this.setState({ computerTwoScore: this.state.computerTwoScore + 1 });
      this.displayMatch(
        "scissors",
        "rock",
        "Scissors loses to Rock. Computer Two wins!"
      );
    } else if (computerOneChoice === 2 && computerTwoChoice === 1) {
      this.setState({ computerOneScore: this.state.computerOneScore + 1 });
      this.displayMatch(
        "scissors",
        "paper",
        "Scissors beats Paper. Computer One wins!"
      );
    } else {
      let choice;
      switch (computerOneChoice) {
        case 0:
          choice = "Rock";
          break;
        case 1:
          choice = "Paper";
          break;
        default:
          choice = "Scissors";
          break;
      }
      this.displayMatch(choice.toLowerCase(), choice.toLowerCase(), `${choice} vs ${choice}. It's a draw!`);
    }
    this.setState({ imgBeginingState: false });
  };

  newGame = () => {
    this.setState({
      computerOneScore: 0,
      computerTwoScore: 0,
      computerOneImg: "",
      computerTwoImg: "",
      imgBeginingState: true,
      message: "",
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="label">Computer One</div>
          <div className="score">
            {this.state.computerOneScore} : {this.state.computerTwoScore}
          </div>
          <div className="label">Computer Two</div>
        </div>
        <div className="match-message">{this.state.message}</div>
        {this.state.imgBeginingState ? (
          <div className="choices">
            <img src="/rock.png" alt="rock" className="choice" />
            <img src="/paper.png" alt="paper" className="choice" />
            <img src="/scissors.png" alt="scissors" className="choice" />
          </div>
        ) : (
          <div className="container">
            <img src={this.state.computerOneImg} alt="computer one" />
            <img src={this.state.computerTwoImg} alt="computer two" />
          </div>
        )}
        <div className="container">
          <button className="btn" onClick={() => this.match()}>
            Play!
          </button>
          <button className="btn new-game-btn" onClick={() => this.newGame()}>
            New game
          </button>
        </div>
      </div>
    );
  }
}

export default ComputerVsComputer;
