import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputText from "@/components/InputText";
import { signUpBankInformation } from "@/util/schema";
import { yupResolver } from '@hookform/resolvers/yup';
import Dropzone from "react-dropzone";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import { uploadImageProduct } from "@/actions/retailerActions";
import Loading from "@/components/Loading";

import "./index.scss";


const BankInformaion = ({
    form,
    errors,
}) => {

    const dispatch = useDispatch();

    // const form = useForm({
    //     resolver: yupResolver(signUpBankInformation)
    // });

    const [fileId, setFileId] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);

    // const errors = form.formState.errors;

    const {
        loadingUpfile,
    } = useSelector((state) => state.retailer);


    const onSubmit = (values, e) => {
        e?.preventDefault();
        if (!fileId) {
            alert("PLEASE UPDATE VOID CHECK")
        } else {
            const bankInformation = {
                ...values,
                fileId
            };

            // dispatch(signup.updateBankInformation(bankInformation));
        }
    }

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

    return (
        <>
            {loadingUpfile && <Loading isFullLoading />}
            <div className='general_information'>
                <Form onSubmit={form.handleSubmit(onSubmit)}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={12} lg={10}>
                                <div className='title_signup'>
                                    Bank Information
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col xs={12} md={6} lg={5}>
                                <InputText
                                    form={form}
                                    name="accountHolderName"
                                    placeholder=""
                                    error={errors?.accountHolderName}
                                    label='Account Holder Name'
                                    isRequired
                                />
                            </Col>

                            <Col xs={12} md={6} lg={5}>
                                <InputText
                                    form={form}
                                    name="bankName"
                                    placeholder=""
                                    error={errors?.bankName}
                                    label='Bank Name'
                                    isRequired
                                />
                            </Col>

                            <Col xs={12} md={6} lg={5}>
                                <InputText
                                    form={form}
                                    name="routingNumber"
                                    placeholder=""
                                    error={errors?.routingNumber}
                                    label='Routing Number (ABA)'
                                    isRequired
                                />
                            </Col>

                            <Col xs={12} md={6} lg={5}>
                                <InputText
                                    form={form}
                                    name="accountNumber"
                                    placeholder=""
                                    error={errors?.accountNumber}
                                    label='Account Number (DDA)'
                                    isRequired
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
        </>

    )
};

export default BankInformaion;
