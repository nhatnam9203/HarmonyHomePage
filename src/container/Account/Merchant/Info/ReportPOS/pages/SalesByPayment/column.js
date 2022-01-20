import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => { }, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Method"
        valueSort={valueSort}
        isActiveSort={sortType == "displayMethod"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "displayMethod")
        }
      />
    ),
    id: "displayMethod",
    accessor: (row) =>
      row.displayMethod ? (
        <div className="table-tr">
          <div className="table-tr">{row.displayMethod}</div>
        </div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Transactions"
        valueSort={valueSort}
        isActiveSort={sortType == "transactions"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "transactions")
        }
      />
    ),
    id: "transactions",
    accessor: (row) =>
      row.transactions?.toString() ? (
        <div className="table-tr">
          <div className="table-tr">{(row.transactions) || "0"}</div>
        </div>
      ) : (
        <div className="table-tr-last">{(row.total_transactions) || "0"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Gross Payments"
        valueSort={valueSort}
        isActiveSort={sortType == "grossPayment"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "grossPayment")
        }
      />
    ),
    id: "grossPayment",
    accessor: (row) =>
      row.grossPayment?.toString() ? (
        <div className="table-tr">
          <div className="table-tr">$ {formatMoney(row.grossPayment)}</div>
        </div>
      ) : (
        <div className="table-tr-last">$ {formatMoney(row.total_grossPayment)}</div>
      ),

  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Refunds"
        valueSort={valueSort}
        isActiveSort={sortType == "refund"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "refund")
        }
      />
    ),
    id: "refund",
    accessor: (row) =>
      row.refund?.toString() ? (
        <div className="table-tr">
          <div className="table-tr">$ {formatMoney(row.refund)}</div>
        </div>
      ) : (
        <div className="table-tr-last">$ {formatMoney(row.total_refund)}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Net Payments"
        valueSort={valueSort}
        isActiveSort={sortType == "netPayment"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "netPayment")
        }
      />
    ),
    id: "netPayment",
    accessor: (row) =>
      row.netPayment?.toString()  ? (
        <div className="table-tr">
          <div className="table-tr">$ {formatMoney(row.netPayment)}</div>
        </div>
      ) : (
        <div className="table-tr-last">$ {formatMoney(row.total_netPayment)}</div>
      ),

  },
];

export default columns;
