import React, { useState } from "react";
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
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";

import Flags from "country-flag-icons/react/3x2";
import Logo from "../../assets/images/logo_blue.png";
import Modal from "react-bootstrap/Modal";

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.use(initReactI18next).init({ lng: lang });
  };

  return (
    <>
      <div className="text-right align-middle top_header pt-1">
        <Container>
          <Row className="justify-content-end">
            <Col className="pt-1 mx-sm-1 pr-0 pl-0">
              <div className="singin" onClick={() => setShow(true)}>
                <FaSignInAlt size={21} className="mr-2" />
                <span className="text-white">Sign in</span>
              </div>
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
          <Form>
            <Form.Group>
              <Form.Label>
                Username <span className="form_required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password <span className="form_required">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="signin__container-btn d-flex justify-content-between align-items-center">
              <Button
                type="submit"
                className="submit_btn text-center font-weight-bold"
              >
                Sign in
              </Button>
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
