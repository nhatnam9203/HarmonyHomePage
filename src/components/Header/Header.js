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
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

import Flags from "country-flag-icons/react/3x2";
import Logo from "../../assets/images/logo_blue.png";

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const [expanded, setExpanded] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.use(initReactI18next).init({ lng: lang });
  };

  return (
    <>
      <div className="text-right align-middle top_header pt-1">
        <Container>
          <Row className="justify-content-end">
            <Col className="pt-1 mx-1 pr-0">
              <div className="telephone">
                <FiPhoneCall size={21} />
                <a href="tel:800-531-3126">800-531-3126</a>
              </div>
            </Col>
            <Col xs="auto" className="pt-1 mx-3">
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
          <Navbar.Brand href="#home">
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

            <Nav className="align-items-sm-end">
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
    </>
  );
}
