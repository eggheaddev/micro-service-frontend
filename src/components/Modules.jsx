import React from "react";

// Components
import ModuleCard from "./ModuleCard";

function Modules(props) {
  const modules = props.modules.filter(module =>
    module.name.toLowerCase().match(props.search.toLowerCase())
  );

  function showModules() {
    return modules.map(module => (
      <ModuleCard
        key={module.name}
        title={module.name}
        description={module.description}
        version={module.versions[module.versions.length - 1]}
        author={module.author}
      />
    ));
  }

  return (
    <div className="packages-container container mb-5">{showModules()}</div>
  );
}

export default Modules;
