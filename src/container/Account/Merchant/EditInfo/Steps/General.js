import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function General(formik) {
  return (
    <div>
      <div className="app__toggle d-flex justify-content-between toggle_box mt-3">
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
        <Row className="pl-4">
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
                Doing Business As Name (DBA) &nbsp;
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
                Federal Tax ID &nbsp;
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
                DBA Business Address &nbsp;
                <span className="form_required">*</span>
                <span className="fade_label"> ( no P.O. Box)</span>
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
          <Col xs={4}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="City"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="city"
              />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="formGridState">
              <Form.Control as="select" defaultValue="State...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Zip"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="city"
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Label>
              Business Phone Number &nbsp;
              <span className="form_required">*</span>
            </Form.Label>
            <Row>
              <Col xs="auto" className="my-1">
                <Form.Control as="select" className="mr-sm-2 phone_select">
                  <option value="+1">+1</option>
                  <option value="+84">+84</option>
                </Form.Control>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    // value={formik.values.password}
                    onChange={formik.handleChange}
                    // isInvalid={formik.touched.password && formik.errors.password}
                    name="city"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Form.Group>
              <Form.Label>
                Contact is Email Address &nbsp;
                <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>
        </Row>

        <p className="title mt-3">Representative Information</p>
        <hr />
        <Row className="pl-4">
          <Col xs={12}>
            <Form.Label>
              Contact Name <span className="form_required">*</span>
            </Form.Label>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="First Name"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Last Name"
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
                Title/Position &nbsp;
                <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner"
                // value={formik.values.password}
                onChange={formik.handleChange}
                // isInvalid={formik.touched.password && formik.errors.password}
                name="password"
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Label>
              Contact Phone Number &nbsp;
              <span className="form_required">*</span>
            </Form.Label>
            <Row>
              <Col xs="auto" className="my-1">
                <Form.Control as="select" className="mr-sm-2 phone_select">
                  <option value="+1">+1</option>
                  <option value="+84">+84</option>
                </Form.Control>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    // value={formik.values.password}
                    onChange={formik.handleChange}
                    // isInvalid={formik.touched.password && formik.errors.password}
                    name="city"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default General;
