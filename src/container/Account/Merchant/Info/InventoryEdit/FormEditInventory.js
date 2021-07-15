import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectOption from "./SelectOption";
import InputMask from "react-input-mask";
import CurrencyInput from "react-currency-masked-input";
import Dropzone from "react-dropzone";
import { isEmpty } from "lodash";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import icon_trash from "@/assets/images/retailer/trash.png";
import icon_eye from "@/assets/images/retailer/eye.png";
import "../Info.scss";
import "./style.scss";

const FormEditInventory = ({
  subCategory = [],
  name,
  sku,
  barCode,
  price,
  costPrice,
  quantity,
  minThreshold,
  maxThreshold,
  categoryId,
  images,
  handleChange = () => {},
  uploadImage = () => {},
  selectImage = () => {},
  openNewCategory = () => {},
  deleteImage = () => {},
}) => {
  return (
    <Row className="formEditInventory" style={{ marginTop: 22, width: "90%" }}>
      <Col xl={6} xs={12} className="h-100">
        <div className="sign_up_form1">
          <Form.Group>
            <Form.Label>
              Product name <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={{ borderColor: isEmpty(name) ? "red" : "#ced4da" }}
            />
          </Form.Group>
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

            {/* <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group>
            <Form.Label>
              SKU <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="SKU"
              name="sku"
              value={sku}
              onChange={(e) => handleChange("sku", e.target.value)}
              style={{ borderColor: isEmpty(sku) ? "red" : "#ced4da" }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Barcode <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Bar code"
              name="barCode"
              value={barCode}
              onChange={(e) => handleChange("barCode", e.target.value)}
              style={{ borderColor: isEmpty(barCode) ? "red" : "#ced4da" }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Price ($) <span className="form_required">*</span>
            </Form.Label>
            <CurrencyInput
              name="price"
              id="price"
              type="text"
              className="currentInput"
              onChange={(e) => handleChange("price", e.target.value)}
              defaultValue={price}
              placeholder="0.00"
              style={{ borderColor: isEmpty(price) ? "red" : "#ced4da" }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Cost Price ($) <span className="form_required">*</span>
            </Form.Label>
            <br />
            <CurrencyInput
              name="costPrice"
              id="costPrice"
              type="text"
              className="currentInput"
              onChange={(e) => handleChange("costPrice", e.target.value)}
              defaultValue={costPrice}
              placeholder="0.00"
              style={{ borderColor: isEmpty(costPrice) ? "red" : "#ced4da" }}
            />
          </Form.Group>
          <Form.Group></Form.Group>
        </div>
      </Col>
      <Col xl={6} xs={12} className="h-100">
        <div className="sign_up_form1">
          <Form.Group>
            <Form.Label>
              Items in stock <span className="form_required">*</span>
            </Form.Label>
            <MaskInput
              type="text"
              placeholder="Quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
              style={{
                borderColor:
                  typeof quantity !== "number" && isEmpty(quantity)
                    ? "red"
                    : "#ced4da",
              }}
            />
          </Form.Group>
          <Row>
            <Col xs={6} xl={6} className="h-100">
              <Form.Group>
                <Form.Label>
                  Low threshold <span className="form_required">*</span>
                </Form.Label>
                <MaskInput
                  type="text"
                  placeholder="Low Threshold"
                  name="minThreshold"
                  value={minThreshold}
                  onChange={(e) => handleChange("minThreshold", e.target.value)}
                  style={{
                    borderColor:
                      typeof minThreshold !== "number" && isEmpty(minThreshold)
                        ? "red"
                        : "#ced4da",
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={6} xl={6} className="h-100">
              <Form.Group>
                <Form.Label>
                  High threshold <span className="form_required">*</span>
                </Form.Label>
                <MaskInput
                  type="text"
                  placeholder="High Threshold"
                  name="maxThreshold"
                  value={maxThreshold}
                  onChange={(e) => handleChange("maxThreshold", e.target.value)}
                  style={{
                    borderColor:
                      typeof maxThreshold !== "number" && isEmpty(maxThreshold)
                        ? "red"
                        : "#ced4da",
                  }}
                />
              </Form.Group>
            </Col>
            <div className="images_inventory">
              {images.map((image) => (
                <div
                  key={image.id + "image"}
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
                </div>
              ))}

              <Dropzone
                accept={"image/jpeg, image/png , image/gif"}
                multiple={false}
                maxFiles={1}
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
    {(inputProps) => (
      <Form.Control
        style={props.style}
        placeholder={props.placeholder}
        {...inputProps}
        type="text"
      />
    )}
  </InputMask>
);

export default FormEditInventory;
