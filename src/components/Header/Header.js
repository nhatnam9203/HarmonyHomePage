import React from "react";
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
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

import Flags from "country-flag-icons/react/3x2";
import Logo from "../../assets/images/logo_blue.png";

export default function Header() {
  const { t, i18n } = useTranslation("header");

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
                <FiPhoneCall size={17} />
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavItem>
                <Link to="/" className="nav-link">
                  {t("Home")}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/features" className="nav-link">
                  {t("Features")}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/shop" className="nav-link">
                  {t("Shop")}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/pricing" className="nav-link">
                  {t("Pricing")}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/application" className="nav-link">
                  {t("Applications")}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  {t("About us")}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">
                  {t("Contact")}
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
