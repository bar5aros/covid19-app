import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
// import FetchData from "./components/Fetch/FetchData";
import Home from "./pages/Home";
import Turkey from "./pages/Turkey";
import Italy from "./pages/Italy";
import Germany from "./pages/Germany";
import UnitedStates from "./pages/UnitedStates";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Turkey" component={Turkey} />
        <Route path="/Italy" component={Italy} />
        <Route path="/Germany" component={Germany} />
        <Route path="/UnitedStates" component={UnitedStates} />
      </Switch>
    </Router>
  );
}

export default App;
