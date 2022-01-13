import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InputText from "@/components/InputText";
import { useMediaQuery } from 'react-responsive';
import { useController } from "react-hook-form";
import "./index.scss";


const BusinessInformation = ({ updateValues = () => { }, goBack = () => { }, form, }) => {

    const question1Ref = React.useRef();
    const question2Ref = React.useRef();
    const question3Ref = React.useRef();
    const question4Ref = React.useRef();
    const question5Ref = React.useRef();

    const errors = form.formState.errors;
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


    const onSubmit = (e) => {
        e?.preventDefault();

        const businesssInfo = {
            question1: {
                isAccept: form.getValues("isAccept1"),
                desc: form.getValues("question1"),
                question:
                    "Has Merchant been previously identified by Visa/Mastercard Risk Programs?",
            },
            question2: {
                isAccept: form.getValues("isAccept2"),
                desc: form.getValues("question2"),
                question:
                    "Has Merchant or any associated principal and/or owners disclosed below filed bankruptcy or been subject to any involuntary bankruptcy?",
            },
            question3: {
                isAccept: form.getValues("isAccept3"),
                desc: form.getValues("question3"),
                question: "Will product(s) or service(s) be sold outside of US?",
            },
            question4: {
                isAccept: form.getValues("isAccept4"),
                desc: form.getValues("question4"),
                question: "Has a processor ever terminated your Merchant account?",
            },
            question5: {
                isAccept: form.getValues("isAccept5"),
                desc: form.getValues("question5"),
                question: "Have you ever accepted Credit/Debit cards before?",
            },
        };

        updateValues("businessInfo", businesssInfo);
    }

    return (
        <div className='general_information'>
            <Form onSubmit={(onSubmit)}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={12} lg={10}>
                            <div className='title_signup'>
                                Business Information
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6} lg={5}>
                            <ItemInformation
                                form={form}
                                errors={errors}
                                label="Has Merchant been previously identified by Visa/Mastercard Risk Programs?"
                                textYes="Yes (if yes, who was the processor)"
                                name="question1"
                                isAccept={"isAccept1"}
                                ref={question1Ref}
                                isDrop
                            />
                        </Col>

                        <Col style={{ marginTop: isMobile ? 25 : 0 }} xs={12} md={6} lg={5}>
                            <ItemInformation
                                form={form}
                                errors={errors}
                                label="Has Merchant or any associated principal and/or owners disclosed bellow filed bankruptcy or been subject to any involuntary bankruptcy?"
                                textYes="Yes (if yes, who was the processor)"
                                name="question2"
                                isAccept={"isAccept2"}
                                ref={question2Ref}
                            />
                        </Col>

                        <Col style={{ marginTop: 25 }} xs={12} md={6} lg={5}>
                            <ItemInformation
                                form={form}
                                errors={errors}
                                label="Will product(s) or service(s) be sold outside of US?"
                                textYes="Yes (if yes, date filed)"
                                name="question3"
                                isAccept={"isAccept3"}
                                ref={question3Ref}
                            />
                        </Col>

                        <Col style={{ marginTop: 25 }} xs={12} md={6} lg={5}>
                            <ItemInformation
                                form={form}
                                errors={errors}
                                label="Has a processor ever terminated your Merchant account?"
                                textYes="Yes (if yes, what was program and when)"
                                name="question4"
                                isAccept={"isAccept4"}
                                ref={question4Ref}
                            />
                        </Col>

                        <Col style={{ marginTop: 25 }} xs={12} md={6} lg={5}>
                            <ItemInformation
                                form={form}
                                errors={errors}
                                label="Have you ever accepted Credit/Edit cards before?"
                                textYes="Yes (if yes, who was your previous company)"
                                name="question5"
                                isAccept={"isAccept5"}
                                ref={question5Ref}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={5}>

                        </Col>
                    </Row>

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
                                    Next
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Form>

        </div>
    )
};

export default BusinessInformation;


const ItemInformation = React.forwardRef(({ label, textYes, form, name, isDrop, isAccept }, ref) => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const { field } = useController({
        control: form.control,
        name: isAccept,
    })

    return (
        <div className='itemBusiness'>
            <p>{label}
                {
                    isDrop && !isMobile && <span style={{ color: "white" }}>
                        filed bankruptcy or been subject to any involuntary bankruptcy?
                    </span>
                }
            </p>

            <div>
                <div style={{ width: 80 }}>
                    <div onClick={() => form.setValue(isAccept, false)} className={!field.value ? "circle_radio" : "circle_radio_white"}>
                        <div />
                    </div>
                    <p>No</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <div>
                        <div onClick={() => form.setValue(isAccept, true)} className={field.value ? "circle_radio" : "circle_radio_white"}>
                            <div />
                        </div>
                        <p>{textYes}</p>
                    </div>

                    <InputText
                        form={form}
                        name={name}
                        isRequired
                        label={""}
                        placeholder=""
                        height={"3rem"}
                        editable={field.value}
                    />
                </div>
            </div>
        </div>
    )
});