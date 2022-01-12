import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PageLoader from "./util/PageLoader";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./container/Home/Home";
import PopupAfterLoad from "./components/PopupAfterLoad/PopupAfterLoad";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import "react-toastify/dist/ReactToastify.css";
import PasswordReset from "./components/PassWordReset/PasswordReset";

// # Routes
const SignUp = lazy(() => import("./container/SignUp/SignUp"));
const Shop = lazy(() => import("./container/Shop/Shop"));
const Pricing = lazy(() => import("./container/Pricing/Pricing"));
const Contact = lazy(() => import("./container/Contact/Contact"));
const Devices = lazy(() => import("./container/Devices/Devices"));
const Blogs = lazy(() => import("./container/Blogs/Blogs"));

const ForInvestor = lazy(() => import("./container/ForInvestor/ForInvestor"));
const ForConsumer = lazy(() => import("./container/ForConsumer/ForConsumer"));
const GiftCardTerms = lazy(() =>
  import("./components/GiftCardTerms/GiftCardTerms")
);
const Policy = lazy(() => import("./components/Policy/Policy"));
const Account = lazy(() => import("./container/Account"));
const SignUpInformation = lazy(() => import("./container/SignUpInformation"));

function App() {
  const url = window.location.href;
  const isNotPopup = url.toString().includes("account");

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Toaster position="top-right" reverseOrder={false} />
        <main className="app-main-content">
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home" component={Home} />
              <Route path="/home/pricing" component={Pricing} />
              <Route path="/home/devices" component={Devices} />
              <Route path="/home/blogs" component={Blogs} />
              <Route path="/home/contact" component={Contact} />

              <Route path="/home/sign-up" component={SignUp} />
              <Route path="/home/sign-up-information" component={SignUpInformation} />
              <Route path="/shop" component={Shop} />

              <Route path="/investor" component={ForInvestor} />
              <Route path="/consumer" component={ForConsumer} />
              <Route path="/gift-card-terms" component={GiftCardTerms} />
              <Route
                path="/harmony_consumer_app_privacy_info.html"
                component={Policy}
              />
              <Route
                path="/principal/resetpassword/:id"
                component={PasswordReset}
              />
              <PrivateRoute path="/account" component={Account} />
            </Switch>
          </Suspense>
        </main>
        {/* {!isNotPopup && <PopupAfterLoad />} */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
