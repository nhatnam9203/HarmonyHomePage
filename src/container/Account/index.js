import React, { lazy } from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Sidebar from "../../components/Sidebar/Sidebar";

import "./Account.scss";

const Merchant = lazy(() => import("./Merchant/Merchant"));
const Info = lazy(() => import("./Merchant/Info/Info"));
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
  return (
    <div className="account px-2">
      <Helmet>
        <title>Harmony | Account</title>
        <meta name="description" content="Harmony Account" />
      </Helmet>
      <Row className="pr-0">
        <Col sm={12} md={4} lg={3} className="">
          <Sidebar />
        </Col>
        <Col sm={12} md={8} lg={9} className="pt-2 account_content">
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
