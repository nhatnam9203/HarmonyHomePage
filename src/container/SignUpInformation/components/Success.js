import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import iconSuccess from "@/assets/images/iconSuccess.png";

import "./index.scss";

const Succes = () => {

    const onSuccess = (e) => {
        e?.preventDefault();
        const x = window.location.href;
        const url = new URL(x).origin;
        window.location.href = `${url}/home`;
    }

    return (
        <>
            <div className='success_register_container'>
                <Form onSubmit={onSuccess}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col className='success_register'>
                                <h1>REQUEST HAS BEEN SENT</h1>
                                <h4>
                                    Thank you for submitting application, one of our agent will contact you within the next business day.
                                </h4>
                                <img src={iconSuccess} alt="img" />

                                <Button
                                    type="submit"
                                    variant="light"
                                    className="back_signup text-center font-weight-bold"
                                    style={{ marginTop: 40, marginBottom: 120 }}
                                >
                                    OK
                                </Button>
                            </Col>
                        </Row>


                    </Container>
                </Form>

            </div>
        </>
    )
};

export default Succes;


