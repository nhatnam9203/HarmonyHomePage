import CustomTableHeader from "../../../CustomTableHeader";
import moment from "moment";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Customer name"
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
        value="Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "appointmentCount")
        }
      />
    ),
    id: "appointmentCount",
    accessor: (row) =>
      row.appointmentCount?.toString() ? (
        <div className="table-tr">{row.appointmentCount}</div>
      ) : (
        <div className="table-tr-last">{row.total_appointmentCount}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Last Order"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "lastVisitDate")
        }
      />
    ),
    id: "lastVisitDate",
    accessor: (row) =>
      row.lastVisitDate?.toString() ? (
        <div className="table-tr">{`${moment(row.lastVisitDate).format(
          "MMMM DD, YYYY"
        )}`}</div>
      ) : (
        <div className="table-tr-last">{`${moment(
          row.total_lastVisitDate
        ).format("MMMM DD, YYYY")}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Last Order Sales"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "lastVisitSale")
        }
      />
    ),
    id: "lastVisitSale",
    accessor: (row) =>
      row.lastVisitSale?.toString() ? (
        <div className="table-tr">{`$ ${row.lastVisitSale}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_lastVisitSale}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Sales"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "total")
        }
      />
    ),
    id: "total",
    accessor: (row) =>
      row.total?.toString() ? (
        <div className="table-tr">{`$ ${row.total}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_total}`}</div>
      ),
  },
];

export default columns;
