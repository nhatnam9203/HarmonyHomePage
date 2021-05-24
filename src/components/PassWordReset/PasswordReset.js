import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import * as Yup from "yup";
import { BiShow, BiHide } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../actions/userActions";

export default function PasswordReset() {
  const dispatch = useDispatch();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading } = useSelector((state) => state.resetPassword);

  const { id } = useParams();
  const token = window.location?.search || "";

  const passwordReserSchema = Yup.object().shape({
    newPassword: Yup.string().required("New Password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: passwordReserSchema,
    onSubmit: (values) => {
      const data = values;
      delete data.confirmNewPassword;
      dispatch(resetPasswordAction(id, token, data));
    },
  });
  return (
    <main className="passwordReset">
      <Helmet>
        <title>Harmony | Password Reset</title>
        <meta name="Password Resetr" content="Harmony Password Reset" />
      </Helmet>
      <Container>
        <h1 className="passwordReset__title">Password Reset</h1>
        <h3 className="passwordReset__subtitle">
          Please fill in the fields below
        </h3>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>
              New Password <span className="form_required">*</span>
            </Form.Label>
            <InputGroup>
              <FormControl
                // className="border-right-0"
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                isInvalid={
                  formik.touched.newPassword && formik.errors.newPassword
                }
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
              <InputGroup.Append className="passwordReset__show-password--container">
                <button
                  type="button"
                  className="passwordReset__show-password"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <BiHide size={25} />
                  ) : (
                    <BiShow size={25} />
                  )}
                </button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {formik.errors.newPassword}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Confirm New Password <span className="form_required">*</span>
            </Form.Label>
            <InputGroup>
              <FormControl
                // className="border-right-0"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                name="confirmNewPassword"
                isInvalid={
                  formik.touched.confirmNewPassword &&
                  formik.errors.confirmNewPassword
                }
                onChange={formik.handleChange}
                value={formik.values.confirmNewPassword}
              />
              <InputGroup.Append className="passwordReset__show-password--container">
                <button
                  type="button"
                  className="passwordReset__show-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <BiHide size={25} />
                  ) : (
                    <BiShow size={25} />
                  )}
                </button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmNewPassword}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <div className="">
            {loading ? (
              <Button className="submit_btn text-center" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="loadingBtn">Loading...</span>
              </Button>
            ) : (
              <Button
                type="submit"
                className="submit_btn text-center font-weight-bold"
              >
                Submit
              </Button>
            )}
          </div>
        </Form>
      </Container>
    </main>
  );
}
