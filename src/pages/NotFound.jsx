import React from "react"
import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="not-found container mx-center">
    <p className="text-center 404">404</p>
    <Link to="/">
      <button className="btn">Go home</button>
    </Link>
    </div>
  )
}

export default NotFound
