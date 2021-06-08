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
    accessor: (row) =>
      row.date ? (
        <div className="table-tr">
          {`${moment(row.date).format("MMMM DD, YYYY")}`}
        </div>
      ) : (
        <div className="table-tr-last">{row.total_date}</div>
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
    accessor: (row) =>
      row.totalOrder ? (
        <div className="table-tr">{row.totalOrder}</div>
      ) : (
        <div className="table-tr-last">{row.total_totalOrder}</div>
      ),
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
    accessor: (row) =>
      row.revenue ? (
        <div className="table-tr">{`$ ${row.revenue}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_revenue}`}</div>
      ),
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
    accessor: (row) =>
      row.cost ? (
        <div className="table-tr">{`$ ${row.cost}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_cost}`}</div>
      ),
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
    accessor: (row) =>
      row.tax ? (
        <div className="table-tr">{row.tax}</div>
      ) : (
        <div className="table-tr-last">{row.total_tax}</div>
      ),
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
    accessor: (row) =>
      row.profit ? (
        <div className="table-tr">{`$ ${row.profit}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_profit}`}</div>
      ),
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
    accessor: (row) =>
      row.averageOrder ? (
        <div className="table-tr">{`$ ${row.averageOrder}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_averageOrder}`}</div>
      ),
  },
];

export default columns;