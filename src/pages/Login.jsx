import React, { Fragment, useState } from "react";

// Components
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

function Login() {
  const [token, setToken] = useState("");

  const getToken = token => setToken(token);

  return (
    <Fragment>
      <NavBar />
      {token ? <Token token={token} /> : <LoginForm onChange={getToken} />}
      <Footer />
    </Fragment>
  );
}

function Token(props) {
  return (
    <Fragment>
      <div className="token-container">
        <p>Copy your token below, paste it to our cli app and upload a module</p>
        <span className="show-token mt-4 mb-5">{props.token}</span>
      </div>
    </Fragment>
  );
}

export default Login;
