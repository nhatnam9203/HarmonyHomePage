import React from "react";
import Table from "react-bootstrap/Table";

import "./Subscription.scss";

function Subscription() {
  return (
    <div className="sub">
      <h1>My Subscriptions</h1>
      <Table striped bordered hover className="mt-4 ml-3">
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
              <button className="text_btn edit_btn">Edit</button>
              <button className="text_btn pl-3">Extend</button>
            </td>
          </tr>
          <tr>
            <td>000000124</td>
            <td className="sub_plan">Digital Web Marketing 2 Year</td>
            <td>Apr 9, 2020</td>
            <td>$69.00</td>
            <td>Canceled</td>
            <td className="text_btn">Renew</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Subscription;
