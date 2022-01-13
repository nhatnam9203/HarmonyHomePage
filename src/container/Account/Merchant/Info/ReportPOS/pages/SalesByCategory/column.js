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
        isActiveSort={sortType == "categoryName"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "categoryName")
        }
      />
    ),
    id: "categoryName",
    accessor: (row) =>
      row.categoryName ? (
        <div className="table-tr">{`${row.categoryName}`}</div>
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
        value="Av.Price"
        valueSort={valueSort}
        isActiveSort={sortType == "avgPrice"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "avgPrice")
        }
      />
    ),
    id: "avgPrice",
    accessor: (row) =>
      row.avgPrice?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.avgPrice)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_avgPrice)}`}</div>
      ),
  },
 
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "totalSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalSales")
        }
      />
    ),
    id: "totalSales",
    accessor: (row) =>
      row.totalSales?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.totalSales)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_totalSales)}`}</div>
      ),
  },
];

export default columns;
