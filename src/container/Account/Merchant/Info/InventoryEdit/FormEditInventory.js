import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "../Info.scss";
import "./style.scss";

const FormEditInventory = ({}) => {
  return (
    <Row style={{ marginTop: 22, width: "90%" }}>
      <Col xl={6} xs={12} className="h-100">
        <div className="sign_up_form1">
          <Form.Group>
            <Form.Label>
              Product name <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="First and Last name"
              name="fullname"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Subcategory <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email address"
            />
            {/* <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group>
            <Form.Label>
              SKU <span className="form_required">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Phone number" name="phone" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Barcode <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Business name"
              name="businessName"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Price ($) <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Business name"
              name="businessName"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Cost Price ($) <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Business name"
              name="businessName"
            />
          </Form.Group>
          <Form.Group></Form.Group>
          {/* <Button
                            variant="primary"
                            type="submit"
                            className="submit_btn"
                        >
                            SUBMIT
                        </Button> */}
        </div>
      </Col>
      <Col xl={6} xs={12} className="h-100">
        <div className="sign_up_form1">
          <Form.Group>
            <Form.Label>
              Items in stock <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="First and Last name"
              name="fullname"
            />
          </Form.Group>
          <Row>
            <Col xs={6} xl={6} className="h-100">
              <Form.Group>
                <Form.Label>
                  Low threshold <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First and Last name"
                  name="fullname"
                />
              </Form.Group>
            </Col>
            <Col xs={6} xl={6} className="h-100">
              <Form.Group>
                <Form.Label>
                  High threshold <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First and Last name"
                  name="fullname"
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default FormEditInventory;
