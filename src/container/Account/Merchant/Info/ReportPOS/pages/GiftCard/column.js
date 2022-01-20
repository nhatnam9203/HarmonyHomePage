import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => { }, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Type"
        valueSort={valueSort}
        isActiveSort={sortType == "type"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "type")
        }
      />
    ),
    id: "type",
    accessor: (row) =>
      row.type ? (
        <div className="table-tr">{`${row.type}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Quantity sold"
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
        value="Net sales"
        valueSort={valueSort}
        isActiveSort={sortType == "sales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "sales")
        }
      />
    ),
    id: "sales",
    accessor: (row) =>
      row.sales?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.sales)}`}</div>
      ) : (
        <div className="table-tr-last">$ {formatMoney(row.total_sales)}</div>
      ),
  },
];

export default columns;
