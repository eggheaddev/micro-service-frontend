import React, { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../services/users";

function LoginForm(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  function handleInfo(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function submitInfo(event) {
    event.preventDefault();
    login(userInfo).then(res => {
      if (!res.error) {
        props.onChange(res["x-access-token"])
      } else {
        setErrorMsg(res.message);
      }
    });
  }

  return (
    <div className="user-form form-container mx-center">
      <p className="text-center">Get a token</p>
      <sub className="mb-5">Tokens are available for one hour.</sub>
      <form className="container mx-center" onSubmit={submitInfo}>
        <div className="form-group">
          <div className="form-info">
            <span>Username or email</span>
            {errorMsg && <sub className="ml-3">{errorMsg}</sub>}
          </div>
          <input
            name="username"
            className="form-control"
            autoFocus
            onChange={handleInfo}
            required
          />
        </div>
        <div className="form-group">
          <div className="form-info">
            <span>Password</span>
          </div>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={handleInfo}
            required
          />
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
  );
}

export default LoginForm;
