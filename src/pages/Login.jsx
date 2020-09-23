import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Login() {
  return (
    <Fragment>
      <NavBar />

      <div className="user-form form-container mx-center">
        <p className="text-center">Get a token</p>
        <sub className="mb-5">Tokens are available for one hour.</sub>
        <form className="container mx-center">
          <div className="form-group">
            <label>Username or email</label>
            <input name="username-email" type="username-email" className="form-control" autoFocus />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-block mb-1">
            Submit
          </button>
          <Link to="/register" className="switch-form">
            <button type="submit" className="btn btn-block">
              Create account
            </button>
          </Link>
        </form>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Login;
