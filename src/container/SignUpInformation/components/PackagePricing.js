import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import PopupConfirm from "@/components/PopupConfirm"
import "./index.scss";

const packageList = [
    {
        id: 1,
        content: "Basic"
    },
    {
        id: 2,
        content: "Medium"
    },
    {
        id: 3,
        content: "Advanced"
    },
    {
        id: 4,
        content: "Solo"
    },
    {
        id: 5,
        content: "Duo"
    }
]


const PackagePricing = ({
    updateValues,
    goBack,
    form,
    errors,
}) => {

    const dispatch = useDispatch();
    // const form = useForm({

    // });

    const [packageId, setPackageId] = React.useState(1);
    const [isModalConfirm, setModalConfirm] = React.useState(false);


    const onSubmit = (e) => {
        e?.preventDefault();
        setModalConfirm(true);


        // dispatch(signup.updatePackagePricing(businesssInfo));
    }


    const onConfirm = () => {
        updateValues("packagePricing", packageId);
        setModalConfirm(false)
    }



    return (
        <>
            <PopupConfirm
                isVisible={isModalConfirm}
                close={() => setModalConfirm(false)}
                onDelete={onConfirm}
                title="Please check the information before confirming. Checked information?"
            />
            <div className='general_information'>
                <Form onSubmit={(onSubmit)}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={12} lg={10}>
                                <div className='title_signup'>
                                    Package & Pricing
                                </div>
                            </Col>

                            <Col xs={12} md={12} lg={10}>
                                <p>Try Harmony Merchant free for 3 momnths, no credit card required</p>

                                <h6 className="selectPackage">Select package below</h6>

                                {/********************** RENDER PACKAGE LIST  ***********************/}
                                {
                                    packageList.map((obj, index) => (
                                        <div
                                            onClick={() => setPackageId(obj?.id)}
                                            key={"packageId" + index}
                                            style={{ display: "flex", flexDirection: "row" }}
                                        >
                                            <div className={packageId == obj?.id ? "circle_radio" : "circle_radio_white"}>
                                                <div />
                                            </div>
                                            <p>{obj?.content}</p>
                                        </div>
                                    ))
                                }

                                <Row className="justify-content-md-center">
                                    <Col xs={12} md={12} lg={10}>
                                        <div className="signup_bottom">
                                            <Button
                                                variant="light"
                                                className="back_signup text-center font-weight-bold"
                                                onClick={goBack}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                type="submit"
                                                className="submit_signup text-center font-weight-bold"
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>


                            </Col>
                        </Row>
                    </Container>
                </Form>

            </div>
        </>
    )
};


export default PackagePricing;


