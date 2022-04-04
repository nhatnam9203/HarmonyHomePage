import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import moment from "moment";
import icon_edit from "@/assets/images/retailer/icon_edit.png";
import icon_delete from "@/assets/images/delete.png";
import "../../../Info.scss";
import "../style.scss";


const columns = (
valueSort, 
onClickSort = () => { }, 
sortType, 
showModalDelete = () =>{},
editLogTime = () =>{},

) => [
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Id"
        width={80}
        valueSort={valueSort}
        isActiveSort={sortType == "merchantStaffLogtimeId"}
        onClickSort={() =>
          onClickSort(() => { })
        }
      />
    ),
    id: "merchantStaffLogtimeId",
    accessor: (row) =>
      row.merchantStaffLogtimeId ? (
        <div className="table-tr">{`${row.merchantStaffLogtimeId}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Date"
        valueSort={valueSort}
        isActiveSort={sortType == "startDate"}
        onClickSort={() =>
          onClickSort(() => { })
        }
      />
    ),
    id: "startDate",
    accessor: (row) =>
      row.startDate?.toString() ? (
        <div className="table-tr">{`${moment(row.startDate).format("MMMM DD, YYYY")}`}</div>
      ) : (
        <div className="table-tr-last">{`${(row.total_startDate)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Time"
        valueSort={valueSort}
        isActiveSort={sortType == "startTime"}
        onClickSort={() =>
          onClickSort(() => { })
        }
      />
    ),
    id: "startTime",
    accessor: (row) =>
      row.startTime?.toString() ? (
        <div className="table-tr">{`${moment(row.startTime).format("hh:mm A")}`}</div>
      ) : (
        <div className="table-tr-last">{`${(row.total_startTime)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Staff Name"
        valueSort={valueSort}
        isActiveSort={sortType == "staffName"}
        onClickSort={() =>
          onClickSort(() => { })
        }
      />
    ),
    id: "staffName",
    accessor: (row) =>
      row.staffName?.toString() ? (
        <div className="table-tr">{`${(row.staffName)}`}</div>
      ) : (
        <div className="table-tr-last">{`${(row.total_staffName)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Type"
        valueSort={valueSort}
        isActiveSort={sortType == "type"}
        onClickSort={() =>
          onClickSort(() => { })
        }
      />
    ),
    id: "type",
    accessor: (row) =>
      row.type == 0 ? (
        <div className="table-tr">{`Check In`}</div>
      ) : (
        <div className="table-tr">{`Check Out`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Cash amount"
        valueSort={valueSort}
        isActiveSort={sortType == "amount"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "amount")
        }
      />
    ),
    id: "amount",
    accessor: (row) =>
      row.amount?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(
          row.amount
        )}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_amount)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={false}
        value="Note"
        valueSort={valueSort}
        isActiveSort={sortType == "note"}
        onClickSort={() =>
          onClickSort(() => { })
        }
      />
    ),
    id: "note",
    accessor: (row) =>
      row.note?.toString() ? (
        <div className="table-tr">{`${(row.note)}`}</div>
      ) : (
        <div className="table-tr">{` `}</div>
      ),
  },

];

export default columns;
