import CustomTableHeader from "../../../CustomTableHeader";
import { convertMinsToHrsMins } from "@/util";
import moment from "moment";
import "../../../Info.scss";
// import "../../style.scss";

const columns = (valueSort, onClickSort = () => { }, sortType) => [
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
        <div className="table-tr">{`${moment(row.date).format("MM/DD/YYYY")}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Service"
        valueSort={valueSort}
        isActiveSort={sortType == "service"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "service")
        }
      />
    ),
    id: "service",
    accessor: (row) =>
      row.service?.toString() ? (
        <div className="table-tr">{row.service}</div>
      ) : (
        <div className="table-tr-last">&nbsp;</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Service duration"
        valueSort={valueSort}
        isActiveSort={sortType == "duration"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "duration")
        }
      />
    ),
    id: "duration",
    accessor: (row) =>
      row.duration?.toString() ? (
        <div className="table-tr">{`${(row.duration)}`}</div>
      ) : (
        <div className="table-tr-last">&nbsp;</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Start time"
        valueSort={valueSort}
        isActiveSort={sortType == "toTime"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "toTime")
        }
      />
    ),
    id: "toTime",
    accessor: (row) =>
      row.toTime?.toString() ? (
        <div className="table-tr">{`${(row.toTime)}`}</div>
      ) : (
        <div className="table-tr-last">&nbsp;</div>
      ),
  },

  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="End time"
        valueSort={valueSort}
        isActiveSort={sortType == "fromTime"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "fromTime")
        }
      />
    ),
    id: "fromTime",
    accessor: (row) =>
      row.fromTime?.toString() ? (
        <div className="table-tr">{`${(row.fromTime)}`}</div>
      ) : (
        <div className="table-tr-last">&nbsp;</div>
      ),
  },

  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Difference duration"
        valueSort={valueSort}
        isActiveSort={sortType == "differenceDurationMinute"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "differenceDurationMinute")
        }
      />
    ),
    id: "differenceDurationMinute",
    accessor: (row) =>
      row.differenceDurationMinute?.toString() ? (
        <div className="table-tr">{`${(convertMinsToHrsMins(row.differenceDurationMinute))}`}</div>
      ) : (
        <div className="table-tr-last">{`${(convertMinsToHrsMins(row.total_differenceDurationMinute))}`}</div>
      ),
  },
];

export default columns;
