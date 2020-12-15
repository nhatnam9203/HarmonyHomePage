import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

import MyAccount from "./MyAccount/MyAccount";
import Subscription from "./Subscription/Subscription";
import Merchant from "./Merchant/Merchant";
import Info from "./Merchant/Info/Info";

import "./Account.scss";

function Account() {
  return (
    <div className="account">
      <Row>
        <Col sm={5} md={4} lg={3} className="pr-0">
          <Sidebar />
        </Col>
        <Col sm={7} md={8} lg={9}>
          <Switch>
            <Route path="/account/my-account" component={MyAccount} />
            <Route path="/account/subscription" component={Subscription} />

            <Route exact path="/account/merchant" component={Merchant} />
            <Route path="/account/merchant/:id" component={Info} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default Account;
