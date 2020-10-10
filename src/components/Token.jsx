import React from "react";

function Token(props) {
  return (
    <div className="token-container">
      <p>Copy your token below</p>
      <span className="show-token mt-4 mb-5">{props.token}</span>
    </div>
  );
}

export default Token
