import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import { signUpGeneralInfoSchema, signUpGeneralInfoSchema2 } from "@shared/helpers/schema";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import InputPhone from "@/components/InputPhone";
import "./index.scss";

const merchantTypeGroup = [
    { value: "SalonPos", label: "Salon POS" },
    { value: "Retailer", label: "Retailer" },
    { value: "Restaurant", label: "Table management" },
]


const Generalnformation = () => {

    const form = useForm({});

    const errors = form.formState.errors;

    const onSubmit = (e) => {
        e?.preventDefault();
    }

    return (
        <div className='general_information'>
            <Form onSubmit={onSubmit}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={12} lg={10}>
                            <div className='title_signup'>
                                General Information
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="businessName"
                                isRequired
                                label={"Legal Business Name"}
                                placeholder="Legal Business Name"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="doingBusiness"
                                isRequired
                                label={"Doing Business As(DBA)"}
                                placeholder="DBA"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputSelect 
                                data={merchantTypeGroup}
                                form={form}
                                defaultValue="SalonPos"
                                label="Merchant Type"
                                name="type"
                                isRequired
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="tax"
                                isRequired
                                label={"Federal Tax ID"}
                                placeholder="99-9999999"
                                mask={"99-9999999"}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="address"
                                isRequired
                                label={"Business Address(no P.O.Boxes"}
                                placeholder="Street Address"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="city"
                                isRequired
                                label={"City"}
                                placeholder="City"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="state"
                                isRequired
                                label={"State"}
                                placeholder="State"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="zip"
                                isRequired
                                label={"Zip code"}
                                placeholder="Zip code"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="address"
                                isRequired
                                label={"DBA Address"}
                                placeholder="Street Address"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="city"
                                isRequired
                                label={"City"}
                                placeholder="City"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="state"
                                isRequired
                                label={"State"}
                                placeholder="State"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="zip"
                                isRequired
                                label={"Zip code"}
                                placeholder="Zip code"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="email"
                                isRequired
                                label={"Email Contact"}
                                placeholder="example@gmail.com"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            {/* <InputText
                                form={form} name="businessPhone"
                                isRequired
                                label={"Business Phone Number"}
                                placeholder="012-3455-789"
                            /> */}

                            <InputPhone
                                form={form} 
                                name="businessPhone"
                                isRequired
                                label={"Business Phone Number"}
                                placeholder="012-3455-789"
                            />
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                    <Col xs={12} md={12} lg={10}>
                            <div className='title_signup'>
                                Representative Informations
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="firstName"
                                isRequired
                                label={"First Name"}
                                placeholder="First Name"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="lastName"
                                isRequired
                                label={"Last Name"}
                                placeholder="Last Name"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="position"
                                isRequired
                                label={"Title/Position"}
                                placeholder="President/Manager/Owner"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="contactPhone"
                                isRequired
                                label={"Contact Phone Number"}
                                placeholder="012-3455-789"
                            />
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                    <Col xs={12} md={12} lg={10}>
                            <div className="signup_bottom">
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

export default Generalnformation