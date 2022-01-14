import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpPrincipalInfoSchema } from "@/util/schema";
import { useDispatch, useSelector } from "react-redux";
import { getStateId } from "@/util"
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import InputPhone from "@/components/InputPhone";
import InputDatePicker from "@/components/InputDatePicker";

import Dropzone from "react-dropzone";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import iconPerson from "@/assets/images/iconPerson.png";
import { uploadImageProduct } from "@/actions/retailerActions";
import "./index.scss";

const PrincipalInformation = () => {
    const dispatch = useDispatch();

    const [fileId, setFileId] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);


    const refContactPhone = React.useRef();
    const refHomePhone = React.useRef();

    const {
        stateList = []
    } = useSelector(state => state.pricing);

    const form = useForm({
        resolver: yupResolver(signUpPrincipalInfoSchema)
    });
    const errors = form.formState.errors;

    const uploadImage = (fileUpload) => {
        let file = fileUpload[0];
        let formData = new FormData();
        formData.append("Filename3", file);
        dispatch(uploadImageProduct(formData, callBackUploadImage));
    }

    const callBackUploadImage = (data) => {
        setFileId(data?.fileId);
        setImageUrl(data?.url);
    }


    const onSubmit = (values, e) => {
        e?.preventDefault();
    }


    const stateData = stateList.map((obj) => ({
        label: obj?.name,
        value: obj?.stateId
    }));


    return (
        <div className='general_information'>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={12} lg={10}>
                            <div className='title_signup'>
                                Principal Information
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
                            <InputText
                                form={form} name="ownership"
                                isRequired
                                label={"Ownership (%)"}
                                placeholder=""
                                error={errors?.ownership}
                                mask="999999"
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputPhone
                                form={form} name="homePhone"
                                label={"Home Phone Number"}
                                placeholder="012-3455-789"
                                ref={refHomePhone}
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
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            {/* <InputText
                                form={form} name="dateOfBirth"
                                isRequired
                                label={"Date of birth"}
                                placeholder=""
                            /> */}
                            <InputDatePicker
                                form={form}
                                name={"dateOfBirth"}
                                label={"Date of birth"}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="email"
                                isRequired
                                label={"Email Address"}
                                placeholder="example@gmail.com"
                                error={errors?.email}
                            />
                        </Col>


                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="address"
                                isRequired
                                label={"Address"}
                                placeholder="Street Address"
                                error={errors?.address}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="city"
                                isRequired
                                label={"City"}
                                placeholder="City"
                                error={errors?.city}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputSelect
                                data={stateData}
                                form={form}
                                defaultValue=""
                                label="State"
                                name="state"
                                isRequired
                                width="100%"
                                error={errors?.state}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="zip"
                                isRequired
                                label={"Zip code"}
                                placeholder="Zip code"
                                error={errors?.zip}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="yearAtThisAddress"
                                isRequired
                                label={"Year at this address"}
                                placeholder=""
                                error={errors?.yearAtThisAddress}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="ssn"
                                isRequired
                                label='Social Security Number (SSN)'
                                placeholder=""
                                error={errors?.ssn}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputText
                                form={form} name="driverLicense"
                                isRequired
                                label='Driver License Number'
                                placeholder=""
                                error={errors?.driverLicense}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <InputSelect
                                data={stateData}
                                form={form}
                                defaultValue=""
                                label="State Issued"
                                name="stateIssued"
                                isRequired
                                width="100%"
                                error={errors?.stateIssued}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <Form.Label className='lblInputText'>
                                {"Void Check"} <span className="input_form_required">*</span>
                            </Form.Label>
                            <Dropzone
                                accept={"image/jpeg, image/png , image/gif"}
                                multiple={false}
                                maxSize={10485760}
                                noDrag={true}
                                onDrop={(acceptedFiles) => {
                                    uploadImage(acceptedFiles);
                                }}
                            >
                                {({ getRootProps, getInputProps }) => {
                                    if (imageUrl) {
                                        return (
                                            <div
                                                {...getRootProps()}
                                            >
                                                <input {...getInputProps()} />
                                                <img src={imageUrl} alt='img' className='img-upload-bank' />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className="images_inventory_dropzone_2"
                                                {...getRootProps()}
                                            >
                                                <input {...getInputProps()} />
                                                <img src={icon_upload} atl="uploadImage" />
                                                <p>Upload image</p>
                                            </div>
                                        )
                                    }
                                }}
                            </Dropzone>
                            <Button
                                className="submit_signup text-center font-weight-bold"
                                style={{ fontSize: 14 }}
                            >
                                <img src={iconPerson} alt='img' style={{ width: 20, height: 20, marginRight: 6 }} />
                                Add Principal
                            </Button>
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

export default PrincipalInformation