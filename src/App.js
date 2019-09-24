import React from "react";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { ContextController } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ContextController>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
          </Switch>
        </div>
      </Router>
    </ContextController>
  );
};

export default App;
