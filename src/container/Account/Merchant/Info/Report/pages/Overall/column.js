import CustomTableHeader from "../../../CustomTableHeader";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Date"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "createdDate",
    accessor: (row) => <div className="table-tr">{`${row.createdDate}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "totalOrder",
    accessor: (row) => <div className="table-tr">{`${row.totalOrder}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Revenue"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "totalRevenue",
    accessor: (row) => <div className="table-tr">{`${row.totalRevenue}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Cost"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "totalCost",
    accessor: (row) => <div className="table-tr">{`${row.totalCost}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Tax"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "totalTax",
    accessor: (row) => <div className="table-tr">{`${row.totalTax}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Profit"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "totalProfit",
    accessor: (row) => <div className="table-tr">{`${row.totalProfit}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Average Order"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "averageOrder",
    accessor: (row) => <div className="table-tr">{`${row.averageOrder}`}</div>,
  },
];

export default columns;
