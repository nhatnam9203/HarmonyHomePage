import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import icon_checked from "../../../assets/images/home/icon_checked.png";
import FullFeatures from "../../../assets/images/pricing/imgpsh_fullsize_anim.jpeg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Switch from "react-switch";

import Modal from "react-bootstrap/Modal";
import HeaderPackage from "./HeaderPackpage";
import FeaturePOS from "./FeaturePOS";
import { useMediaQuery } from 'react-responsive'


export default function PackagePOS({
    checked,
    setChecked,
    packageList,
    pricingAnnuallyBasic1,
    pricingAnnuallyMedium1,
    pricingAnnuallyPro1,
    show,
    setShow
}) {

    const isIpadPro = useMediaQuery(
        { minWidth: 1024, maxWidth : 1050 },
     )

    return (
        <>

            <div className="package__subItem">
                <h2 style={{ fontSize: 37 }} className="text-center font-weight-bold">
                    HarmonyPay POS Salon
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
                <Row className="package__container mx-auto ">
                    <Col
                        xs={12}
                        md={4}
                        className=""
                    >
                        <Card className="package__item">
                            <HeaderPackage
                                title="LEGEND"
                                subTitle="8 Staffs"
                                color="#1266AE"
                                isSpecial={false}
                            />
                            <Card.Body className="package__item--cardbody d-flex flex-column">
                                <Card.Title className="package__item--title text-center font-weight-bold">
                                    ${checked ? pricingAnnuallyBasic1 : packageList[2]?.pricing}
                                    <span className="package__item--sub">
                                        /{checked ? "year" : "month"}
                                    </span>
                                </Card.Title>
                                <Link
                                    className="package__item--btn text-center"
                                    to="/home/sign-up"
                                >
                                    Start free trial
                                </Link>
                                <Card.Text className="package__item--text">
                                    The legendary struggle of a salon owner without Harmony POS
                                    system. Let’s this package mark the beginning of your
                                    legendary successful salon.
                                    <br />
                                    { isIpadPro && <br /> }
                                    <span style={{ color: "white" }}>
                                        The Quan”. We are your ambas  sador of Quan.
                                    </span>
                                </Card.Text>

                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>POS</div>
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
                        md={4}
                        className=""
                    >
                        <Card className="package__item">
                            <HeaderPackage
                                title="LIVE, LOVE AND ENJOY"
                                subTitle="15 Staffs"
                                color="#0E5999"
                                isSpecial={true}
                            />
                            <Card.Body className="package__item--cardbody d-flex flex-column">
                                <Card.Title className="package__item--title text-center font-weight-bold">
                                    ${checked ? pricingAnnuallyMedium1 : packageList[1]?.pricing}
                                    <span className="package__item--sub">
                                        /{checked ? "year" : "month"}
                                    </span>
                                </Card.Title>
                                <Link
                                    className="package__item--btn text-center"
                                    to="/home/sign-up"
                                >
                                    Start free trial
                                </Link>
                                <Card.Text className="package__item--text">
                                    The purpose of life is to live it, to experience and enjoy the
                                    love it gives in every breath. Let live, love, and enjoy life
                                    as it comes.
                                    <span style={{ color: "white" }}>
                                        The Quan”. We are your ambassador of Quan. We will show you the money hghghjgghghj
                                    </span>
                                </Card.Text>

                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>POS</div>
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
                        md={4}
                        className=""
                    >
                        <Card className="package__item">
                            <HeaderPackage
                                title="THE QUAN"
                                subTitle="16+ Staffs"
                                color="#032E53"
                                isSpecial={true}
                            />
                            <Card.Body className="package__item--cardbody d-flex flex-column">
                                <Card.Title className="package__item--title text-center font-weight-bold">
                                    ${checked ? pricingAnnuallyPro1 : packageList[0]?.pricing}
                                    <span className="package__item--sub">
                                        /{checked ? "year" : "month"}
                                    </span>
                                </Card.Title>
                                <Link
                                    className="package__item--btn text-center"
                                    to="/home/sign-up"
                                >
                                    Start free trial
                                </Link>
                                <Card.Text className="package__item--text">
                                    Inspire by Rod Tidwell’s word in the movie Jerry Maguire. “It
                                    means love, respect, community… and the dollars too. The
                                    entire package. The Quan”. We are your ambassador of Quan. We
                                    will show you the money
                                </Card.Text>

                                <div className="item__check">
                                    <img src={icon_checked} alt="image_checked" />
                                    <div>POS</div>
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
                        show={show}
                        onHide={() => setShow(false)}
                        size="xl"
                        aria-labelledby="package-modal"
                        centered
                        className="video-modal text-center"
                    >
                        <Modal.Header className="border-0" closeButton></Modal.Header>
                        <Modal.Body>
                            <FeaturePOS />
                        </Modal.Body>
                    </Modal>
                </Row>

                <button
                    className="text-capitalize package__features--btn text-center bg-white border-0 font-weight-bold"
                    onClick={() => setShow(true)}
                >
                    See features{" "}
                    <MdKeyboardArrowRight size={30} className="package__rightArr" />
                </button>
            </div>
        </>
    );
}
