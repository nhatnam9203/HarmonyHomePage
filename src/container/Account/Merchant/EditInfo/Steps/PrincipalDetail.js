import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DriverLicenseImg from "../../../../../assets/images/driver_license.jpg";

function PrincipalDetail(formik) {
  return (
    <Row className="pl-4 mt-4">
      <Col xs={12}>
        <Form.Group>
          <Form.Label>
            Principal Name <span className="form_required">*</span>
          </Form.Label>
        </Form.Group>
      </Col>

      <Col xs={6}>
        <Form.Group>
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
        </Form.Group>
      </Col>
      <Col xs={6}>
        <Form.Group>
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
            Ownership (%) &nbsp;
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
          <Form.Label>Home Phone</Form.Label>
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
            Mobile Phone
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
            Email <span className="form_required">*</span>
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
            Date of Birth <span className="form_required">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="Date of Birth"
            // value={formik.values.password}
            onChange={formik.handleChange}
            // isInvalid={formik.touched.password && formik.errors.password}
            name="birthdate"
          />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>
            Address <span className="form_required">*</span>
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
        <Form.Group>
          <Form.Label>
            Years at This Address <span className="form_required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="5"
            // value={formik.values.password}
            onChange={formik.handleChange}
            // isInvalid={formik.touched.password && formik.errors.password}
            name="password"
          />
        </Form.Group>
      </Col>
      <Col xs={8}>
        <Form.Group>
          <Form.Label>
            Driver License Number <span className="form_required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="5"
            // value={formik.values.password}
            onChange={formik.handleChange}
            // isInvalid={formik.touched.password && formik.errors.password}
            name="password"
          />
        </Form.Group>
      </Col>
      <Col xs={4}>
        <Form.Group>
          <Form.Label>
            State Issued <span className="form_required">*</span>
          </Form.Label>
          <Form.Control as="select" defaultValue="State...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>
            Driver License Picture <span className="form_required">*</span>
          </Form.Label>
          <br />
          <img src={DriverLicenseImg} width="350" heigh="350" alt="img" />

          <p className="btn_upload">Change picture</p>
        </Form.Group>
      </Col>
    </Row>
  );
}

export default PrincipalDetail;
