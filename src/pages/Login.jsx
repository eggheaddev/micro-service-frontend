import React, { Fragment, useState } from "react";

// Components
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Token from "../components/Token"
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



export default Login;
