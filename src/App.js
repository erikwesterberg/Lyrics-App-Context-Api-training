import React from "react";
import Navbar from "./components/layout/Navbar";
import Index from './components/layout/Index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
