import React, { Fragment, useState } from "react";

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

      {!packageMatch ? <AppDescription /> : <Packages search={packageMatch} />}
      <Footer />
    </Fragment>
  );
}

function Packages(props) {
  return <span>{props.search}</span>;
}

// function PackageCard(props) {
//   return <span>package</span>;
// }

export default Home;
