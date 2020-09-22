import React, { Fragment } from "react";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchPackages from "../components/SearchPackages";
import AppDescription from "../components/AppDescription";

function Home() {
  return (
    <Fragment>
      <NavBar />

      <div className="container home mx-center">
        <h1 className="text-center">A package host for deno</h1>
        <SearchPackages />
      </div>

      {true ? <AppDescription /> : <h1>Packages</h1>}
      <Footer />
    </Fragment>
  );
}

export default Home;
