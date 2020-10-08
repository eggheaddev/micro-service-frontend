import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <span>404</span>
      <p>Ops! Looks like you are lost, let's go back home.</p>
      <Link to="/">
        <button className="btn">Go home</button>
      </Link>
    </div>
  );
}

export default NotFound;
