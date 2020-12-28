import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateMyAccountActions } from "../../../../actions/userActions";
import { useParams } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";

import * as yup from "yup";

import "./EditAccount.scss";

function EditAccount(props) {
  const dispatch = useDispatch();

  const {
    account: { contactInfo },
  } = useSelector((state) => state.myAccount);
  const { firstName, lastName, email } = contactInfo;

  const { updateStatus } = useSelector((state) => state.updateMyAccount);

  const isPass = useParams();

  console.log("useParams", isPass);
  // eslint-disable-next-line no-unneeded-ternary
  const passwordTab = isPass ? true : false;

  console.log("passwordTab", passwordTab);

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      IsChangePassword: passwordTab,

      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateMyAccountActions(values));
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                controlId="changePasswordCheckbox"
                className="edit_account_checkbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Change Password"
                  name={`IsChangePassword`}
                  onClick={formik.handleChange}
                />
              </Form.Group>
            </div>
          </Col>

          <Col xs={6}>
            {formik.values?.IsChangePassword && (
              <>
                <h3>Change Password</h3>
                <hr />

                <div>
                  <Form.Group>
                    <Form.Label>
                      Current Password <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Current Password"
                      value={formik.values?.oldPassword}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched?.oldPassword &&
                        formik.errors?.oldPassword
                      }
                      name={`passwords.oldPassword`}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors?.oldPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      New Password <span className="form_required">*</span>
                    </Form.Label>

                    <Form.Control
                      placeholder="New Password"
                      type="password"
                      value={formik.values?.newPassword}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched?.newPassword &&
                        formik.errors?.newPassword
                      }
                      name={`passwords.newPassword`}
                    />
                    <PasswordStrengthBar
                      password={formik.values?.newPassword}
                    />

                    <Form.Control.Feedback type="invalid">
                      {formik.errors?.newPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Confirm New Password &nbsp;
                      <span className="form_required">*</span>
                    </Form.Label>
                    <Form.Control
                      autoComplete="new-password"
                      placeholder="Confirm Password"
                      type="password"
                      value={formik.values?.confirmPassword}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched?.confirmPassword &&
                        formik.errors?.confirmPassword
                      }
                      name={`passwords.confirmPassword`}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors?.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
              </>
            )}
          </Col>

          <Col>
            {updateStatus ? (
              <Button type="submit" className="submit_btn mt-3" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Button type="submit" className="submit_btn mt-3">
                Save
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default EditAccount;

const userSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),

  oldPassword: yup.string().when("IsChangePassword", {
    is: true,
    then: yup.string().required("Current Password is required"),
  }),
  newPassword: yup.string().when("IsChangePassword", {
    is: true,
    then: yup.string().required("New Password is required"),
  }),
  confirmPassword: yup.string().when("IsChangePassword", {
    is: true,
    then: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  }),
});
