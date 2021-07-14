import React from "react";
import Fade from "react-reveal/Fade";
import Title from "@/components/Title";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormEditInventory from "./FormEditInventory";
import { useFormik } from "formik";
import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const { inventoryDetail, subCategory } = useSelector(
    (state) => state.retailer
  );

  const formik = useFormik({
    initialValues: {
      name: "testdfhgfj",
      subCategory: [],
      sku: "",
      barCode: "",
      price: "",
      costPrice: "",
      quantity: "0",
      minThreshold: "0",
      maxThreshold: "0",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  React.useEffect(() => {
    formik.setFieldValue("name", inventoryDetail.name);
    formik.setFieldValue("sku", inventoryDetail.sku);
    formik.setFieldValue("barCode", inventoryDetail.barCode);
    formik.setFieldValue("price", inventoryDetail.price);
    formik.setFieldValue("costPrice", inventoryDetail.costPrice);
    formik.setFieldValue("quantity", inventoryDetail.quantity);
    formik.setFieldValue("minThreshold", inventoryDetail.minThreshold);
    formik.setFieldValue("maxThreshold", inventoryDetail.maxThreshold);
    formik.setFieldValue("subCategory", subCategory);
  }, []);

  return (
    <Fade>
      <div className="info_merchant_title">
        {" "}
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <Title style={{ color: "#333" }}>
        {inventoryDetail.name} - Edit details
      </Title>

      <Form onSubmit={() => {}}>
        <FormEditInventory formik={formik} />
        <div className="btn_group_edit_inventory">
          <Button variant="primary" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{ background: "#1366AE", color: "white" }}
          >
            Save
          </Button>
        </div>
      </Form>
    </Fade>
  );
};

export default Index;
