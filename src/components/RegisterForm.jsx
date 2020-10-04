import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { register } from "../services/users";

function RegisterForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleInfo(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function submitInfo(event) {
    event.preventDefault();
    register(userInfo).then(res => {
      if (!res.error) {
        setSuccess(true);
      } else {
        setErrorMessage(res.message);
      }
    });
  }

  return (
    <div className="user-form form-container mx-center">
      <p className="text-center mb-5">Register</p>
      <form className="container mx-auto" onSubmit={submitInfo}>
        <div className="form-group">
          <div className="form-info">
            <span>Username</span>
            {errorMessage.toLowerCase().match("username") && <sub className="ml-2">{errorMessage}</sub>}
          </div>
          <input
            name="username"
            type="username"
            className="form-control"
            autoFocus
            required
            onChange={handleInfo}
          />
        </div>
        <div className="form-group">
          <div className="form-info">
            <span>Email address</span>
            {errorMessage.toLowerCase().match("email") && <sub className="ml-2">{errorMessage}</sub>}
          </div>
          <input
            name="email"
            type="email"
            required
            className="form-control"
            onChange={handleInfo}
          />
        </div>
        <div className="form-group">
          <div className="form-info">
            <span>Password</span>
            {errorMessage.toLowerCase().match("password") && <sub className="ml-2">{errorMessage}</sub>}
          </div>
          <input
            name="password"
            type="password"
            required
            className="form-control"
            onChange={handleInfo}
          />
        </div>
        <button type="submit" className="btn btn-block mb-1">
          Submit
        </button>
        <Link to="/login" className="switch-form">
          <button type="submit" className="btn btn-block">
            Do you already have an account?
          </button>
        </Link>
      </form>
      {success && <Redirect to="/login" />}
    </div>
  );
}

export default RegisterForm;
