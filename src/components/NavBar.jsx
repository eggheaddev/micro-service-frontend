import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="nav-container">
          <Link to="/" className="navbar-brand">
            <h1 className="logo">Hostify</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/documentation" className="nav-link">
                  Documentation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <button type="button" className="btn sign-up-btn ml-4">
                    Sin Up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
