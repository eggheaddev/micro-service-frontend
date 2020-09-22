import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Register() {
  return (
    <Fragment>
      <NavBar />

      <div className="register container mx-center">
        <p className="text-center">Register</p>
        <form className="container mx-auto">
          <div className="form-group">
            <label>Username</label>
            <input type="username" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-block mb-1">
            Submit
          </button>
          <Link to="/login">
            <button type="submit" className="btn btn-submit btn-block">
              Do you already have an account?
            </button>
          </Link>
        </form>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Register;
