import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/computer">Computer vs Computer</NavLink>
          </li>
          <li>
          <NavLink exact to="/">Player vs Computer</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
