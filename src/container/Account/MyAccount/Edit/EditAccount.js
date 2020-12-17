import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

import "./EditAccount.scss";

function EditAccount() {
  const [checkboxPassword, setCheckboxPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("values", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit} className="edit_account">
        <Row className="edit_account_form">
          <Col xs={12}>
            <h1>Edit Account Information</h1>
          </Col>
          <Col xs={6}>
            <h3>Account Information</h3>
            <hr />

            <div>
              <Form.Group>
                <Form.Label>
                  First Name <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  name="firstName"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  Last Name <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  placeholder="Last Name"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.lastName && formik.errors.lastName}
                  name="lastName"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  Email <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  placeholder="Email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.email && formik.errors.email}
                  name="email"
                />
              </Form.Group>
              <Form.Group
                controlId="changePasswordCheckbox"
                className="edit_account_checkbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Change Password"
                  onClick={() => setCheckboxPassword(!checkboxPassword)}
                />
              </Form.Group>
            </div>
          </Col>

          <Col xs={6}>
            {checkboxPassword && (
              <>
                <h3>Change Password</h3>
                <hr />

                <div>
                  <Form.Group>
                    <Form.Label>
                      Current Password <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Current Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                      name="password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      New Password <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control
                      placeholder="New Password"
                      type="text"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.newPassword && formik.errors.newPassword
                      }
                      name="newPassword"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Confirm New Password &nbsp;
                      <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control
                      placeholder="Confirm Password"
                      type="password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      name="confirmPassword"
                    />
                  </Form.Group>
                </div>
              </>
            )}
          </Col>

          <Col>
            <Button type="submit" className="submit_btn mt-3">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default EditAccount;

const userSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  newPassword: yup.string().required(),
  confirmPassword: yup.string().required(),
});
