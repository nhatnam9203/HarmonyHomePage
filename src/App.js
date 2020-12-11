import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// # Routes
import Home from "./container/Home/Home";
import SignUp from "./container/SignUp/SignUp";
import Shop from "./container/Shop/Shop";
import Pricing from "./container/Pricing/Pricing";
import Application from "./container/Application/Application";
import About from "./container/About/About";
import Contact from "./container/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app-main-content">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/shop" component={Shop} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/application" component={Application} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
