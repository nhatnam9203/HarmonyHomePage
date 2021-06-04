import CustomTableHeader from "../../../CustomTableHeader";
import moment from "moment";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Date"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "date")
        }
      />
    ),
    id: "date",
    accessor: (row) => (
      <div className="table-tr">{`${moment(row.date).format(
        "MMMM DD, YYYY"
      )}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalOrder")
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
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "revenue")
        }
      />
    ),
    id: "revenue",
    accessor: (row) => <div className="table-tr">{`$ ${row.revenue}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Cost"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "cost")
        }
      />
    ),
    id: "cost",
    accessor: (row) => <div className="table-tr">{`$ ${row.cost}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Tax"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "tax")
        }
      />
    ),
    id: "tax",
    accessor: (row) => <div className="table-tr">{`${row.tax}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Profit"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "profit")
        }
      />
    ),
    id: "profit",
    accessor: (row) => <div className="table-tr">{`$ ${row.profit}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Average Order"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "averageOrder")
        }
      />
    ),
    id: "averageOrder",
    accessor: (row) => (
      <div className="table-tr">{`$ ${row.averageOrder}`}</div>
    ),
  },
];

export default columns;
