import React from "react";
import Table from "react-bootstrap/Table";
import Title from "./Title";
import "./style.scss";

const ItemsOrdered = () => {
  return (
    <>
      <Title>Items Ordered</Title>
      <Table responsive className="mt-4">
        <thead className="thead_payment">
          <tr>
            <th className="th_payment">Product</th>
            <th className="th_payment">Price</th>
            <th className="th_payment">Qty</th>
            <th className="th_payment">Subtotal</th>
            <th className="th_payment">Tax</th>
            <th className="th_payment">Discount</th>
            <th className="th_payment">Total</th>
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default ItemsOrdered;
