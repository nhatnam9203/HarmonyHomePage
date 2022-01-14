import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import InputPhone from "@/components/InputPhone";
import InputDatePicker from "@/components/InputDatePicker";

import Dropzone from "react-dropzone";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import iconPerson from "@/assets/images/iconPerson.png";
import { uploadImageProduct } from "@/actions/retailerActions";
import Loading from "@/components/Loading";
import moment from "moment";
import "./index.scss";

const PrincipalInformation = ({
    updateValues,
    goBack,
    form,
    errors,
}) => {

    const {
        loadingUpfile,
    } = useSelector((state) => state.retailer);

    const {
        stateList = []
    } = useSelector(state => state.pricing);


    const onSubmit = (values, e) => {
        e?.preventDefault();

        let principalInfo = [
            ...values?.principalInfor
        ];

        for (let i = 0; i < principalInfo?.length; i++) {
            principalInfo[i].dateOfBirth = moment(principalInfo[i].dateOfBirth).format("MM/DD/YYYY");
            principalInfo[i].fileId = parseInt(principalInfo[i].fileId);
        }

        updateValues("prinicipalInfo", principalInfo);
    }

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "principalInfor",
    });

    const stateData = stateList.map((obj) => ({
        label: obj?.name,
        value: obj?.stateId
    }));


    return (
        <>
            {loadingUpfile && <Loading isFullLoading />}
            <div className='general_information'>
                <Form onSubmit={form.handleSubmit(onSubmit)}>
                    <Container>
                        <Row className="justify-content-md-center">
                            {
                                fields.map((field, index) => {
                                    return (
                                        <ItemPrinciPal
                                            key={index + "principalinfor"}
                                            form={form}
                                            index={index}
                                            errors={errors}
                                            remove={remove}
                                            stateData={stateData}
                                        />
                                    )
                                })
                            }

                            <Col xs={12} md={6} lg={5}>
                                <Button
                                    className="submit_signup text-center font-weight-bold"
                                    style={{ fontSize: 14, marginLeft: -12, marginTop: 16 }}
                                    onClick={() => append(fields.length)}
                                >
                                    <img src={iconPerson}
                                        alt='img'
                                        className='iconPerson'
                                    />
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
        </>
    )
};

const ItemPrinciPal = ({ form, errors, index, remove, stateData = [] }) => {
    const dispatch = useDispatch();

    const [fileId, setFileId] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);


    const refMobilePhone = React.useRef();
    const refHomePhone = React.useRef();

    const uploadImage = (fileUpload) => {
        let file = fileUpload[0];
        let formData = new FormData();
        formData.append("Filename3", file);
        dispatch(uploadImageProduct(formData, callBackUploadImage));
    }

    const callBackUploadImage = (data) => {
        form.setValue(`principalInfor.${index}.fileId`, data?.fileId);
        setFileId(data?.fileId);
        setImageUrl(data?.url);
    }

    return (
        <>
            <Col style={{ marginTop: index !== 0 ? 45 : 0 }} xs={12} md={12} lg={10}>
                <div style={{ psition: "relative" }} className='title_signup'>
                    Principal Information
                </div>
                {index !== 0 && <div onClick={() => remove(index)} className='txtRemove'>Remove</div>}
            </Col>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.firstName`}
                        isRequired
                        label={"First Name"}
                        placeholder="First Name"
                        error={errors?.principalInfor?.[index]?.firstName}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.lastName`}
                        isRequired
                        label={"Last Name"}
                        placeholder="Last Name"
                        error={errors?.principalInfor?.[index]?.lastName}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.position`}
                        isRequired
                        label={"Title/Position"}
                        placeholder="President/Manager/Owner"
                        error={errors?.principalInfor?.[index]?.position}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.ownership`}
                        isRequired
                        label={"Ownership (%)"}
                        placeholder=""
                        error={errors?.principalInfor?.[index]?.ownership}
                        mask="999999"
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputPhone
                        form={form}
                        name={`principalInfor.${index}.homePhone`}
                        label={"Home Phone Number"}
                        placeholder="012-3455-789"
                        error={errors?.principalInfor?.[index]?.homePhone}
                        ref={refHomePhone}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputPhone
                        form={form}
                        name={`principalInfor.${index}.mobilePhone`}
                        isRequired
                        label={"Contact Phone Number"}
                        placeholder="012-3455-789"
                        error={errors?.principalInfor?.[index]?.mobilePhone}
                        ref={refMobilePhone}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputDatePicker
                        form={form}
                        name={`principalInfor.${index}.dateOfBirth`}
                        label={"Date of birth"}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.email`}
                        isRequired
                        label={"Email Address"}
                        placeholder="example@gmail.com"
                        error={errors?.principalInfor?.[index]?.email}
                    />
                </Col>


                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.address`}
                        isRequired
                        label={"Address"}
                        placeholder="Street Address"
                        error={errors?.principalInfor?.[index]?.address}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.city`}
                        isRequired
                        label={"City"}
                        placeholder="City"
                        error={errors?.principalInfor?.[index]?.city}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputSelect
                        data={stateData}
                        form={form}
                        defaultValue=""
                        label="State"
                        name={`principalInfor.${index}.state`}
                        isRequired
                        width="100%"
                        error={errors?.principalInfor?.[index]?.state}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.zip`}
                        isRequired
                        label={"Zip code"}
                        placeholder="Zip code"
                        error={errors?.principalInfor?.[index]?.zip}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.yearAtThisAddress`}
                        isRequired
                        label={"Year at this address"}
                        placeholder=""
                        error={errors?.principalInfor?.[index]?.yearAtThisAddress}
                        mask="99"
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.ssn`}
                        isRequired
                        label='Social Security Number (SSN)'
                        placeholder=""
                        error={errors?.principalInfor?.[index]?.ssn}
                        mask="9999-99-9999"
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputText
                        form={form}
                        name={`principalInfor.${index}.driverLicense`}
                        isRequired
                        label='Driver License Number'
                        placeholder=""
                        error={errors?.principalInfor?.[index]?.driverLicense}
                    />
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <InputSelect
                        data={stateData}
                        form={form}
                        defaultValue=""
                        label="State Issued"
                        name={`principalInfor.${index}.stateIssued`}
                        isRequired
                        width="100%"
                        error={errors?.principalInfor?.[index]?.stateIssued}
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
                                    <div>
                                        <div
                                            className="images_inventory_dropzone_2"
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />
                                            <img src={icon_upload} atl="uploadImage" />
                                            <p>Upload image</p>
                                        </div>
                                        {errors?.principalInfor?.[index]?.fileId && <div style={{ color: "red", fontWeight: "600" }}>{"Please update void check"}</div>}
                                    </div>
                                )
                            }
                        }}
                    </Dropzone>

                </Col>

                <Col xs={12} md={6} lg={5}>
                </Col>

            </Row>

        </>

    )
}

export default PrincipalInformation