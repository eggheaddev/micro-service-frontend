import React, { useState, Fragment } from "react";

function ModuleCard(props) {
  const { title, description, author, version, created, repository } = props;

  const [completeInfo, setCompleteInfo] = useState(false);

  function moduleInformation() {
    return (
      <div className="package-card">
        <div className="package-title">
          <div>
            <h1>{title}</h1>
          </div>
          <p>{`@${author}`}</p>
        </div>
        <span>{description}</span>
        {moreInfo()}
      </div>
    );
  }

  // Show the complete info card when mouse is hover
  function moreInfo() {
    if (completeInfo) {
      return (
        <Fragment>
          <hr/>
          <span>Last Version: {`${version}v`}</span>
          <br/>
          <span>{created}</span>
          <br/>
          <a href={repository} target="_blank" rel="noopener noreferrer">Click to GitHub</a>
        </Fragment>
      );
    }
  }

  return (
    <div
      className="package-link"
      onMouseEnter={_ => setCompleteInfo(true)}
      onMouseLeave={_ => setCompleteInfo(false)}
    >
      {moduleInformation()}
    </div>
  );
}

export default ModuleCard;
