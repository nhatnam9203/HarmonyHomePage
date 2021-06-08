import CustomTableHeader from "../../../CustomTableHeader";
import moment from "moment";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Product name"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "name")
        }
      />
    ),
    id: "name",
    accessor: (row) =>
      row.name ? (
        <div className="table-tr">{`${row.name}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Qty Sold"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "quantity")
        }
      />
    ),
    id: "quantity",
    accessor: (row) =>
      row.quantity?.toString() ? (
        <div className="table-tr">{row.quantity}</div>
      ) : (
        <div className="table-tr-last">{row.total_quantity}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Revenue"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalRevenue")
        }
      />
    ),
    id: "totalRevenue",
    accessor: (row) =>
      row.totalRevenue?.toString() ? (
        <div className="table-tr">{`$ ${row.totalRevenue}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_totalRevenue}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Cost"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalCost")
        }
      />
    ),
    id: "totalCost",
    accessor: (row) =>
      row.totalCost?.toString() ? (
        <div className="table-tr">{`$ ${row.totalCost}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_totalCost}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Tax"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalTax")
        }
      />
    ),
    id: "totalTax",
    accessor: (row) =>
      row.totalTax?.toString() ? (
        <div className="table-tr">{row.totalTax}</div>
      ) : (
        <div className="table-tr-last">{row.total_totalTax}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Profit"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalProfit")
        }
      />
    ),
    id: "totalProfit",
    accessor: (row) =>
      row.totalProfit?.toString() ? (
        <div className="table-tr">{`$ ${row.totalProfit}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_totalProfit}`}</div>
      ),
  },
];

export default columns;
