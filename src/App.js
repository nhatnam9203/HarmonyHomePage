import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// # Routes
import Home from "./container/Home/Home";
import SignUp from "./container/SignUp/SignUp";
import Shop from "./container/Shop/Shop";
import Pricing from "./container/Pricing/Pricing";
import Contact from "./container/Contact/Contact";
import Devices from "./container/Devices/Devices";
import ForInvestor from "./container/ForInvestor/ForInvestor";
import ForConsumer from "./container/ForConsumer/ForConsumer";
import GiftCardTerms from "./components/GiftCardTerms/GiftCardTerms";

import Account from "./container/Account";

import PrivateRoute from "./routes/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Policy from "./components/Policy/Policy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <main className="app-main-content">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/shop" component={Shop} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/devices" component={Devices} />
            <Route path="/contact" component={Contact} />
            <Route path="/investor" component={ForInvestor} />
            <Route path="/consumer" component={ForConsumer} />
            <Route path="/gift-card-terms" component={GiftCardTerms} />
            <Route
              path="/harmony_consumer_app_privacy_info.html"
              component={Policy}
            />
            <PrivateRoute path="/account" component={Account} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
