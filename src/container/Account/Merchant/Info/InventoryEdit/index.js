import React from "react";
import Fade from "react-reveal/Fade";
import Title from "@/components/Title";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FormEditInventory from "./FormEditInventory";
import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const { inventoryDetail } = useSelector((state) => state.retailer);
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
        <FormEditInventory />
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
