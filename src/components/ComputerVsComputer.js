import React, { Component } from 'react'

class ComputerVsComputer extends Component {
  render() {
    return (
      <div>
        <h3>Comp vs comp</h3>
        <div className="choices">
          <img src="/rock.png" alt="rock" className="choice"/>
          <img src="/paper.png" alt="paper" className="choice"/>
          <img src="/scissors.png" alt="scissors" className="choice"/>
        </div>
      </div>
    )
  }
}

export default ComputerVsComputer;