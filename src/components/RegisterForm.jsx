import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleInfo(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function submitInfo(event) {
    event.preventDefault();
    setError("Error message");
    console.log(userInfo);
  }

  return (
    <div className="user-form form-container mx-center">
      <p className="text-center mb-5">Register</p>
      <form className="container mx-auto" onSubmit={submitInfo}>
        <div className="form-group">
          <div className="form-info">
            <span>Username</span>
            {error && <sub className="ml-3">{error}</sub>}
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
            {error && <sub className="ml-3">{error}</sub>}
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
            {error && <sub className="ml-3">{error}</sub>}
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
    </div>
  );
}

export default RegisterForm;
