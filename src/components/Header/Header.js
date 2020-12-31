import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  NavItem,
  Button,
  Spinner,
} from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userLogin } from "../../actions/userActions";

import Flags from "country-flag-icons/react/3x2";
import Logo from "../../assets/images/logo_blue.png";
import Modal from "react-bootstrap/Modal";
import LoginIcon from "../../assets/images/login_icon2.png";

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setShow(false);
    }
  }, [user]);

  const handleLanguageChange = (lang) => {
    i18n.use(initReactI18next).init({ lng: lang });
  };

  const loginUserSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginUserSchema,
    onSubmit: (values) => {
      const data = values;
      dispatch(userLogin(data));
    },
  });

  return (
    <>
      <div className="text-right align-middle top_header pt-1">
        <Container>
          <Row className="justify-content-end">
            <Col className="pt-1 mx-sm-1 pr-0 pl-0">
              {user ? (
                <div
                  className="singin"
                  onClick={() => history.push("/account/my-account")}
                >
                  <img src={LoginIcon} width={21} className="mr-2" />
                  <span className="text-white">Manage Account</span>
                </div>
              ) : (
                <div className="singin" onClick={() => setShow(true)}>
                  <img src={LoginIcon} width={21} className="mr-2" />
                  <span className="text-white">Sign in</span>
                </div>
              )}
            </Col>
            <Col xs="auto" className="pt-1 mx-sm-1 pr-0">
              <div className="telephone">
                <FiPhoneCall size={21} />
                <a href="tel:800-531-3126">800-531-3126</a>
              </div>
            </Col>
            <Col xs="auto" className="pt-1 mx-sm-2">
              FAG
            </Col>
            <Col xs="auto" className="px-0">
              {i18n.language === "en" ? (
                <Flags.US title="United States" className="flag" />
              ) : (
                <Flags.VN title="Vietnamese" className="flag" />
              )}
            </Col>
            <Col xs="auto" className="px-0 pb-1">
              <Form.Control
                size="sm"
                as="select"
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="vn">VN</option>
              </Form.Control>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        expanded={expanded}
        expand="xl"
        className="nav_header shadow-sm bg-white"
        sticky="top"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/home">
            <img src={Logo} className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() =>
              setTimeout(() => {
                setExpanded(!expanded);
              }, 150)
            }
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavItem
                onClick={() => setExpanded(false)}
                className="py-md-2 py-xs-4"
              >
                <NavLink
                  to="/home"
                  className="nav-NavLink"
                  activeClassName="active_link"
                  exact
                >
                  {t("Home")}
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setExpanded(false)} className="py-md-2">
                <NavLink
                  to="/pricing"
                  className="nav-NavLink"
                  activeClassName="active_link"
                >
                  {t("Pricing")}
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setExpanded(false)} className="py-md-2">
                <NavLink
                  to="/devices"
                  className="nav-NavLink"
                  activeClassName="active_link"
                >
                  {t("Devices")}
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setExpanded(false)} className="py-md-2">
                <NavLink
                  to="/contact"
                  className="nav-NavLink"
                  activeClassName="active_link"
                >
                  {t("Contact")}
                </NavLink>
              </NavItem>
            </Nav>

            <Nav className="align-items-xl-end">
              <NavItem onClick={() => setExpanded(false)} className="py-md-2">
                <NavLink
                  exact
                  to="/home"
                  className="nav-NavLink merchant_nav"
                  activeClassName="active_link"
                >
                  FOR MERCHANT
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setExpanded(false)} className="py-md-2">
                <NavLink
                  to="/investor"
                  className="nav-NavLink"
                  activeClassName="active_link"
                >
                  FOR INVESTOR
                </NavLink>
              </NavItem>
              <NavItem onClick={() => setExpanded(false)} className="py-md-2">
                <NavLink
                  to="/consumer"
                  className="nav-NavLink"
                  activeClassName="active_link"
                >
                  FOR CONSUMER
                </NavLink>
              </NavItem>

              <NavItem
                className="sign_up py-md-2"
                onClick={() => setExpanded(false)}
              >
                <NavLink to="/sign-up" className="nav-NavLink ">
                  START FREE TRIAL
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="package-modal"
        centered
        className="modal-sign-in"
      >
        <Modal.Body className="modal-body-signin p-4 h-100">
          <Modal.Title className="sigin__title text-center font-weight-bold">
            Sign In
          </Modal.Title>
          <p className="sigin__text text-center">
            If you have an account, sign in with your email address.
          </p>
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
            <Form.Group>
              <Form.Label>
                Password <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                isInvalid={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="signin__container-btn d-flex justify-content-between align-items-center">
              {loading ? (
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
                  type="submit"
                  className="submit_btn text-center font-weight-bold"
                >
                  Sign in
                </Button>
              )}

              <Link to="#" className="signin__link">
                Forgot Password?
              </Link>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
