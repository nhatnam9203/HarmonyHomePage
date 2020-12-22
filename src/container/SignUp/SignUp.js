import React from "react";
import { Form, Row, Container, Button, Col } from "react-bootstrap";

import SignUpSuccess from "../../components/SignUpSuccess/SignUpSuccess";

import "./SignUp.scss";

function SignUp() {
  return (
    <div className="sign_up_container">
      <Container>
        <Row className="sign_up_content mx-0">
          <Col className="sign_up_left" sm={12} lg={6}>
            <h1>REQUEST INFO</h1>
            <hr />

            <h4> {`Let's get started !`}</h4>
            <h3>
              HARMONYPAY <br /> SALON POS SYSTEM
            </h3>
            <p>Made for salon owners by salon owners</p>
            <hr />
            <p>
              Give us a few details about yourself and {`we'll`} contact you
              with more information about HarmonyPay Salon POS system.
            </p>

            <h4 className="py-2">Call us</h4>
            <h3>800-531-3126</h3>
          </Col>

          <Col sm={12} lg={6}>
            <SignUpSuccess />
            {/* <div className="sign_up_form"> */}
            {/* <div className="p-4">
                <h4>REQUEST MORE INFORMATION</h4>
                <p>
                  Give us a few details about yourself and {`we'll`} will
                  contact you with more information about HarmonyPay Salon POS
                  system.
                </p>

                <Form>
                  <Form.Group>
                    <Form.Label>
                      Full name <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="First and Last name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Email <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email address" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Phone number <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control type="number" placeholder="Phone number" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Business name <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Business name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Best time to Call you &nbsp;
                      <span className="form_required">*</span>
                    </Form.Label>
                    <div className="form_checkbox">
                      <Form.Check type="checkbox" label="Morning" checked />
                      <Form.Check type="checkbox" label="Afternoon" />
                      <Form.Check type="checkbox" label="Evening" />
                    </div>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="submit_btn"
                  >
                    SUBMIT
                  </Button>
                </Form>
              </div> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
