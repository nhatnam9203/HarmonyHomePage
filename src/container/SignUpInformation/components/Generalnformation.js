import React, { isValidElement } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { validateEmail } from "@/util";
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


const Generalnformation = ({
    form,
    errors,
    updateValues,
}) => {

    const [isSameBusinessAddress, setIsSameBusinessAddress] = React.useState(true);
    const [isSubmit, setIsSubmit] = React.useState(false);

    const refBusinessPhone = React.useRef();
    const refContactPhone = React.useRef();

    const {
        stateList = []
    } = useSelector(state => state.pricing);


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

    React.useEffect(() => {
        if (stateBusinessAddress) {
            form.setValue("stateDbaAddress", stateBusinessAddress)
        }
    }, [stateBusinessAddress])


    const onChangeIsSameBusinessAddress = (status) => {
        setIsSameBusinessAddress(status);
    }



    const checkValid = (values) => {
        if (isSameBusinessAddress) {
            for (const [key, value] of Object.entries(values)) {
                if (key !== "streetDbaAddress" && key !== "cityDbaAddress" && key !== "zipDbaAddress" && key !== "stateDbaAddress") {
                    if (!value) {
                        return false;
                    }
                }
            }
        } else {
            for (const [key, value] of Object.entries(values)) {
                if (!value) {
                    return false;
                }
            }
        }
        return true;
    }

    const checkErrors = () => {
        if (isSubmit) {
            validateErrors();
        }
    }

    const validateErrors = () => {
        const values = form.getValues();
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
                if (key == "email" && !validateEmail(value)) {
                    form.setError(key, { message: "email is invalid", type: "required" });
                } else {
                    form.clearErrors(key);
                }
            }
        }
    }

    const onSubmit = (e) => {
        e?.preventDefault();
        setIsSubmit(true);
        const values = form.getValues();

        let isValid = true;
        const valid = checkValid({
            ...values
        });


        if (!valid) {
            validateErrors();
            isValid = false;
        }

        if (isValid) {
            addGeneralInformation(values);
        }
    }

    const addGeneralInformation = (values) => {

        const phoneHeadeBusiness = refBusinessPhone?.current?.getValuePrefix();
        const phoneHeadContact = refContactPhone?.current?.getValuePrefix();
        const generalInfor = {
            businessName: values.businessName,
            businessAddress: {
                address: values.streetBusinessAddress,
                city: values.cityBusinessAddress,
                state: values.stateBusinessAddress,
                zip: values.zipBusinessAddress,
            },
            dbaAddress: {
                address: isSameBusinessAddress ? values.streetBusinessAddress : values.streetDbaAddress,
                city: isSameBusinessAddress ? values.cityBusinessAddress : values.cityDbaAddress,
                state: isSameBusinessAddress ? values.stateBusinessAddress : values.stateDbaAddress,
                zip: isSameBusinessAddress ? values.zipBusinessAddress : values.zipDbaAddress,
            },
            businessPhone: phoneHeadeBusiness + values.businessPhone,
            contactPhone: phoneHeadContact + values.contactPhone,
            doingBusiness: values.doingBusiness,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            position: values.position,
            tax: values.tax
        };

        updateValues("generalInfor", generalInfor);
    }

    const stateData = stateList.map((obj) => ({
        label: obj?.name,
        value: obj?.stateId
    }));


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
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="doingBusiness"
                                isRequired
                                label={"Doing Business As(DBA)"}
                                placeholder="DBA"
                                error={errors?.doingBusiness}
                                onBlur={checkErrors}
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
                                onBlur={checkErrors}
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
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="streetBusinessAddress"
                                isRequired
                                label={"Business Address(no P.O.Boxes)"}
                                placeholder="Street Address"
                                error={errors?.streetBusinessAddress}
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="cityBusinessAddress"
                                isRequired
                                label={"City"}
                                placeholder="City"
                                error={errors?.cityBusinessAddress}
                                onBlur={checkErrors}

                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputSelect
                                data={stateData}
                                form={form}
                                defaultValue=""
                                label="State"
                                name="stateBusinessAddress"
                                isRequired
                                width="100%"
                                error={errors?.stateBusinessAddress}
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="zipBusinessAddress"
                                isRequired
                                label={"Zip code"}
                                placeholder="Zip code"
                                error={errors?.zipBusinessAddress}
                                onBlur={checkErrors}
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

                                        <p>Same as Business Address</p>
                                    </div>
                                )}
                                error={errors?.streetDbaAddress}
                                valueVisible={isSameBusinessAddress ? streetBusinessAddress : null}
                                editable={!isSameBusinessAddress}
                                onBlur={checkErrors}
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
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputSelect
                                data={stateData}
                                form={form}
                                defaultValue=""
                                label="State"
                                name="stateDbaAddress"
                                isRequired
                                width="100%"
                                error={errors?.stateDbaAddress}
                                onBlur={checkErrors}
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
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="email"
                                isRequired
                                label={"Email Contact"}
                                placeholder="example@gmail.com"
                                error={errors?.email}
                                onBlur={checkErrors}
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
                                ref={refBusinessPhone}
                                onBlur={checkErrors}
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
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="lastName"
                                isRequired
                                label={"Last Name"}
                                placeholder="Last Name"
                                error={errors?.lastName}
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="position"
                                isRequired
                                label={"Title/Position"}
                                placeholder="President/Manager/Owner"
                                error={errors?.position}
                                onBlur={checkErrors}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputPhone
                                form={form} name="contactPhone"
                                isRequired
                                label={"Contact Phone Number"}
                                placeholder="012-3455-789"
                                error={errors?.contactPhone}
                                ref={refContactPhone}
                                onBlur={checkErrors}
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