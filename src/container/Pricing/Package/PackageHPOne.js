import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import icon_checked from "../../../assets/images/home/icon_checked.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Switch from "react-switch";

import Modal from "react-bootstrap/Modal";
import HeaderPackage from "./HeaderPackpage";
import FeatureHPOne from "./FetureHPOne";

export default function PackageHPOne({
    checked,
    setChecked,
    showHPOne,
    setShowHPOne,
}) {

    return (
        <>
            <div className="package__subItem">
                <h2 style={{ fontSize: 37 }} className="text-center font-weight-bold">
                    HarmonyPay One
                </h2>
                <div className="d-flex align-items-center package__subItem">
                    {checked ? (
                        <span className="text-center mr-lg-3 package__features--span font-weight-bold">
                            Billed
                            <br /> Monthly
                        </span>
                    ) : (
                        <span className="text-center mr-lg-3 package__features--span font-weight-bold checked">
                            Billed
                            <br /> Monthly
                        </span>
                    )}

                    <div style={{ marginRight: 10 }}>
                        <Switch
                            onChange={setChecked}
                            checked={checked}
                            uncheckedIcon={<div />}
                            checkedIcon={<div />}
                            onColor="#45954F"
                            offColor="#45954F"
                        />
                    </div>

                    {checked ? (
                        <span className="text-center package__features--span font-weight-bold checked">
                            Billed
                            <br /> Annually
                        </span>
                    ) : (
                        <span className="text-center package__features--span font-weight-bold">
                            Billed
                            <br /> Annually
                        </span>
                    )}
                </div>
            </div>


            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Row className="package__container mx-auto justify-content-md-center">

                    <Col
                        xs={12}
                        md={5}
                        lg={4}
                        className=""
                    >
                        <Card className="package__item">
                            <HeaderPackage
                                title="SOLO"
                                subTitle="1 Staff"
                                color="#0E5999"
                                isSpecial={true}
                            />
                            <Card.Body className="package__item--cardbody d-flex flex-column">
                                <Card.Title className="package__item--title text-center font-weight-bold">
                                    ${checked ? "199.50" : "19.95"}
                                    <span className="package__item--sub">
                                        /{checked ? "year" : "month"}
                                    </span>
                                </Card.Title>
                                <Link
                                    className="package__item--btn text-center"
                                    to="/home/sign-up-information"
                                >
                                    Start free trial
                                </Link>
                                <Card.Text className="package__item--text text-left">
                                    The purpose of life is to live it, to experience and enjoy the
                                    love it gives in every breath. Let live, love, and enjoy life
                                    as it comes.
                                    <span style={{ color: "white" }}>
                                        The Quan”. We are your ambassador of Quan. We will show you the money hghghjgghghj
                                    </span>
                                </Card.Text>

                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Mobile POS</div>
                                </div>
                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Check-in App</div>
                                </div>
                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Marketing</div>
                                </div>
                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Report</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col
                        xs={12}
                        md={5}
                        lg={4}
                        className=""
                    >
                        <Card className="package__item">
                            <HeaderPackage
                                title="DUO"
                                subTitle="2 STAFFS"
                                color="#032E53"
                                isSpecial={true}
                            />
                            <Card.Body className="package__item--cardbody d-flex flex-column">
                                <Card.Title className="package__item--title text-center font-weight-bold">
                                    ${checked ? "299.50" : "29.95"}
                                    <span className="package__item--sub">
                                        /{checked ? "year" : "month"}
                                    </span>
                                </Card.Title>
                                <Link
                                    className="package__item--btn text-center"
                                    to="/home/sign-up-information"
                                >
                                    Start free trial
                                </Link>
                                <Card.Text className="package__item--text text-left">
                                    Inspire by Rod Tidwell’s word in the movie Jerry Maguire. “It
                                    means love, respect, community… and the dollars too. The
                                    entire package. The Quan”. We are your ambassador of Quan. We
                                    will show you the money
                                </Card.Text>

                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Mobile POS</div>
                                </div>
                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Check-in App</div>
                                </div>
                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Marketing</div>
                                </div>
                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>Report</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Modal
                        show={showHPOne}
                        onHide={() => setShowHPOne(false)}
                        size="xl"
                        aria-labelledby="package-modal"
                        centered
                        className="video-modal text-center"
                    >
                        <Modal.Header className="border-0" closeButton></Modal.Header>
                        <Modal.Body>
                            <FeatureHPOne />
                        </Modal.Body>
                    </Modal>
                </Row>

                <button
                    className="text-capitalize package__features--btn text-center bg-white border-0 font-weight-bold"
                    onClick={() => setShowHPOne(true)}
                >
                    See features{" "}
                    <MdKeyboardArrowRight size={30} className="package__rightArr" />
                </button>
            </div>
        </>
    );
}
