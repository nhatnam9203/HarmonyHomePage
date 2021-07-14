import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "../Info.scss";
import "./style.scss";

const FormEditInventory = ({ formik }) => {
  return (
    <Row style={{ marginTop: 22, width: "90%" }}>
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
              value={formik.values.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Subcategory <span className="form_required">*</span>
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
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
              value={formik.values.sku}
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
              value={formik.values.barCode}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Price ($) <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              name="price"
              value={formik.values.price}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Cost Price ($) <span className="form_required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Cost Price"
              name="costPrice"
              value={formik.values.costPrice}
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
            <Form.Control
              type="text"
              placeholder="Quantity"
              name="quantity"
              value={formik.values.quantity}
            />
          </Form.Group>
          <Row>
            <Col xs={6} xl={6} className="h-100">
              <Form.Group>
                <Form.Label>
                  Low threshold <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Min Threshold"
                  name="minThreshold"
                  value={formik.values.minThreshold}
                />
              </Form.Group>
            </Col>
            <Col xs={6} xl={6} className="h-100">
              <Form.Group>
                <Form.Label>
                  High threshold <span className="form_required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Max Threshold"
                  name="maxThreshold"
                  value={formik.values.maxThreshold}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default FormEditInventory;
