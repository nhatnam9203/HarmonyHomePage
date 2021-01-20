import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateMyAccountAction } from "../../../../actions/userActions";
import { useParams } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import { BiShow, BiHide } from "react-icons/bi";

import * as yup from "yup";

import "./EditAccount.scss";

function EditAccount() {
  const dispatch = useDispatch();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { account } = useSelector((state) => state.myAccount);
  const { firstName, lastName, email } = account;

  const { updateStatus } = useSelector((state) => state.updateMyAccount);

  const { password } = useParams();
  console.log("password :>> ", password);

  const isEditPassword = password !== undefined;

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      IsChangePassword: isEditPassword,

      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(updateMyAccountAction(values));
    },
  });

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit} className="edit_account">
        <Row className="edit_account_form">
          <Col sm={12}>
            <h1>Edit Account Information</h1>
          </Col>
          <Col sm={12} md={6}>
            <h3>Account Information</h3>
            <hr />
            <Form.Group>
              <Form.Label>
                First Name <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                isInvalid={formik.touched.firstName && formik.errors.firstName}
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
                onChange={formik.handleChange}
                checked={formik.values.IsChangePassword}
              />
            </Form.Group>
          </Col>

          <Col sm={12} md={6}>
            {formik.values?.IsChangePassword && (
              <>
                <h3>Change Password</h3>
                <hr />

                <div>
                  <Form.Group>
                    <Form.Label>
                      Current Password <span className="form_required">*</span>
                    </Form.Label>
                    <div className="show_password-container">
                      <Form.Control
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="Current Password"
                        value={formik.values?.oldPassword}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched?.oldPassword &&
                          formik.errors?.oldPassword
                        }
                        name="oldPassword"
                      />
                      <button
                        type="button"
                        className="show_password-btn"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                      >
                        {showCurrentPassword ? (
                          <BiHide size={25} />
                        ) : (
                          <BiShow size={25} />
                        )}
                      </button>
                    </div>
                    <Form.Control.Feedback
                      type="invalid-feedback"
                      className="error-feedback"
                    >
                      {formik.errors?.oldPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      New Password <span className="form_required">*</span>
                    </Form.Label>

                    <div className="show_password-container">
                      <Form.Control
                        placeholder="New Password"
                        type={showNewPassword ? "text" : "password"}
                        value={formik.values?.newPassword}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched?.newPassword &&
                          formik.errors?.newPassword
                        }
                        name="newPassword"
                      />
                      <button
                        type="button"
                        className="show_password-btn"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          <BiHide size={25} />
                        ) : (
                          <BiShow size={25} />
                        )}
                      </button>
                    </div>
                    <PasswordStrengthBar password={formik.values.newPassword} />

                    <Form.Control.Feedback
                      type="invalid-feedback"
                      className="error-feedback"
                    >
                      {formik.errors?.newPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Confirm New Password &nbsp;
                      <span className="form_required">*</span>
                    </Form.Label>
                    <div className="show_password-container">
                      <Form.Control
                        autoComplete="new-password"
                        placeholder="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formik.values?.confirmPassword}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched?.confirmPassword &&
                          formik.errors?.confirmPassword
                        }
                        name="confirmPassword"
                      />
                      <button
                        type="button"
                        className="show_password-btn"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <BiHide size={25} />
                        ) : (
                          <BiShow size={25} />
                        )}
                      </button>
                    </div>
                    <Form.Control.Feedback
                      type="invalid-feedback"
                      className="error-feedback"
                    >
                      {formik.errors.confirmPassword}
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
