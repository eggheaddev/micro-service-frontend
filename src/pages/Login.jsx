import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Login() {
  return (
    <Fragment>
      <NavBar />

      <div className="login container mx-center">
        <p className="text-center">Get a token</p>
        <form className="container mx-center">
          <div className="form-group">
            <label>Username or email</label>
            <input type="username-email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-block mb-1">
            Submit
          </button>
          <Link to="/register">
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
