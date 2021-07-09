import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Campaign Name"
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
        <div className="table-tr">{formatMoney(row.discount)}</div>
      ) : (
        <div className="table-tr-last">{row.total_discount}</div>
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
        <div className="table-tr-last">{`$ ${row.total_revenue}`}</div>
      ),
  },
];

export default columns;
