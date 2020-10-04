import React, { Fragment, useState, useEffect } from "react";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchPackages from "../components/SearchPackages";
import AppDescription from "../components/AppDescription";
import Modules from "../components/Modules";

import { getPackages } from "../services/packages";

function Home() {
  const [packages, setPackages] = useState([]);
  const [packageName, setPackageName] = useState("");

  useEffect(_ => {
    getPackages().then(data => setPackages(data.packages));
  }, [])

  const handleInput = input => setPackageName(input);

  return (
    <Fragment>
      <NavBar />

      <div className="home-container mx-center">
        <h1 className="text-center mb-5">A package host for deno</h1>
        <SearchPackages onChange={handleInput} />
      </div>

      {!packageName ? <AppDescription /> : <Modules modules={packages} search={packageName} />}
      <Footer />
    </Fragment>
  );
}

export default Home;
