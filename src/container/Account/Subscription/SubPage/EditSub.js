import React, { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";

import "./EditSub.scss";

function EditSub() {
  const [billingPlan, setBillingPlan] = useState({
    basicMonthly: false,
    basicYearly: false,
    medMonthly: false,
    medYearly: false,
    proMonthly: false,
    proYearly: false,
  });

  const handleSubscriptionChange = (e) => {
    // const { name, checked } = e.target;
    alert("CHƯA LÀM");
  };

  const {
    basicMonthly,
    basicYearly,
    medMonthly,
    medYearly,
    proMonthly,
    proYearly,
  } = billingPlan;

  return (
    <div className="sub_edit">
      <h1>Change Subscription</h1>
      <Table className="mt-4">
        <thead className>
          <tr>
            <th className="p-3">Packages</th>
            <th className="p-3 text-center">Billed Monthly</th>
            <th className="p-3 text-center">Billed Annually</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sub_plan">Basic - 8 Staffs</td>
            <td className="text-center">
              <Form.Check type="radio" id="check-api-radio">
                <Form.Check.Input
                  type="radio"
                  name="basicMonthly"
                  onChange={handleSubscriptionChange}
                  value={basicMonthly}
                />
                <Form.Check.Label>$49.95</Form.Check.Label>
              </Form.Check>
            </td>
            <td className="text-center">
              <Form.Check type="radio" id="check-api-radio">
                <Form.Check.Input
                  type="radio"
                  name="basicYearly"
                  onChange={handleSubscriptionChange}
                  value={basicYearly}
                />
                <Form.Check.Label>$499.95</Form.Check.Label>
              </Form.Check>
            </td>
          </tr>
          <tr>
            <td className="sub_plan">Medium - 15 Staffs</td>
            <td className="text-center">
              <Form.Check type="radio" id="check-api-radio">
                <Form.Check.Input
                  type="radio"
                  name="medMonthly"
                  onChange={handleSubscriptionChange}
                  value={medMonthly}
                />
                <Form.Check.Label>$89.95</Form.Check.Label>
              </Form.Check>
            </td>
            <td className="text-center">
              <Form.Check type="radio" id="check-api-radio">
                <Form.Check.Input
                  type="radio"
                  name="medYearly"
                  onChange={handleSubscriptionChange}
                  value={medYearly}
                />
                <Form.Check.Label>$899.95</Form.Check.Label>
              </Form.Check>
            </td>
          </tr>
          <tr>
            <td className="sub_plan">Professional - 16+ Staffs</td>
            <td className="text-center">
              <Form.Check type="radio" id="check-api-radio">
                <Form.Check.Input
                  type="radio"
                  name="proMonthly"
                  onChange={handleSubscriptionChange}
                  value={proMonthly}
                />
                <Form.Check.Label>$94.95</Form.Check.Label>
              </Form.Check>
            </td>
            <td className="text-center">
              <Form.Check type="radio" id="check-api-radio">
                <Form.Check.Input
                  type="radio"
                  name="proYearly"
                  onChange={handleSubscriptionChange}
                  value={proYearly}
                />
                <Form.Check.Label>$949.95</Form.Check.Label>
              </Form.Check>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-end pt-4">
        <Button className="btn btn_cancel">Cancel</Button>
        <Button className="btn btn_save">Save</Button>
      </div>
    </div>
  );
}

export default EditSub;