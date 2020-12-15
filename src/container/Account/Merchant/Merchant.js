import React from "react";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

import "./Merchant.scss";

function Merchant() {
  const history = useHistory();

  return (
    <div className="merchant">
      <h1>My Merchant</h1>
      <Table striped bordered hover className="mt-4 ml-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Business name</th>
            <th>Email</th>
            <th>Contact phone</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1231412312</td>
            <td>Mekira Nails & Spa</td>
            <td>duongwiliam@gmail.com</td>
            <td>+1347-853-235</td>
            <td>Active</td>
            <td className="text-center">
              <button
                className="text_btn"
                onClick={() => history.push("/account/merchant/123123")}
              >
                View
              </button>
            </td>
          </tr>
          <tr>
            <td>1231412313</td>
            <td>Trenailslounge</td>
            <td>businesshp@gmail.com</td>
            <td>+1347-853-235</td>
            <td>Active</td>
            <td className="text-center">
              <button
                className="text_btn"
                onClick={() => history.push("/account/merchant/3422312")}
              >
                View
              </button>
            </td>
          </tr>
          <tr>
            <td>1231412314</td>
            <td>Trenailslounge Nails & Spa</td>
            <td>businesshp@gmail.com</td>
            <td>+1347-853-235</td>
            <td>Active</td>
            <td className="text-center">
              <button
                className="text_btn "
                onClick={() => history.push("/account/merchant/67843")}
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Merchant;
