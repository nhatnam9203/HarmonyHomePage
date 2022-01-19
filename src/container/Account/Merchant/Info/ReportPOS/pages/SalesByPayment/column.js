import CustomTableHeader from "../../../CustomTableHeader";
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
    accessor: (row) => <div className="table-tr">{row.displayMethod}</div>
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
    accessor: (row) => <div className="table-tr">{`$ ${row.transactions}`}</div>
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
    accessor: (row) => <div className="table-tr">{`$ ${row.grossPayment}`}</div>

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
    accessor: (row) => <div className="table-tr">{row.refund}</div>
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
    accessor: (row) => <div className="table-tr">{`$ ${row.netPayment}`}</div>

  },
];

export default columns;
