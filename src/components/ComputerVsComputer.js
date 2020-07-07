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
      computerOneImg: computerOneImg,
      computerTwoImg: computerTwoImg,
      message: message,
    });
  }

  match = () => {
    let computerOneChoice = Math.floor(Math.random() * 3);
    let computerTwoChoice = Math.floor(Math.random() * 3);

    if (computerOneChoice === 0 && computerTwoChoice === 1) {
      this.setState({ computerTwoScore: this.state.computerTwoScore + 1 });
      this.displayMatch(
        "/rock.png",
        "/paper.png",
        "Rock loses to Paper. Computer Two wins!"
      );
    } else if (computerOneChoice === 0 && computerTwoChoice === 2) {
      this.setState({ computerOneScore: this.state.computerOneScore + 1 });
      this.displayMatch(
        "/rock.png",
        "/scissors.png",
        "Rock beats Scissors. Computer One wins!"
      );
    } else if (computerOneChoice === 1 && computerTwoChoice === 0) {
      this.setState({ computerOneScore: this.state.computerOneScore + 1 });
      this.displayMatch(
        "/paper.png",
        "/rock.png",
        "Paper beats Rock. Computer One wins!"
      );
    } else if (computerOneChoice === 1 && computerTwoChoice === 2) {
      this.setState({ computerTwoScore: this.state.computerTwoScore + 1 });
      this.displayMatch(
        "/paper.png",
        "/scissors.png",
        "Paper loses to Scissors. Computer Two wins!"
      );
    } else if (computerOneChoice === 2 && computerTwoChoice === 0) {
      this.setState({ computerTwoScore: this.state.computerTwoScore + 1 });
      this.displayMatch(
        "/scissors.png",
        "/rock.png",
        "Scissors loses to Rock. Computer Two wins!"
      );
    } else if (computerOneChoice === 2 && computerTwoChoice === 1) {
      this.setState({ computerOneScore: this.state.computerOneScore + 1 });
      this.displayMatch(
        "/scissors.png",
        "/paper.png",
        "Scissors beats Paper. Computer One wins!"
      );
    } else if (computerOneChoice === 0 && computerTwoChoice === 0) {
      this.setState({
        message: "Rock vs Rock. It's a draw!",
        computerOneImg: "/rock.png",
        computerTwoImg: "/rock.png",
      });
    } else if (computerOneChoice === 1 && computerTwoChoice === 1) {
      this.setState({
        message: "Paper vs Paper. It's a draw!",
        computerOneImg: "/paper.png",
        computerTwoImg: "/paper.png",
      });
    } else if (computerOneChoice === 2 && computerTwoChoice === 2) {
      this.setState({
        message: "Scissors vs Scissors. It's a draw!",
        computerOneImg: "/scissors.png",
        computerTwoImg: "/scissors.png",
      });
    }

    this.setState({ imgBeginingState: false });
  };

  render() {
    return (
      <div>
        <div className="match-container">
          <div className="label">Computer One</div>
          <div className="score">
            {" "}
            {this.state.computerOneScore} : {this.state.computerTwoScore}{" "}
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
          <div className="computers-choices">
            <img src={this.state.computerOneImg} alt="computer one" />{" "}
            <img src={this.state.computerTwoImg} alt="computer two" />
          </div>
        )}
        <button className="play-btn" onClick={() => this.match()}>
          Play!
        </button>
      </div>
    );
  }
}

export default ComputerVsComputer;
