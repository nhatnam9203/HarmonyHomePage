import CustomTableHeader from "../../../CustomTableHeader";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Campaign Name"
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
        value="Discount Amount"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "discount")
        }
      />
    ),
    id: "discount",
    accessor: (row) =>
      row.discount?.toString() ? (
        <div className="table-tr">{row.discount}</div>
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "revenue")
        }
      />
    ),
    id: "revenue",
    accessor: (row) =>
      row.revenue?.toString() ? (
        <div className="table-tr">{`$ ${row.revenue}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_revenue}`}</div>
      ),
  },
];

export default columns;
