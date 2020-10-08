import React, { Fragment, useEffect, useState } from "react";

// Components
import NavBar from "../components/NavBar";

import { getModule } from "../services/modules";

function Package(props) {
  const link = window.location.href;
  const moduleName = link.split("package/")[1].split("@")[0].replace("-", " ");

  const [module, setModule] = useState({
    name: "",
    description: "",
    created_at: "",
    repository: "",
    author: "",
  })
  const [notFound, setNotFound] = useState(false);

  useEffect(_ => {
    getModule(moduleName).then(data => {
      const { author, created_at, name, description, repository, versions } = data.package ? data.package : data.packages

      setModule({ author: data.packages.author })

        // getModule(moduleName.replace(" ", "-")).then(data => setModule([data.package ? data.package : data.packages]))
      // } else {
      //   setNotFound(true)
      // }
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <h1>Package</h1>
    </Fragment>
  );
}

export default Package;
