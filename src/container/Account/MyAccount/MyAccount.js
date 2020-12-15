import React from "react";
import { Row, Col } from "react-bootstrap";

import "./MyAccount.scss";

function MyAccount() {
  return (
    <Row className="my_account">
      <Col xs={12}>
        <h1>My Account</h1>
      </Col>
      <Col xs={12}>
        <h3 className="mb-0">Account Information</h3>
        <hr />
      </Col>
      <Col xs={6}>
        <h3>Contact Information</h3>
        <p>William Duong</p>
        <p>duongwilliam@gmail.com</p>
        <div className="pt-3">
          <button className="text_btn edit_btn">Edit</button>
          <button className="text_btn pl-3">Change Password</button>
        </div>
      </Col>
      <Col xs={6}>
        <h3>Newsletter</h3>
        <p>You aren't subscribed to our newsletter.</p>
        <button className="text_btn pt-3">Edit</button>
      </Col>
    </Row>
  );
}

export default MyAccount;
