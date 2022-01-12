import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpGeneralInfoSchema, signUpGeneralInfoSchema2 } from "@/util/schema";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import InputPhone from "@/components/InputPhone";
import checkBox from "@/assets/images/check-box.png";
import checkBoxEmpty from "@/assets/images/check-box-empty.png";
import "./index.scss";

const merchantTypeGroup = [
    { value: "SalonPos", label: "Salon POS" },
    { value: "Retailer", label: "Retailer" },
    { value: "Restaurant", label: "Table management" },
]


const Generalnformation = () => {

    const [schemaValidate, setSchemaValidate] = React.useState(signUpGeneralInfoSchema([]));
    const [isSameBusinessAddress, setIsSameBusinessAddress] = React.useState(true);

    const form = useForm({
        resolver: yupResolver(schemaValidate)
    });

    const errors = form.formState.errors;


    const streetBusinessAddress = useWatch({
        control: form.control,
        name: 'streetBusinessAddress'
    });

    const cityBusinessAddress = useWatch({
        control: form.control,
        name: 'cityBusinessAddress'
    });

    const zipBusinessAddress = useWatch({
        control: form.control,
        name: 'zipBusinessAddress'
    });

    const stateBusinessAddress = useWatch({
        control: form.control,
        name: 'stateBusinessAddress'
    });

    const onBlurStateBusinessAddress = () => {
        if (stateBusinessAddress && isSameBusinessAddress) {
            form.setValue("stateDbaAddress", stateBusinessAddress);
        }
    }


    const onChangeIsSameBusinessAddress = (status) => {
        setIsSameBusinessAddress(status);
        if (!status) {
            form.setValue("streetDbaAddress", "");
            form.setValue("cityDbaAddress", "");
            form.setValue("zipDbaAddress", "");
            form.setValue("stateDbaAddress", "");
            setSchemaValidate(signUpGeneralInfoSchema());
        } else {
            setSchemaValidate(signUpGeneralInfoSchema2())
        }
    }



    const checkValid = (values) => {
        for (const [key, value] of Object.entries(values)) {
            if (!value) {
                return false;
            }
        }
        return true;
    }

    const onSubmit = (e) => {
        e?.preventDefault();
        const values = form.getValues();

        let isValid = true;
        const valid = checkValid({
            ...values
        });


        if (!valid) {
            for (const [key, value] of Object.entries({ ...values })) {
                if (!value) {
                    if (isSameBusinessAddress) {
                        if (key !== "streetDbaAddress" && key !== "cityDbaAddress" && key !== "zipDbaAddress" && key !== "stateDbaAddress") {
                            form.setError(key, { message: "required", type: "required" });
                        }
                    } else {
                        form.setError(key, { message: "required", type: "required" });
                    }
                } else {
                    form.clearErrors(key);
                }
            }
            isValid = false;
        }

        if (isValid) {

        }
    }


    return (
        <div className='general_information'>
            <Form onSubmit={(onSubmit)}>
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
                                error={errors?.businessName}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="doingBusiness"
                                isRequired
                                label={"Doing Business As(DBA)"}
                                placeholder="DBA"
                                error={errors?.doingBusiness}
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
                                error={errors?.tax}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="streetBusinessAddress"
                                isRequired
                                label={"Business Address(no P.O.Boxes"}
                                placeholder="Street Address"
                                error={errors?.streetBusinessAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="cityBusinessAddress"
                                isRequired
                                label={"City"}
                                placeholder="City"
                                error={errors?.cityBusinessAddress}

                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="stateBusinessAddress"
                                isRequired
                                label={"State"}
                                placeholder="State"
                                error={errors?.stateBusinessAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="zipBusinessAddress"
                                isRequired
                                label={"Zip code"}
                                placeholder="Zip code"
                                error={errors?.zipBusinessAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="streetDbaAddress"
                                isRequired
                                label={"DBA Address"}
                                placeholder="Street Address"
                                renderRight={() => (
                                    <div className="sameAsDBA">
                                        <img
                                            onClick={() => onChangeIsSameBusinessAddress(!isSameBusinessAddress)}
                                            src={isSameBusinessAddress ? checkBox : checkBoxEmpty} alt='img'
                                        />

                                        <p>Sam as Business Address</p>
                                    </div>
                                )}
                                error={errors?.streetDbaAddress}
                                valueVisible={isSameBusinessAddress ? streetBusinessAddress : null}
                                editable={!isSameBusinessAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="cityDbaAddress"
                                isRequired
                                label={"City"}
                                placeholder="City"
                                error={(errors?.cityDbaAddress)}
                                valueVisible={isSameBusinessAddress ? cityBusinessAddress : null}
                                editable={!isSameBusinessAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="stateDbaAddress"
                                isRequired
                                label={"State"}
                                placeholder="State"
                                error={(errors?.stateDbaAddress)}
                                editable={!isSameBusinessAddress}
                                valueVisible={isSameBusinessAddress ? stateBusinessAddress : null}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="zipDbaAddress"
                                isRequired
                                label={"Zip code"}
                                placeholder="Zip code"
                                error={(errors?.zipDbaAddress)}
                                valueVisible={isSameBusinessAddress ? zipBusinessAddress : null}
                                editable={!isSameBusinessAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="email"
                                isRequired
                                label={"Email Contact"}
                                placeholder="example@gmail.com"
                                error={errors?.email}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputPhone
                                form={form}
                                name="businessPhone"
                                isRequired
                                label={"Business Phone Number"}
                                placeholder="012-3455-789"
                                error={errors?.businessPhone}
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
                                error={errors?.firstName}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="lastName"
                                isRequired
                                label={"Last Name"}
                                placeholder="Last Name"
                                error={errors?.lastName}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="position"
                                isRequired
                                label={"Title/Position"}
                                placeholder="President/Manager/Owner"
                                error={errors?.position}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputPhone
                                form={form} name="contactPhone"
                                isRequired
                                label={"Contact Phone Number"}
                                placeholder="012-3455-789"
                                error={errors?.contactPhone}
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