import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

// Components
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <Background />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/documentation" component={Documentation} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
