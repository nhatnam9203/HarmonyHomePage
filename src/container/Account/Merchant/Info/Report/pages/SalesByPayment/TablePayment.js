import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import sortIcon from "@/assets/images/sort.png";
import "./style.scss";

const TablePayment = ({
  data = [],
  onClickSort = () => {},
  valueSort = "ASC",
  summary,
  typeSort_payment_method,
}) => {
  let tbodies = null;

  if (data.length > 0) {
    tbodies = data.map((state, index) => {
      const details = state.details ? Object.values(state.details) : null;
      let row = null;

      if (details) {
        row = details.map((detail, i) => {
          let renderDate =
            i === 0 ? (
              <td className="td_payment_rowspan" rowSpan={details.length + 1}>
                {moment(state.date).format("MMMM DD, YYYY")}
              </td>
            ) : null;
          return (
            <tr key={"row" + i}>
              {renderDate}
              <td className="td_payment">{detail.paymentMethod}</td>
              <td className="td_payment">{detail.transactions}</td>
              <td className="td_payment">{`$ ${detail.grossPayment}`}</td>
              <td className="td_payment">{`$ ${detail.refund}`}</td>
              <td className="td_payment">{`$ ${detail.netPayment}`}</td>
            </tr>
          );
        });
      }

      return (
        <tbody className="tbody_payment" key={index}>
          {row}
        </tbody>
      );
    });
  }
  return (
    <div>
      <Table responsive className="mt-4">
        <thead className="thead_payment">
          <tr>
            <th
              onClick={() => onClickSort(null, "date")}
              className="th_payment th_payment_sort"
            >
              Date
              <img
                alt={"image sort"}
                style={{
                  transform:
                    valueSort === "ASC" ? "rotate(180deg)" : "rotate(0deg)",
                }}
                src={sortIcon}
              />
            </th>
            <th className="th_payment">Payment</th>
            <th className="th_payment">Transactions</th>
            <th className="th_payment">Gross Payments</th>
            <th className="th_payment">Refunds</th>
            <th className="th_payment">Net Payments</th>
          </tr>
        </thead>
        {tbodies}
        <tr>
          <td className="td_payment_last">Total</td>
          <td className="td_payment_last">{summary.paymentMethod}</td>
          <td className="td_payment_last">{summary.transactions}</td>
          <td className="td_payment_last">{`$ ${summary.grossPayment}`}</td>
          <td className="td_payment_last">{`$ ${summary.refund}`}</td>
          <td className="td_payment_last">{`$ ${summary.netPayment}`}</td>
        </tr>
      </Table>
    </div>
  );
};

export default TablePayment;
