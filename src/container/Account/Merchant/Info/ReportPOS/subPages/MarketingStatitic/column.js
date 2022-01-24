import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import "../../../Info.scss";
// import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Date"
        valueSort={valueSort}
        isActiveSort={sortType == "date"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "date")
        }
      />
    ),
    id: "date",
    accessor: (row) =>
      row.date ? (
        <div className="table-tr">{`${row.dateString}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Revenue"
        valueSort={valueSort}
        isActiveSort={sortType == "revenue"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "revenue")
        }
      />
    ),
    id: "revenue",
    accessor: (row) =>
      row.revenue?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.revenue)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_revenue)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Discount Amount"
        valueSort={valueSort}
        isActiveSort={sortType == "discount"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "discount")
        }
      />
    ),
    id: "discount",
    accessor: (row) =>
      row.discount?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.discount)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_discount)}`}</div>
      ),
  },
];

export default columns;
