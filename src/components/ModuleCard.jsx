import React from "react"
import { Link } from "react-router-dom"

function ModuleCard(props) {
const moduleLink = `/package/${props.title.replace(/\s/g, "-")}@${props.version}v`

  return (
    <Link
      to={moduleLink}
      className="package-link"
    >
      <div className="package-card">
        <div className="package-title">
          <div>
             <h1 className="mr-3">{props.title}</h1>
            <span>{props.version && `${props.version}v`}</span>
          </div>
          <p>{props.author && `@${props.author}`}</p>
        </div>
        <span>{props.description}</span>
      </div>
    </Link>
  );
}

export default ModuleCard
