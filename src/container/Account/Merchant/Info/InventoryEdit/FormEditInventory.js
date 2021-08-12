import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectOption from "./SelectOption";
import InputMask from "react-input-mask";
import Dropzone from "react-dropzone";
import Error from "./Error";
import { isEmpty } from "lodash";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import icon_trash from "@/assets/images/retailer/trash.png";
import icon_eye from "@/assets/images/retailer/eye.png";
import InputPrice from "./widget/InputPrice";
import Visibility from "./widget/Visibility";

import "../Info.scss";
import "./style.scss";

const FormEditInventory = ({
    subCategory = [],
    name,
    sku,
    barCode,
    price,
    // costPrice,
    quantity,
    minThreshold,
    maxThreshold,
    categoryId,
    images,
    description,
    quantities,
    visibility,
    isVisibleInventoryAdd = false,
    handleChange = () => { },
    uploadImage = () => { },
    selectImage = () => { },
    openNewCategory = () => { },
    deleteImage = () => { },
    onBlurInputName = () => { },
}) => {

    return (
        <Row className="formEditInventory" style={{ marginTop: 22, width: "90%" }}>
            <Col xl={6} xs={12} className="h-100">
                <div className="sign_up_form1">

                    {/******************** PRODUCT NAME ********************/}
                    <Form.Group style={{ position: "relative" }}>
                        <Form.Label>
                            Product name <span className="form_required">*</span>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            onBlur={onBlurInputName}
                            style={{ borderColor: (isEmpty(name) && !isVisibleInventoryAdd) ? "red" : "#ced4da" }}
                        />
                        {isEmpty(name) && !isVisibleInventoryAdd && <Error />}
                    </Form.Group>

                    {/******************** DESCRIPTION ********************/}
                    <Form.Group style={{ position: "relative" }}>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            placeholder="Description"
                            name="description"
                            value={description || ""}
                            onChange={(e) => handleChange("description", e.target.value)}
                        />
                    </Form.Group>

                    {/******************** SUB CATEGORY ********************/}
                    <Form.Group>
                        <Form.Label>
                            Subcategory <span className="form_required">*</span>
                        </Form.Label>
                        <br />
                        <div style={{ position: "relative" }}>
                            <SelectOption
                                value={categoryId}
                                subCategory={subCategory}
                                onSelected={(categoryId) =>
                                    handleChange("categoryId", categoryId)
                                }
                            />
                            <div onClick={openNewCategory} className="button_new_category">
                                New category
                            </div>
                        </div>
                    </Form.Group>

                    {/******************** SKU ********************/}
                    <Form.Group style={{ position: "relative" }}>
                        <Form.Label>
                            SKU <span className="form_required">*</span>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="SKU"
                            name="sku"
                            value={sku}
                            onChange={(e) => handleChange("sku", e.target.value)}
                            style={{ borderColor: (isEmpty(sku) && !isVisibleInventoryAdd) ? "red" : "#ced4da" }}
                        />
                        {isEmpty(sku) && !isVisibleInventoryAdd && <Error />}
                    </Form.Group>

                    {/******************** BARCODE ********************/}
                    <Form.Group style={{ position: "relative" }}>
                        <Form.Label>
                            Barcode <span className="form_required">*</span>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bar code"
                            name="barCode"
                            value={barCode}
                            onChange={(e) => handleChange("barCode", e.target.value)}
                            style={{ borderColor: (isEmpty(barCode) && !isVisibleInventoryAdd) ? "red" : "#ced4da" }}
                        />
                        {isEmpty(barCode) && !isVisibleInventoryAdd && <Error />}
                    </Form.Group>


                    {/******************** VISIBILITY ********************/}
                    <Form.Group>
                        <Visibility
                            visibility={visibility}
                            onChange={(value) => handleChange("visibility", value)}
                        />
                    </Form.Group>


                    {/******************** Price ********************/}
                    {
                        (!quantities || quantities.length === 0) &&
                        <Form.Group style={{ position: "relative" }}>
                            <Form.Label>
                                Price <span className="form_required">*</span>
                            </Form.Label>
                            <InputPrice
                                value={price}
                                handleChange={(value) => handleChange("price", value)}
                                style={{ width: '100%', height: 57, color: '#404040' }}
                            />
                        </Form.Group>
                    }

                </div>
            </Col>

            <Col xl={6} xs={12} className="h-100">
                <div className="sign_up_form1">

                    {/******************** QUANTITY ********************/}
                    {
                        (!quantities || quantities.length === 0) &&
                        <Form.Group style={{ position: "relative" }}>
                            <Form.Label>
                                Items in stock <span className="form_required">*</span>
                            </Form.Label>
                            <MaskInput
                                type="text"
                                placeholder="Quantity"
                                name="quantity"
                                value={quantity}
                                onChange={(e) => handleChange("quantity", e.target.value)}
                                disabled
                                style={{ borderColor: (typeof quantity !== "number" && isEmpty(quantity) && !isVisibleInventoryAdd) ? "red" : "#ced4da", }}
                            />
                            {typeof quantity !== "number" && isEmpty(quantity) && !isVisibleInventoryAdd && <Error />}
                        </Form.Group>
                    }

                    <Row>
                        <Col xs={6} xl={6} className="h-100">
                            {/******************** MIN THRESHOLD ********************/}
                            <Form.Group>
                                <Form.Label>
                                    Low threshold <span className="form_required">*</span>
                                </Form.Label>
                                <MaskInput
                                    placeholder="Low threshold"
                                    name="minThreshold"
                                    value={minThreshold}
                                    onChange={(e) => handleChange("minThreshold", e.target.value)}
                                    style={{ borderColor: typeof minThreshold !== "number" && isEmpty(minThreshold) && !isVisibleInventoryAdd ? "red" : "#ced4da", }}
                                />
                                {typeof minThreshold !== "number" && !isVisibleInventoryAdd && isEmpty(minThreshold) && (
                                    <Error />
                                )}
                            </Form.Group>
                        </Col>

                        <Col xs={6} xl={6} className="h-100">
                            {/******************** HIGH THRESHOLD ********************/}
                            <Form.Group>
                                <Form.Label>
                                    High threshold <span className="form_required">*</span>
                                </Form.Label>
                                <MaskInput
                                    placeholder="High threshold"
                                    name="maxThreshold"
                                    value={maxThreshold}
                                    onChange={(e) => handleChange("maxThreshold", e.target.value)}
                                    style={{ borderColor: typeof maxThreshold !== "number" && isEmpty(maxThreshold) && !isVisibleInventoryAdd ? "red" : "#ced4da", }}
                                />
                                {typeof maxThreshold !== "number" && isEmpty(maxThreshold) && !isVisibleInventoryAdd && (<Error />)}
                            </Form.Group>
                        </Col>

                        {/******************** IMAGES LIST ********************/}
                        <div className="images_inventory">
                            {images.map((image) => (
                                <div
                                    key={image.fileId + "image"}
                                    className="images_inventory_container_images"
                                >
                                    <img
                                        onClick={() => selectImage(image)}
                                        src={image.imageUrl}
                                        alt="image"
                                    />
                                    <img
                                        onClick={() => deleteImage(image)}
                                        src={icon_trash}
                                        alt="image"
                                    />
                                    {image.isDefault && <img src={icon_eye} alt="image" />}
                                </div>
                            ))}

                            {/******************** BUTTON UPLOAD ********************/}
                            <Dropzone
                                accept={"image/jpeg, image/png , image/gif"}
                                multiple={true}
                                maxSize={10485760}
                                noDrag={true}
                                onDrop={(acceptedFiles) => {
                                    uploadImage(acceptedFiles);
                                }}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div
                                        className="images_inventory_dropzone"
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />
                                        <img src={icon_upload} atl="uploadImage" />
                                        <p>Upload image</p>
                                    </div>
                                )}
                            </Dropzone>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

const MaskInput = (props) => (
    <InputMask
        mask="99999999999999999"
        maskChar={null}
        value={props.value}
        onChange={props.onChange}
    >
        {
            (inputProps) => (<Form.Control style={props.style} placeholder={props.placeholder}   {...inputProps} type="text" />)
        }
    </InputMask>
);

export default FormEditInventory;
