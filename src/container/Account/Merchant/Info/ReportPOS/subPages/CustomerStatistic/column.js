import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import moment from "moment";
import "../../../Info.scss";
// import "../../style.scss";

const columns = (valueSort, onClickSort = () => { }, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Appointment ID"
        valueSort={valueSort}
        isActiveSort={sortType == "appointmentId"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "appointmentId")
        }
      />
    ),
    id: "appointmentId",
    accessor: (row) =>
      row.appointmentId ? (
        <div className="table-tr">{`${row.appointmentId}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
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
        <div className="table-tr-last">&nbsp;</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Time"
        valueSort={valueSort}
        isActiveSort={sortType == "time"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "time")
        }
      />
    ),
    id: "time",
    accessor: (row) =>
      row.time ? (
        <div className="table-tr">{`${row.time}`}</div>
      ) : (
        <div className="table-tr-last">&nbsp;</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="No. of services"
        valueSort={valueSort}
        isActiveSort={sortType == "serviceCount"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "serviceCount")
        }
      />
    ),
    id: "serviceCount",
    accessor: (row) =>
      row.serviceCount?.toString() ? (
        <div className="table-tr">{row.serviceCount}</div>
      ) : (
        <div className="table-tr-last">{row.total_serviceCount}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Staff"
        valueSort={valueSort}
        isActiveSort={sortType == "staffName"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "staffName")
        }
      />
    ),
    id: "staffName",
    accessor: (row) =>
      row.staffName?.toString() ? (
        <div className="table-tr">{`${((row.staffName))}`}</div>
      ) : (
        <div className="table-tr-last">&nbsp;</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Pay amount"
        valueSort={valueSort}
        isActiveSort={sortType == "payamount"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "payamount")
        }
      />
    ),
    id: "payamount",
    accessor: (row) =>
      row.payamount?.toString() ? (
        <div className="table-tr">{`$ ${(formatMoney(row.payamount))}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_payamount)}`}</div>
      ),
  },
];

export default columns;
