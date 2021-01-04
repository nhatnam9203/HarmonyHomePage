import React, { useState, useEffect } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPackageAction } from "../../../../actions/userActions";
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

  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, packageList } = useSelector((state) => state.package);

  console.log("id", packageList);

  const handleSubscriptionChange = (e) => {
    // const { name, checked } = e.target;
    console.log("eee", e.target);
    alert("CHƯA LÀM");
  };

  useEffect(() => {
    dispatch(getPackageAction(id));
  }, [dispatch]);

  const {
    basicMonthly,
    basicYearly,
    medMonthly,
    medYearly,
    proMonthly,
    proYearly,
  } = billingPlan;

  const renderPackage = packageList?.reverse()?.map((i) => (
    <tr key={i?.packageId}>
      <td className="sub_plan">{i?.packageName}</td>
      <td className="text-center">
        <Form.Check type="radio" id="check-api-radio">
          <Form.Check.Input
            type="radio"
            name={i?.packageId}
            onChange={handleSubscriptionChange}
            value="monthly"
          />
          <Form.Check.Label>${i?.pricing}</Form.Check.Label>
        </Form.Check>
      </td>
      <td className="text-center">
        <Form.Check type="radio" id="check-api-radio">
          <Form.Check.Input
            type="radio"
            name={i?.packageId}
            onChange={handleSubscriptionChange}
            value="annually"
          />
          <Form.Check.Label>
            ${`${(i?.pricing * i?.annually).toFixed(2)} `}
          </Form.Check.Label>
        </Form.Check>
      </td>
    </tr>
  ));

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
          {renderPackage}
          {/* <tr>
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
          </tr> */}
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
