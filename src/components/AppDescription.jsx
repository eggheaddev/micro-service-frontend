import React from "react";

function AppDescription() {
  return (
    <div className="home-description container mx-center">
      <h3 className="mb-3">Secure, permanent & inmutable modules</h3>
      <span>
        Hostify is a hosting service for Deno packages.Here you can upload your
        modules which will be save permanently and will never be deleted. This
        will avoid problems in future projects that depend on certain modules.
      </span>
    </div>
  );
}

export default AppDescription;
