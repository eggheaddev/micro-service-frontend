import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [userInfo, setUserInfo] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [result, setResult] = useState({
    msg: "",
    user: false,
    password: false,
  });

  function handleInfo(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function submitInfo(event) {
    event.preventDefault();
    let token = "";
    let err = false
    userInfo.usernameOrEmail === "elpepe" ? token = "skdjfjlks2342423dsf" : err = true
    if (token) props.onChange(token);
    if (err) {
      setResult({ msg: "Error message", password: true, user: true });
      setTimeout(_ => setResult({ msg: "", user: false }), 2500);
    }
  }

  return (
    <div className="user-form form-container mx-center">
      <p className="text-center">Get a token</p>
      <sub className="mb-5">Tokens are available for one hour.</sub>
      <form className="container mx-center" onSubmit={submitInfo}>
        <div className="form-group">
          <div className="form-info">
            <span>Username or email</span>
            {result.user && <sub className="ml-3">{result.msg}</sub>}
          </div>
          <input
            name="usernameOrEmail"
            className="form-control"
            autoFocus
            onChange={handleInfo}
            required
          />
        </div>
        <div className="form-group">
          <div className="form-info">
            <span>Password</span>
            {result.password && <sub className="ml-3">{result.msg}</sub>}
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
