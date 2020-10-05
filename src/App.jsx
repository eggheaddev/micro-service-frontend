import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Documentation from "./pages/Documentation";
import Package from "./pages/Package";
import NotFound from "./pages/NotFound";

// Components
import Background from "./components/Background";

function App() {
  const [modules, setModules] = useState([]);
  const getModules = modules => setModules(modules);

  return (
    <Router>
      <Background />
      <Switch>
        <Route path="/" exact>
          <Home getModules={getModules} />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/documentation" component={Documentation} />
        {modules.map(module => (
          <Route
            path={`/package/${module.name.replace(/\s/g, "-")}@${module.versions[module.versions.length - 1]}v`}
            component={Package}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
