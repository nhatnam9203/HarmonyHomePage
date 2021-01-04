import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantByIdAction } from "../../../../actions/userActions";
import { useTransition, animated } from "react-spring";

import Collapse from "@kunukn/react-collapse";
import BankVoid from "../../../../assets/images/bank_void.png";
import DriverLicenseImg from "../../../../assets/images/driver_license.jpg";
import Loading from "../../../../util/Loading";
import moment from "moment";

import "./Info.scss";

function Info() {
  const { id } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();

  const [general, setGeneral] = useState(true);
  const [bank, setBank] = useState(true);
  const [principal, setPrincipal] = useState(true);

  useEffect(() => {
    dispatch(getMerchantByIdAction(id));
  }, [dispatch]);

  const { loading, detail } = useSelector((state) => state.merchantDetail);

  const transitions = useTransition(loading, null, {
    from: {
      opacity: 0,
      width: "100%",
      position: "absolute",
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="info_content">
      <div className="d-flex justify-content-between">
        <h1>
          {id} - {detail?.businessName}
        </h1>
        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>

      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <Loading />
          </animated.div>
        ) : (
          <animated.div
            style={{
              from: {
                opacity: 0,
                width: "100%",
              },
              enter: { opacity: 1 },
              leave: { opacity: 0 },
            }}
            key={key}
            reset
          >
            <>
              {/*  General */}
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
                        <p className="info_text">
                          {detail?.general?.legalBusinessName}
                        </p>
                      </Col>
                      <Col xs={6} md={4}>
                        <p className="info_label">Doing Business As (DBA)</p>
                        <p className="info_text">
                          {detail?.general?.doBusinessName}
                        </p>
                      </Col>
                      <Col xs={6} md={4}>
                        <p className="info_label">Federal Tax Id</p>
                        <p className="info_text">{detail?.general?.tax}</p>
                      </Col>
                      <Col xs={6} md={4} className="mt-4">
                        <p className="info_label">DBA Business Address</p>
                        <p className="info_text">
                          {`${detail?.general?.dbaAddress?.Address}, ${detail?.general?.dbaAddress?.City}, ${detail?.general?.dbaAddress?.StateName}`}
                        </p>
                      </Col>
                      <Col xs={6} md={4} className="mt-4">
                        <p className="info_label">Zip Code</p>
                        <p className="info_text">
                          {detail?.general?.dbaAddress?.Zip}
                        </p>
                      </Col>
                      <Col xs={6} md={4} className="mt-4">
                        <p className="info_label">Business Phone Number</p>
                        <p className="info_text">
                          {detail?.general?.phoneBusiness}
                        </p>
                      </Col>
                      <Col xs={6} md={4} className="mt-4">
                        <p className="info_label">Contact Email Address</p>
                        <p className="info_text">
                          {detail?.general?.emailContact}
                        </p>
                      </Col>
                      <Col xs={12} className="mt-4">
                        <p className="title">Representative Information</p>
                        <hr className="" />
                      </Col>
                      <Col xs={6} md={4}>
                        <p className="info_label">Contact Name</p>
                        <p className="info_text">{`${detail?.general?.firstName} ${detail?.general?.lastName}`}</p>
                      </Col>
                      <Col xs={6} md={4}>
                        <p className="info_label">Position</p>
                        <p className="info_text">{detail?.general?.title}</p>
                      </Col>
                      <Col xs={6} md={4}>
                        <p className="info_label">Phone number</p>
                        <p className="info_text">
                          {detail?.general?.phoneContact}
                        </p>
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
                <div
                  className="app__toggle-text"
                  aria-label={bank ? "close" : "open"}
                >
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
                        <p className="info_text">
                          {detail?.businessBank?.name}
                        </p>
                      </Col>
                      <Col xs={6} md={4}>
                        <p className="info_label">ABA Routing Number</p>
                        <p className="info_text">
                          {detail?.businessBank?.routingNumber}
                        </p>
                      </Col>
                      <Col xs={12} md={4}>
                        <p className="info_label">
                          Checking Account Number (DDA)
                        </p>
                        <p className="info_text">
                          {detail?.businessBank?.accountNumber}
                        </p>
                      </Col>
                      <Col xs={12} md={4}>
                        <p className="info_label mt-4">Void Check</p>
                        <img
                          className="img-fluid"
                          src={detail?.businessBank?.imageUrl || BankVoid}
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
                    {detail?.principals?.map((e, index) => (
                      <div key={e?.principalId}>
                        <p className={index > 1 ? "mt-4 title" : "title"}>
                          Principal {index + 1}
                        </p>
                        <hr />
                        <Row>
                          <Col xs={6} md={4}>
                            <p className="info_label">Full Name</p>
                            <p className="info_text">{`${e?.firstName} ${e?.lastName}`}</p>
                          </Col>
                          <Col xs={6} md={4}>
                            <p className="info_label">Title/Position</p>
                            <p className="info_text">{e?.title}</p>
                          </Col>
                          <Col xs={6} md={4}>
                            <p className="info_label">Ownership (%)</p>
                            <p className="info_text">{e?.ownerShip}</p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Home Phone</p>
                            <p className="info_text">{e?.homePhone}</p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Mobile Phone</p>
                            <p className="info_text">{e?.mobilePhone}</p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Email</p>
                            <p className="info_text">{e?.email}</p>
                          </Col>
                          <Col xs={12} className="mt-4">
                            <p className="info_label">Date of birth</p>
                            <p className="info_text">
                              {moment(e?.birthDate).format("MM/DD/YYYY")}
                            </p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Address</p>
                            <p className="info_text">
                              {`${e?.address}, ${e?.city}, ${e?.state?.name}`}
                            </p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Zip Code</p>
                            <p className="info_text">{e?.zip}</p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Year at This Address</p>
                            <p className="info_text">{e?.yearAddress}</p>
                          </Col>

                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">
                              Social Security Number (SSN)
                            </p>
                            <p className="info_text">{e?.ssn}</p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">Driver License Number</p>
                            <p className="info_text">{e?.driverNumber}</p>
                          </Col>
                          <Col xs={6} md={4} className="mt-4">
                            <p className="info_label">State Issued</p>
                            <p className="info_text">{e?.stateIssuedName}</p>
                          </Col>
                          <Col xs={12} md={4} className="mt-4">
                            <p className="info_label">Driver License Picture</p>
                            <img
                              className="img-fluid"
                              src={e?.imageUrl || DriverLicenseImg}
                            />
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                )}
              </Collapse>
            </>
          </animated.div>
        )
      )}
    </div>
  );
}

export default Info;
