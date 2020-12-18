import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import BankVoid from "../../../../../assets/images/bank_void.png";

function Bank(formik) {
  return (
    <div>
      <div className="app__toggle d-flex justify-content-between toggle_box mt-4">
        <div className="app__toggle-text" aria-label="open">
          <div className="d-flex text-center">
            <span>2</span>
            <h3>Bank Information</h3>
          </div>
        </div>
      </div>
      <div className="app__content">
        <Row className="pl-4">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                Bank Name <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Legal Business Name"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                Bank Name <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Legal Business Name"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                ABA Routing Number <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Legal Business Name"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                Checking Account Number (DDA){" "}
                <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Legal Business Name"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                Void Check <span className="form_required">*</span>
              </Form.Label>
              <br />
              <img src={BankVoid} />

              <p className="btn_upload">Change picture</p>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Bank;
