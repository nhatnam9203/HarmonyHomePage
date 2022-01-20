import CustomTableHeader from "../../../CustomTableHeader";
import { convertMinsToHrsMins } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Staff name"
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
        isSort={false}
        value="Duration differnce"
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
        <div className="table-tr-last">{`${convertMinsToHrsMins(row.total_differenceDurationMinute)}`}</div>
      ),
  },
];

export default columns;
