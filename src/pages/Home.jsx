import React, { Fragment, useState, useEffect } from "react";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchModules from "../components/SearchPackages";
import AppDescription from "../components/AppDescription";
import Modules from "../components/Modules";

import { getModules } from "../services/modules";

function Home() {
  const [modules, setModules] = useState([]);
  const [moduleName, setModuleName] = useState("");

  // Get Modules from API
  useEffect(_ => {
    getModules().then(data => {
      setModules(data.packages);
    });
  }, []);

  // Handle the input info of Search Modules
  const handleInput = input => setModuleName(input);

  // Show the home description or show searching modules
  function toggleInfo() {
    if (!moduleName) {
      return <AppDescription />;
    } else {
      return <Modules modules={modules} search={moduleName} />;
    }
  }

  return (
    <Fragment>
      <NavBar />

      <div className="home-container mx-center">
        <h1 className="text-center mb-5">A package host for deno</h1>
        <SearchModules onChange={handleInput} />
      </div>

      <div className="description-packages-container">{toggleInfo()}</div>
      <Footer />
    </Fragment>
  );
}

export default Home;
