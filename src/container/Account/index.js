import React from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

import MyAccount from "./MyAccount/MyAccount";
import EditAccount from "./MyAccount/Edit/EditAccount";
import EditNewsletter from "./MyAccount/Edit/EditNewsletter";

import Merchant from "./Merchant/Merchant";

import Info from "./Merchant/Info/Info";
import EditInfo from "./Merchant/EditInfo/EditInfo";

import Subscription from "./Subscription/Subscription";
import EditSub from "./Subscription/SubPage/EditSub";
import SubscriptionInfo from "./Subscription/SubPage/SubscriptionInfo";
import { Helmet } from "react-helmet";

import "./Account.scss";

function Account() {
  return (
    <div className="account px-2">
      <Helmet>
        <title>Harmony | Account</title>
        <meta name="Account" content="Harmony Account" />
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
          </Switch>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default Account;
