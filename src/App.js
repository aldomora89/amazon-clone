import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
