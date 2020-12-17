import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Collapse from "@kunukn/react-collapse";

import BankVoid from "../../../../assets/images/bank_void.png";
import DriverLicenseImg from "../../../../assets/images/driver_license.jpg";

import "./Info.scss";
function Info() {
  const id = useParams();
  const [general, setGeneral] = useState(true);
  const [bank, setBank] = useState(true);
  const [principal, setPrincipal] = useState(true);
  return (
    <div className="info_content">
      <h1>{id.id} - Mekira Nails & Spa</h1>

      {/* // General */}
      <div
        className="app__toggle d-flex justify-content-between toggle_box mt-4"
        onClick={() => setGeneral(!general)}
      >
        <div
          className="app__toggle-text"
          aria-label={general ? "close" : "open"}
        >
          <div className="d-flex text-center">
            <span>1</span>
            <h3>General Information</h3>
          </div>
        </div>
        <div className="rotate90 mr-3">
          <svg
            className={`icon ${general && "icon--expanded"}`}
            viewBox="6 0 12 24"
          >
            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
          </svg>
        </div>
      </div>
      <Collapse
        elementType="section"
        isOpen={general}
        aria-hidden={general ? "false" : "true"}
        className="collapse-css-transition app__collapse collapse_info"
        onClick={() => setGeneral(!general)}
      >
        {(collapseState) => (
          <div className={"app__content " + collapseState}>
            <p className="title">Business Information</p>
            <hr className="" />
            <Row>
              <Col xs={6} md={4}>
                <p className="info_label">Legal Business Name</p>
                <p className="info_text">Mekira Nails & Spa</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Doing Business As (DBA)</p>
                <p className="info_text">Mekira Nails & Spa</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Federal Tax Id</p>
                <p className="info_text">12-3445678</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">DBA Business Address</p>
                <p className="info_text">
                  875 E Klosterman Road, Tarpon Springs, Florida
                </p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Zip Code</p>
                <p className="info_text">34684</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Business Phone Number</p>
                <p className="info_text">+17272383454</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Contact Email Address</p>
                <p className="info_text">duongwilliam@gmail.com</p>
              </Col>
              <Col xs={12} className="mt-4">
                <p className="title">Representative Information</p>
                <hr className="" />
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Contact Name</p>
                <p className="info_text">John Adams</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Position</p>
                <p className="info_text">Owner</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Phone number</p>
                <p className="info_text">+1727935005</p>
              </Col>
            </Row>
          </div>
        )}
      </Collapse>

      {/* // Bank */}
      <div
        className="app__toggle d-flex justify-content-between toggle_box mt-4"
        onClick={() => setBank(!bank)}
      >
        <div className="app__toggle-text" aria-label={bank ? "close" : "open"}>
          <div className="d-flex text-center">
            <span>2</span>
            <h3>Bank Information</h3>
          </div>
        </div>
        <div className="rotate90 mr-3">
          <svg
            className={`icon ${bank && "icon--expanded"}`}
            viewBox="6 0 12 24"
          >
            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
          </svg>
        </div>
      </div>
      <Collapse
        elementType="section"
        isOpen={bank}
        aria-hidden={bank ? "false" : "true"}
        className="collapse-css-transition app__collapse collapse_info"
        onClick={() => setBank(!bank)}
      >
        {(collapseState) => (
          <div className={"app__content " + collapseState}>
            <Row>
              <Col xs={6} md={4}>
                <p className="info_label">Bank Name</p>
                <p className="info_text">American Express</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">ABA Routing Number</p>
                <p className="info_text">123456</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Checking Account Number (DDA)</p>
                <p className="info_text">+1727935005</p>
              </Col>
              <Col auto>
                <p className="info_label mt-4">Void Check</p>
                <img src={BankVoid} />
              </Col>
            </Row>
          </div>
        )}
      </Collapse>

      {/* // Principal */}

      <div
        className="app__toggle d-flex justify-content-between toggle_box mt-4"
        onClick={() => setPrincipal(!principal)}
      >
        <div
          className="app__toggle-text"
          aria-label={principal ? "close" : "open"}
        >
          <div className="d-flex text-center">
            <span>3</span>
            <h3>Principal Information</h3>
          </div>
        </div>
        <div className="rotate90 mr-3">
          <svg
            className={`icon ${principal && "icon--expanded"}`}
            viewBox="6 0 12 24"
          >
            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
          </svg>
        </div>
      </div>
      <Collapse
        elementType="section"
        isOpen={principal}
        aria-hidden={principal ? "false" : "true"}
        className="collapse-css-transition app__collapse collapse_info"
        onClick={() => setPrincipal(!principal)}
      >
        {(collapseState) => (
          <div className={"app__content " + collapseState}>
            <p className="title">Principal 1</p>
            <hr className="" />
            <Row>
              <Col xs={6} md={4}>
                <p className="info_label">Full Name</p>
                <p className="info_text">David James</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Title/Position</p>
                <p className="info_text">Manager</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Ownership (%)</p>
                <p className="info_text">51</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Home Phone</p>
                <p className="info_text">None</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Mobile Phone</p>
                <p className="info_text">847-570-8048</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Email</p>
                <p className="info_text">JamesMSmit@rhyta.com</p>
              </Col>
              <Col xs={12} className="mt-4">
                <p className="info_label">Date of birth</p>
                <p className="info_text">December 6, 1949</p>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <p className="info_label">Address</p>
                <p className="info_text">
                  4253 Thomas Street, Evanston, IL 60219
                </p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Zip Code</p>
                <p className="info_text">60219</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Year at This Address</p>
                <p className="info_text">5</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Phone number</p>
                <p className="info_text">+1727935005</p>
              </Col>

              <Col xs={6} md={4}>
                <p className="info_label">Social Security Number (SSN)</p>
                <p className="info_text">349-20-1234</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">Driver License Number</p>
                <p className="info_text">B7921995</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="info_label">State Issued</p>
                <p className="info_text">California (CA)</p>
              </Col>
              <Col xs={12}>
                <p className="info_label">Driver License Number</p>
                <img src={DriverLicenseImg} />
              </Col>
            </Row>
          </div>
        )}
      </Collapse>
    </div>
  );
}

export default Info;
