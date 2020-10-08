import React, { Fragment } from "react";

// Components
import NavBar from "../components/NavBar";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

function Register() {
  return (
    <Fragment>
      <NavBar />
      <RegisterForm />
      <Footer />
    </Fragment>
  );
}

export default Register;
