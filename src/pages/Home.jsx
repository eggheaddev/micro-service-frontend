import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchPackages from "../components/SearchPackages";
import AppDescription from "../components/AppDescription";

function Home() {
  const [packageMatch, setPackageMatch] = useState("");

  const handleInput = packageMatch => setPackageMatch(packageMatch);

  return (
    <Fragment>
      <NavBar />

      <div className="home-container mx-center">
        <h1 className="text-center mb-5">A package host for deno</h1>
        <SearchPackages onChange={handleInput} />
      </div>

      {!packageMatch ? <AppDescription /> : <Modules search={packageMatch} />}
      <Footer />
    </Fragment>
  );
}

function Modules (props) {
  const modules = [
    {
      title: "Trex",
      description: "Ajo",
      version: "1.0.0",
    },
    {
      title: "Yolo",
      description: "perro",
      version: "0.0.5",
    },
    {
      title: "Perro",
      description: "El pepe",
      version: "1.0.5"
    }
  ];

  return (
    <div className="packages-container container mb-5">
      {modules.map(module => (
        <ModuleCard
          title={module.title}
          description={module.description}
          version={module.version}
        />
      ))}
    </div>
  );
}

function ModuleCard(props) {
  return (
    <Link
      to={`/package/${props.title}@${props.version}v`}
      className="package-link"
    >
      <div className="package-card">
        <div className="package-title">
          <h1 className="mr-3">{props.title}</h1>
          <span>{props.version}v</span>
        </div>
        <span>{props.description}</span>
      </div>
    </Link>
  );
}

export default Home;
