import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Product name"
        valueSort={valueSort}
        isActiveSort={sortType == "name"}
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
        isActiveSort={sortType == "quantity"}
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
        isActiveSort={sortType == "totalRevenue"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalRevenue")
        }
      />
    ),
    id: "totalRevenue",
    accessor: (row) =>
      row.totalRevenue?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.totalRevenue)}`}</div>
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
        isActiveSort={sortType == "totalCost"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalCost")
        }
      />
    ),
    id: "totalCost",
    accessor: (row) =>
      row.totalCost?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.totalCost)}`}</div>
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
        isActiveSort={sortType == "totalTax"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalTax")
        }
      />
    ),
    id: "totalTax",
    accessor: (row) =>
      row.totalTax?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.totalTax)}`}</div>
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
        isActiveSort={sortType == "totalProfit"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalProfit")
        }
      />
    ),
    id: "totalProfit",
    accessor: (row) =>
      row.totalProfit?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.totalProfit)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_totalProfit}`}</div>
      ),
  },
];

export default columns;
