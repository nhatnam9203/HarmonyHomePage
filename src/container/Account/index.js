import React, { lazy } from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Sidebar from "../../components/Sidebar/Sidebar";

import next_blue from "../../assets/images/retailer/next_blue.png";
import prev_blue from "../../assets/images/retailer/prev_blue.png";
import Info from "./Merchant/Info/Info";

import "./Account.scss";

const Merchant = lazy(() => import("./Merchant/Merchant"));
// const Info = lazy(() => import("./Merchant/Info/Info"));
const EditInfo = lazy(() => import("./Merchant/EditInfo/EditInfo"));

const MyAccount = lazy(() => import("./MyAccount/MyAccount"));
const EditAccount = lazy(() => import("./MyAccount/Edit/EditAccount"));
const EditNewsletter = lazy(() => import("./MyAccount/Edit/EditNewsletter"));

const Subscription = lazy(() => import("./Subscription/Subscription"));
const EditSub = lazy(() => import("./Subscription/SubPage/EditSub"));
const SubscriptionInfo = lazy(() =>
  import("./Subscription/SubPage/SubscriptionInfo")
);

function Account() {
  const [isVisibleMenu, setVisbleMenu] = React.useState(true);

  const showMenu = () => {
    setVisbleMenu(true);
  };

  const hideMenu = () => {
    setVisbleMenu(false);
  };

  return (
    <div className="account px-2">
      <Helmet>
        <title>Harmony | Account</title>
        <meta name="description" content="Harmony Account" />
      </Helmet>
      <Row className="pr-0 container-account-right ">
        {!isVisibleMenu && (
          <img
            onClick={showMenu}
            src={next_blue}
            alt={"img"}
            className="img_arrow_hide"
            style={{ left: 0 }}
          />
        )}
        {isVisibleMenu && (
          <Col sm={12} md={3}>
            <Sidebar />
          </Col>
        )}
        <Col
          sm={12}
          md={{
            span: isVisibleMenu ? 9 : 10,
            offset: isVisibleMenu ? 0 : 1,
          }}
          className="pt-2 account_content"
        >
          {isVisibleMenu && (
            <img
              onClick={hideMenu}
              src={prev_blue}
              alt={"img"}
              className="img_arrow_hide img_prev_blue"
            />
          )}
          <Switch>
            <Route
              exact
              path="/account/my-account/edit/newsletter"
              component={EditNewsletter}
            />
            <Route
              exact
              path="/account/my-account/edit/:password"
              component={EditAccount}
            />
            <Route
              exact
              path="/account/my-account/edit"
              component={EditAccount}
            />
            <Route exact path="/account/my-account" component={MyAccount} />

            <Route
              exact
              path="/account/subscription"
              component={Subscription}
            />
            <Route
              exact
              path="/account/subscription/:id"
              component={SubscriptionInfo}
            />

            <Route
              exact
              path="/account/subscription/:id/billing"
              component={EditSub}
            />

            <Route
              exact
              path="/account/subscription/:id/renew"
              render={(props) => <EditSub {...props} isRenew={true} />}
            />

            <Route exact path="/account/merchant" component={Merchant} />
            <Route path="/account/merchant/:id/edit" component={EditInfo} />
            <Route path="/account/merchant/:id" component={Info} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default Account;
