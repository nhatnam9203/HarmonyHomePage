import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function General(formik) {
  return (
    <div>
      <div className="app__toggle d-flex justify-content-between toggle_box mt-4">
        <div className="app__toggle-text" aria-label="open">
          <div className="d-flex text-center">
            <span>1</span>
            <h3>General Information</h3>
          </div>
        </div>
      </div>
      <div className="app__content">
        <p className="title">Business Information</p>
        <hr />
        <Row>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                Legal Business Name <span className="form_required">*</span>
                <span className="fade_label">
                  &nbsp; (as show on your income tax return)
                </span>
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
                Doing Business As Name (DBA)
                <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Doing Business As Name"
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
                Federal Tax ID
                <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Federal Tax ID"
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
                DBA Business Address
                <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="DBA Business Address"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default General;
