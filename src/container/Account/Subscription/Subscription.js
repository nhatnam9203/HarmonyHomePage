import React from "react";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

import "./Subscription.scss";

function Subscription() {
  const history = useHistory();

  const handleBilling = () => {
    history.push("/account/subscription/billing");
  };

  return (
    <div className="sub">
      <h1>My Subscriptions</h1>
      <Table bordered className="mt-4">
        <thead>
          <tr>
            <th>Merchant ID</th>
            <th>Subscription Plan</th>
            <th>Next Payment Date</th>
            <th>Next Payment Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000000123</td>
            <td className="sub_plan">5 Staff</td>
            <td>Apr 9, 2020</td>
            <td>$34.95</td>
            <td>Active</td>
            <td>
              <button className="text_btn" onClick={handleBilling}>
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>000000124</td>
            <td className="sub_plan">Digital Web Marketing 2 Year</td>
            <td>Apr 9, 2020</td>
            <td>$69.00</td>
            <td>Canceled</td>
            <td className="text_btn" onClick={handleBilling}>
              Renew
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Subscription;
