import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// # Routes
import Home from "./container/Home/Home";
// import Feature from "./container/Feature/Feature";
// import Shop from "./container/Shop/Shop";
import Pricing from "./container/Pricing/Pricing";
// import Application from "./container/Application/Application";
// import About from "./container/About/About";
import Contact from "./container/Contact/Contact";
import Devices from "./container/Devices/Devices";
import ForInvestor from "./container/ForInvestor/ForInvestor";
import ForConsumer from "./container/ForConsumer/ForConsumer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app-main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/features" component={Feature} /> */}
            {/* <Route path="/shop" component={Shop} /> */}
            <Route path="/pricing" component={Pricing} />
            <Route path="/devices" component={Devices} />
            {/* <Route path="/application" component={Application} /> */}
            {/* <Route path="/about" component={About} /> */}
            <Route path="/contact" component={Contact} />
            <Route path="/investor" component={ForInvestor} />
            <Route path="/consumer" component={ForConsumer} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
