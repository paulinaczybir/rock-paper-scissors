import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/computer" activeClassName="active">Computer vs Computer</NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="active">Player vs Computer</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
