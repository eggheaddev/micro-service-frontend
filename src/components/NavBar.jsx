import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <h1 className="logo">Hostify</h1>
      </Link>
        <ul>
          <li className="nav-item">
            <Link to="/documentation">Documentation</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <button type="button" className="btn sign-up-btn">
                Get a token
              </button>
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
