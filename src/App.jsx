import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./pages/Pages";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {Pages.map((page) => (
          <Route path={page.path} component={page.component} />
        ))}
        {/* <Route path="/Turkey" component={Turkey} />
        <Route path="/Italy" component={Italy} />
        <Route path="/Germany" component={Germany} />
        <Route path="/UnitedStates" component={UnitedStates} /> */}
      </Switch>
    </Router>
  );
}

export default App;
