import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantByIdAction } from "../../../../../actions/userActions";

import Collapse from "@kunukn/react-collapse";
import BankVoid from "../../../../../assets/images/bank_void.png";
import DriverLicenseImg from "../../../../../assets/images/driver_license.jpg";
import moment from "moment";
import Fade from "react-reveal/Fade";
import "../Info.scss";
import "./style.scss";

function Index() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [general, setGeneral] = useState(true);
  const [bank, setBank] = useState(true);
  const [principal, setPrincipal] = useState(true);

  useEffect(() => {
    dispatch(getMerchantByIdAction(id));
  }, [dispatch]);

  const { detail } = useSelector((state) => state.merchantDetail);

  return (
    <Fade>
      <div className="info_merchant_title">Business Information</div>
      <div
        className="app__toggle d-flex justify-content-between toggle_box mt-4"
        onClick={() => setGeneral(!general)}
      >
        <div
          className="app__toggle-text"
          aria-label={general ? "close" : "open"}
        >
          <div className="d-flex text-center">
            <div className="qty_business">1</div>
            <div className="title_business">General Information</div>
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
              <Col sm={12} md={4}>
                <p className="info_label">Legal Business Name</p>
                <p className="info_text">
                  {detail?.general?.legalBusinessName}
                </p>
              </Col>
              <Col sm={12} md={4}>
                <p className="info_label">Doing Business As (DBA)</p>
                <p className="info_text">{detail?.general?.doBusinessName}</p>
              </Col>
              <Col sm={12} md={4}>
                <p className="info_label">Federal Tax Id</p>
                <p className="info_text">{detail?.general?.tax}</p>
              </Col>
              <Col sm={12} md={4} className="mt-4">
                <p className="info_label">Business Address* (no P.O. Boxes)</p>
                <p className="info_text">
                  {`${detail?.general?.address}, ${detail?.general?.city}, ${detail?.state?.name}`}
                </p>
              </Col>
              <Col sm={12} md={4} className="mt-4">
                <p className="info_label">Zip Code</p>
                <p className="info_text">{detail?.general?.zip}</p>
              </Col>
              <div className="w-100"></div>
              <Col sm={12} md={4} className="mt-4">
                <p className="info_label">DBA Business Address</p>
                <p className="info_text">
                  {`${detail?.general?.dbaAddress?.Address}, ${detail?.general?.dbaAddress?.City}, ${detail?.general?.dbaAddress?.StateName}`}
                </p>
              </Col>
              <Col sm={12} md={4} className="mt-4">
                <p className="info_label">Zip Code</p>
                <p className="info_text">{detail?.general?.dbaAddress?.Zip}</p>
              </Col>
              <div className="w-100"></div>
              <Col sm={12} md={4} className="mt-4">
                <p className="info_label">Business Phone Number</p>
                <p className="info_text">{detail?.general?.phoneBusiness}</p>
              </Col>
              <Col sm={12} md={4} className="mt-4">
                <p className="info_label">Contact Email Address</p>
                <p className="info_text">{detail?.general?.emailContact}</p>
              </Col>
              <Col xs={12} className="mt-4">
                <p className="title">Representative Information</p>
                <hr className="" />
              </Col>
              <Col sm={12} md={4}>
                <p className="info_label">Contact Name</p>
                <p className="info_text">{`${detail?.general?.firstName} ${detail?.general?.lastName}`}</p>
              </Col>
              <Col sm={12} md={4}>
                <p className="info_label">Position</p>
                <p className="info_text">{detail?.general?.title}</p>
              </Col>
              <Col sm={12} md={4}>
                <p className="info_label">Phone number</p>
                <p className="info_text">{detail?.general?.phoneContact}</p>
              </Col>
            </Row>
          </div>
        )}
      </Collapse>
      {/* Bank */}
      <div
        className="app__toggle d-flex justify-content-between toggle_box mt-4"
        onClick={() => setBank(!bank)}
      >
        <div className="app__toggle-text" aria-label={bank ? "close" : "open"}>
          <div className="d-flex text-center">
            <div className="qty_business">2</div>
            <div className="title_business">Bank Information</div>
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
              <Col sm={12} md={4}>
                <p className="info_label">Bank Name</p>
                <p className="info_text">{detail?.businessBank?.name}</p>
              </Col>
              <Col sm={12} md={4}>
                <p className="info_label">ABA Routing Number</p>
                <p className="info_text">
                  {detail?.businessBank?.routingNumber}
                </p>
              </Col>
              <Col xs={12} md={4}>
                <p className="info_label">Checking Account Number (DDA)</p>
                <p className="info_text">
                  {detail?.businessBank?.accountNumber}
                </p>
              </Col>
              <Col xs={12} md={4}>
                <p className="info_label mt-4">Void Check</p>
                <img
                  className="img-fluid"
                  src={detail?.businessBank?.imageUrl || BankVoid}
                  alt="img"
                />
              </Col>
            </Row>
          </div>
        )}
      </Collapse>

      {/*  Principal */}
      <div
        className="app__toggle d-flex justify-content-between toggle_box mt-4"
        onClick={() => setPrincipal(!principal)}
      >
        <div
          className="app__toggle-text"
          aria-label={principal ? "close" : "open"}
        >
          <div className="d-flex text-center">
            <div className="qty_business">3</div>
            <div className="title_business">Principal Information</div>
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
            {detail?.principals?.map((e, index) => (
              <div key={e?.principalId}>
                <p className={index > 1 ? "mt-4 title" : "title"}>
                  Principal {index + 1}
                </p>
                <hr />
                <Row>
                  <Col sm={12} md={4}>
                    <p className="info_label">Full Name</p>
                    <p className="info_text">{`${e?.firstName} ${e?.lastName}`}</p>
                  </Col>
                  <Col sm={12} md={4}>
                    <p className="info_label">Title/Position</p>
                    <p className="info_text">{e?.title}</p>
                  </Col>
                  <Col sm={12} md={4}>
                    <p className="info_label">Ownership (%)</p>
                    <p className="info_text">{e?.ownerShip}</p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Home Phone</p>
                    <p className="info_text">{e?.homePhone}</p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Mobile Phone</p>
                    <p className="info_text">{e?.mobilePhone}</p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Email</p>
                    <p className="info_text">{e?.email}</p>
                  </Col>
                  <Col xs={12} className="mt-4">
                    <p className="info_label">Date of birth</p>
                    <p className="info_text">
                      {moment(e?.birthDate).format("MM/DD/YYYY")}
                    </p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Address</p>
                    <p className="info_text">
                      {`${e?.address}, ${e?.city}, ${e?.state?.name}`}
                    </p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Zip Code</p>
                    <p className="info_text">{e?.zip}</p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Year at This Address</p>
                    <p className="info_text">{e?.yearAddress}</p>
                  </Col>

                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Social Security Number (SSN)</p>
                    <p className="info_text">{e?.ssn}</p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">Driver License Number</p>
                    <p className="info_text">{e?.driverNumber}</p>
                  </Col>
                  <Col sm={12} md={4} className="mt-4">
                    <p className="info_label">State Issued</p>
                    <p className="info_text">{e?.stateIssuedName}</p>
                  </Col>
                  <Col xs={12} md={4} className="mt-4">
                    <p className="info_label">Driver License Picture</p>
                    <img
                      className="img-fluid"
                      src={e?.imageUrl || DriverLicenseImg}
                      alt="img"
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        )}
      </Collapse>
    </Fade>
  );
}

export default Index;
