import CustomTableHeader from "../../../CustomTableHeader";
import moment from "moment";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Customer name"
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
        value="Appointments"
        valueSort={valueSort}
        isActiveSort={sortType == "appointmentCount"}
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
        value="Last Visit"
        valueSort={valueSort}
        isActiveSort={sortType == "lastVisitDate"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "lastVisitDate")
        }
      />
    ),
    id: "lastVisitDate",
    accessor: (row) =>
      row.lastVisitDate?.toString() ? (
        <div className="table-tr">{`${moment(row.lastVisitDate).format(
          "MM/DD/YYYY"
        )}`}</div>
      ) : (
        <div className="table-tr-last">{`${moment(
          row.total_lastVisitDate
        ).format("MM/DD/YYYY")}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Last Visit Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "lastVisitSale"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "lastVisitSale")
        }
      />
    ),
    id: "lastVisitSale",
    accessor: (row) =>
      row.lastVisitSale?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.lastVisitSale)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(
          row.total_lastVisitSale
        )}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "total"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "total")
        }
      />
    ),
    id: "total",
    accessor: (row) =>
      row.total?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.total)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_total)}`}</div>
      ),
  },
];

export default columns;
