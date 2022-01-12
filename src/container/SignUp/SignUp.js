import React from "react";
import { Form, Row, Container, Button, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";

import SignUpSuccess from "../../components/SignUpSuccess/SignUpSuccess";
import LoadingIcon from "../../assets/images/loading-icon.gif";

import "./SignUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { requestInfo } from "../../actions/requestInfoActions";
import { Helmet } from "react-helmet";

function SignUp() {
  const dispatch = useDispatch();
  const { loading, info } = useSelector((state) => state.request);

  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const isNotMobile = useMediaQuery({ query: "(min-width: 576px)" });

  const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  const RequestSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is a required field"),
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is a required field"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is a required field"),
    businessName: Yup.string().required("BusinessName is a required field"),
    suggestCallTimeInfo: Yup.object({
      morning: Yup.boolean(),
      afternoon: Yup.boolean(),
      evening: Yup.boolean(),
    }),
  });
  const schema = RequestSchema.test(
    // this test is added additional to any other (build-in) tests
    "myCustomCheckboxTest",
    null, // we'll return error message ourself if needed
    (obj) => {
      // only testing the checkboxes here
      if (
        obj.suggestCallTimeInfo.morning ||
        obj.suggestCallTimeInfo.afternoon ||
        obj.suggestCallTimeInfo.evening
      ) {
        return true; // everything is fine
      }

      return new Yup.ValidationError(
        "Check at least one!",
        null,
        "myCustomFieldName"
      );
    }
  );

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      businessName: "",
      suggestCallTimeInfo: {
        morning: true,
        afternoon: false,
        evening: false,
      },
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const data = values;
      dispatch(requestInfo(data));
    },
  });
  return (
    <div className="sign_up_container">
      <Helmet>
        <title>Harmony | Request Information</title>
        <meta name="Sign Up" content="Harmony Sign Up" />
      </Helmet>
      <Container>
        <Row className="sign_up_content mx-0">
          <Col className="sign_up_left" sm={12} lg={6}>
            <h1>REQUEST INFO</h1>
            <hr />

            <h4> {`Let's get started !`}</h4>
            <h3>
              HARMONY POS
              {/* <br /> SALON POS SYSTEM */}
            </h3>
            <p>Made for salon owners by salon owners</p>
            <hr />
            <p>
              Give us a few details about yourself and {`we'll`} contact you
              with more information about Harmony Salon POS system.
            </p>
            <h4 className="py-2">Call us</h4>
            <h3>800-531-3126</h3>
            <h3>813-534-0055</h3>
          </Col>

          <Col className="sign_up_form-container" sm={12} lg={6}>
            {info ? (
              <SignUpSuccess />
            ) : (
              <div className="sign_up_form">
                <div className={`p-4 ${loading && "loading_signup"}`}>
                  <h4>REQUEST MORE INFORMATION</h4>
                  <p>
                    Give us a few details about yourself and {`we'll`} will
                    contact you with more information about Harmony Salon POS
                    system.
                  </p>

                  {loading && (
                    <img src={LoadingIcon} className="loading_gif" alt="img" />
                  )}
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                      <Form.Label>
                        Full name <span className="form_required">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First and Last name"
                        name="fullname"
                        isInvalid={
                          formik.touched.fullname && formik.errors.fullname
                        }
                        onChange={formik.handleChange}
                        value={formik.values.fullname}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.fullname}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Email <span className="form_required">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email address"
                        isInvalid={formik.touched.email && formik.errors.email}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Phone number <span className="form_required">*</span>
                      </Form.Label>
                      <Form.Control
                        // defaultValue="+"
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                        isInvalid={formik.touched.phone && formik.errors.phone}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Business name <span className="form_required">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Business name"
                        name="businessName"
                        isInvalid={
                          formik.touched.businessName &&
                          formik.errors.businessName
                        }
                        onChange={formik.handleChange}
                        value={formik.values.businessName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.businessName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Best time to Call you &nbsp;
                        <span className="form_required">*</span>
                      </Form.Label>
                      <div className="form_checkbox">
                        {isNotMobile ? (
                          <Form.Check
                            type="checkbox"
                            label="Morning"
                            name={`suggestCallTimeInfo.morning`}
                            defaultChecked={true}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.myCustomFieldName}
                            feedback={formik.errors.myCustomFieldName}
                          />
                        ) : (
                          <Form.Check
                            type="checkbox"
                            label="Morning"
                            defaultChecked={true}
                            name={`suggestCallTimeInfo.morning`}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.myCustomFieldName}
                          />
                        )}
                        <Form.Check
                          type="checkbox"
                          label="Afternoon"
                          name={`suggestCallTimeInfo.afternoon`}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.myCustomFieldName}
                        />
                        {isMobile ? (
                          <Form.Check
                            type="checkbox"
                            label="Evening"
                            name={`suggestCallTimeInfo.evening`}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.myCustomFieldName}
                            feedback={formik.errors.myCustomFieldName}
                          />
                        ) : (
                          <Form.Check
                            type="checkbox"
                            label="Evening"
                            name={`suggestCallTimeInfo.evening`}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.myCustomFieldName}
                          />
                        )}
                      </div>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="submit_btn"
                      disabled={loading}
                    >
                      SUBMIT
                    </Button>
                  </Form>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
