import React from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

import MyAccount from "./MyAccount/MyAccount";
import EditAccount from "./MyAccount/Edit/EditAccount";

import Merchant from "./Merchant/Merchant";
import Info from "./Merchant/Info/Info";
import EditInfo from "./Merchant/EditInfo/EditInfo";

import Subscription from "./Subscription/Subscription";
import EditSub from "./Subscription/SubPage/EditSub";

import "./Account.scss";

function Account() {
  return (
    <div className="account">
      <Row className="pt-md-5 pr-0">
        <Col sm={5} md={4} lg={3} className="pr-0">
          <Sidebar />
        </Col>
        <Col sm={7} md={8} lg={9} className="pl-0 pt-2">
          <Switch>
            <Route
              exact
              path="/account/my-account/edit"
              component={EditAccount}
            />
            <Route path="/account/my-account" component={MyAccount} />

            <Route
              exact
              path="/account/subscription"
              component={Subscription}
            />
            <Route path="/account/subscription/billing" component={EditSub} />

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