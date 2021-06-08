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
        value="Completed Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "completed")
        }
      />
    ),
    id: "completed",
    accessor: (row) =>
      row.completed?.toString() ? (
        <div className="table-tr">{row.completed}</div>
      ) : (
        <div className="table-tr-last">{row.total_completed}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Uncompleted Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "unCompleted")
        }
      />
    ),
    id: "unCompleted",
    accessor: (row) =>
      row.unCompleted?.toString() ? (
        <div className="table-tr">{`$ ${row.unCompleted}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_unCompleted}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Canceled Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "canceled")
        }
      />
    ),
    id: "canceled",
    accessor: (row) =>
      row.canceled?.toString() ? (
        <div className="table-tr">{`$ ${row.canceled}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_canceled}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Returned Orders"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "returned")
        }
      />
    ),
    id: "returned",
    accessor: (row) =>
      row.returned?.toString() ? (
        <div className="table-tr">{row.returned}</div>
      ) : (
        <div className="table-tr-last">{row.total_returned}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Orders"
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
