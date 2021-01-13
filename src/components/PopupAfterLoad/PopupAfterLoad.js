import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useCookies } from "react-cookie";
import moment from "moment";
import { Col, Form, Row, Button } from "react-bootstrap";
import LoadingIcon from "../../assets/images/loading-icon.gif";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import * as Yup from "yup";
import { useFormik } from "formik";
import { requestInfo } from "../../api";
import "./PopupAfterLoad.scss";
import toast from "react-hot-toast";

export default function PopupAfterLoad() {
  const [show, setShow] = useState(false);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (!cookies?.time) {
      setCookie("time", moment(new Date()));
      setCookie("timeExpired", moment(new Date()).month(1));
      setTimeout(() => {
        setShow(true);
      }, 3000);
    }
    // else {
    //   console.log(moment(cookies?.timeExpired));
    //   console.log(moment(cookies?.time));
    //   console.log(
    //     "cookie :>> ",
    //     moment(cookies?.time) > moment(cookies?.timeExpired)
    //   );
    // }
    if (moment(cookies?.time) > moment(cookies?.timeExpired)) {
      setShow(true);
      setCookie("time", moment(new Date()));
      setCookie("timeExpired", moment(new Date()).month(1));
    }
  }, []);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.request);

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
      dispatch(requestInfo(...data));
    },
  });

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="package-modal"
      centered
      dialogClassName="container "
      className=""
    >
      <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
      <Modal.Body className="">
        <Row>
          <Col xl={6} xs={12} className="popup__bodyLeft">
            <h2 className="popup__bodyLeft-start">Let's get started !</h2>
            <h1 className="popup__bodyLeft-title text-uppercase">
              HarmonyPay Salon POS system
            </h1>
            <h4 className="popup__bodyLeft-subtitle">
              "Made for salon owners by salon owners"
            </h4>
            <iframe
              className="mb-3 height__video"
              title="HarmonyPay Salon POS"
              width="100%"
              src="https://www.youtube.com/embed/UgJuD4ZC1Lk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="popup__bodyLeft-text">
              We offer a wide range of softwares that fit your vision and
              budget. Answer a few questions and we will give you a quote for
              our solutions. Besides, you will have the opportunity to get a
              free set of HarmonyPay POS in our lucky draw.
            </p>
            <ul className="popup__bodyLeft-list">
              <li className="popup__bodyLeft-list--item">
                Begin from 2/2020, we will have live stream weekly drawing.
              </li>
              <li className="popup__bodyLeft-list--item">
                The reward included a mPOP and a PAX S300 Terminal.
              </li>
            </ul>
          </Col>
          <Col xl={6} xs={12} className="h-100">
            <div className="sign_up_form">
              <div
                className={`sign_up_form-container ${
                  loading && "loading_signup"
                }`}
              >
                <h4>REQUEST MORE INFORMATION</h4>
                <p>
                  Give us a few details about yourself and {`we'll`} will
                  contact you with more information about HarmonyPay Salon POS
                  system.
                </p>

                {loading && <img src={LoadingIcon} className="loading_gif" />}
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
                  {/* {loading ? (
                      <Button
                        className="submit_btn text-center font-weight-bold"
                        disabled
                      >
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
                      <Button
                        variant="primary"
                        type="submit"
                        className="submit_btn"
                      >
                        SUBMIT
                      </Button>
                    )} */}

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
              <button onClick={() => toast.success("sssssss")}> toast</button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
