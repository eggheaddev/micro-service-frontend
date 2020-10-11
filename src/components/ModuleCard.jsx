import React, { useState, Fragment } from "react";

function ModuleCard(props) {
  const { title, description, author, version, created, repository } = props;

  const [completeInfo, setCompleteInfo] = useState(null);

  function moduleInformation() {
    return (
      <Fragment>
        <div className="package-title">
          <div>
            <h1>{title}</h1>
          </div>
          <p>{`@${author}`}</p>
        </div>
        <span>{description}</span>
      </Fragment>
    );
  }

  function moreInfo() {
      return (
        <div id="package-more-info" className={completeInfo ? "show" : completeInfo === false && "hide"}>
          <hr />
          <span>Last Version: {`${version}v`}</span>
          <br />
          <span>{created}</span>
          <br />
          <a href={repository} target="_blank" rel="noopener noreferrer">
            Click to GitHub
          </a>
        </div>
      );
  }

  return (
    <Fragment>
      <div
        className="package-card package-link"
        onMouseEnter={_ => setCompleteInfo(true)}
        onMouseLeave={_ => setCompleteInfo(false)}
      >
        {moduleInformation()}
        {moreInfo()}
      </div>
    </Fragment>
  );
}

export default ModuleCard;
