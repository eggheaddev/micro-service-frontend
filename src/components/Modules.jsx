import React from "react";

// Components
import ModuleCard from "./ModuleCard";

function Modules(props) {
  // Filter modules name with the search input.
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
        created={module.created_at}
        repository={module.repository}
      />
    ));
  }

  return (
    <div className="packages-container mb-5">{showModules()}</div>
  );
}

export default Modules;
