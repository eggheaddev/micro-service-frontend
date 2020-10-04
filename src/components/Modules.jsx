import React, { useState, useEffect } from "react";

// Components
import ModuleCard from "./ModuleCard";

function Modules(props) {
  const [modules, setModules] = useState([]);

  useEffect(_ => {
    setModules(
      props.modules.filter(module =>
        module.name.toLowerCase().match(props.search.toLowerCase()))
    );
  }, []);
  console.log(modules);

  return (
    <div className="packages-container container mb-5">
      {modules.map(module => (
        <ModuleCard
          key={module.id}
          title={module.name}
          description={module.description}
          version={module.versions[module.versions.length - 1]}
          author={module.author}
        />
      ))}
    </div>
  );
}

export default Modules;
