import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

function EditSub() {
  const [billingPlan, setBillingPlan] = useState({});

  const [basicMonthly, setBasicMonthly] = useState(false);
  const [basicYearly, setBasicYearly] = useState(false);
  const [medMonthly, setMedMonthly] = useState(false);
  const [medYearly, setMedYearly] = useState(false);
  const [proMonthly, setProMonthy] = useState(false);
  const [proYearly, setProYearly] = useState(false);

  const handleSubscriptionChange = (e) => {
    const { name, checked } = e.target;
    console.log("Name".name);
    console.log(e.target.checked);

    // switch (name) {
    //     case basicMonthly:

    //         break;

    //     default:
    //         break;
    // }
  };

  return (
    <div>
      <h1>Change Subscription</h1>
      <Table bordered responsive className="mt-4">
        <thead className>
          <tr>
            <th className="p-3">Packages</th>
            <th className="p-3">Billed Monthly</th>
            <th className="p-3">Billed Annually</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sub_plan">Basic - 8 Staffs</td>
            <td>
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
            <td>
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
            <td>
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
            <td>
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
            <td>
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
            <td>
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
    </div>
  );
}

export default EditSub;
