import React from "react";
import { Modal, Spinner, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordAction } from "../../actions/userActions";

export default function ForgotPassword({ showForgot, setShowForgot }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.forgotPassword);

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is a required field"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      const data = values;
      dispatch(forgotPasswordAction(data));
    },
  });

  return (
    <Modal
      show={showForgot}
      onHide={() => setShowForgot(false)}
      aria-labelledby="package-modal"
      centered
      className="modal-sign-in"
    >
      <Modal.Header className="border-0 pb-0" closeButton>
        <div className="border-0 d-flex flex-column align-items-center justify-content-center pt-3 pl-3 h-100">
          <Modal.Title className="sign_in__title text-center font-weight-bold mb-2">
            Forgot Password
          </Modal.Title>
          <p className="sign_in__text text-center mb-0">
            Enter your registered email, we will send you a password reset link
          </p>
        </div>
      </Modal.Header>
      <Modal.Body className="modal-body-signin p-4 h-100 border-0">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>
              Email <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              isInvalid={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="signin__container-btn d-flex justify-content-between align-items-center">
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

            <Link
              to={"#"}
              onClick={() => setShowForgot(false)}
              className="sign_in_link"
            >
              Back to sign in
            </Link>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
