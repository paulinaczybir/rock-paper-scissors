import React, { Component } from 'react'

class ComputerVsComputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerOneScore: 0,
      computerTwoScore: 0,
      message: ""
    }
  }

  match = () => {
    let computerOneChoice = Math.floor(Math.random() * 3);
    let computerTwoChoice = Math.floor(Math.random() * 3);

    if (computerOneChoice === 0 && computerTwoChoice === 1) {
      this.setState({ 
        computerTwoScore: this.state.computerTwoScore + 1,
        message: "Rock loses to Paper. Computer Two wins!"
       })
    }
    else if (computerOneChoice === 0 && computerTwoChoice === 2) {
      this.setState({ 
        computerOneScore: this.state.computerOneScore + 1,
        message: "Rock beats Scissors. Computer One wins!"
      })
    }
    else if (computerOneChoice === 1 && computerTwoChoice === 0) {
      this.setState({ 
        computerOneScore: this.state.computerOneScore + 1,
        message: "Paper beats Rock. Computer One wins!"
      })
    }
    else if (computerOneChoice === 1 && computerTwoChoice === 2) {
      this.setState({ 
        computerTwoScore: this.state.computerTwoScore + 1,
        message: "Paper loses to Scissors. Computer Two wins!"
       })
  }
    else if (computerOneChoice === 2 && computerTwoChoice === 0) {
      this.setState({ 
        computerTwoScore: this.state.computerTwoScore + 1,
        message: "Scissors loses to Rock. Computer Two wins!"
      })
  }
    else if (computerOneChoice === 2 && computerTwoChoice === 1) {
      this.setState({ 
        computerOneScore: this.state.computerOneScore + 1,
        message: "Scissors beats Paper. Computer One wins!"
       })
    } else {
      this.setState({ message: "It's a draw!"})
    }
  }

  render() {
    return (
      <div>
        <div className="match-container">
          <div className="label">Computer One</div>
          <div className="score"> {this.state.computerOneScore} : {this.state.computerTwoScore} </div>
          <div className="label">Computer Two</div>
        </div>
        <div className="match-message">{this.state.message}</div>
        <div className="choices">
          <img src="/rock.png" alt="rock" className="choice" />
          <img src="/paper.png" alt="paper" className="choice" />
          <img src="/scissors.png" alt="scissors" className="choice" />
        </div>
        <button className="play-btn" onClick={() => this.match()}>Play!</button>
      </div>
    );
  }
}

export default ComputerVsComputer;