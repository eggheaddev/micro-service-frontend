import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
    setErrorMessage("Error message");
    if (userInfo.username === "elpepe") setSuccess(true)
  }

  return (
    <div className="user-form form-container mx-center">
      <p className="text-center mb-5">Register</p>
      <form className="container mx-auto" onSubmit={submitInfo}>
        <div className="form-group">
          <div className="form-info">
            <span>Username</span>
            {errorMessage && <sub className="ml-3">{errorMessage}</sub>}
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
            {errorMessage && <sub className="ml-3">{errorMessage}</sub>}
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
            {errorMessage && <sub className="ml-3">{errorMessage}</sub>}
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
