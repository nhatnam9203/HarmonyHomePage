import CustomTableHeader from "../CustomTableHeader";
import moment from "moment";
import { convertIsVip } from "@/util";
import "../Info.scss";
import "./style.scss";

const columns = (valueSort, onClickSort, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Name"
        valueSort={valueSort}
        isActiveSort={sortType == "firstName"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "firstName")
        }
      />
    ),
    id: "name",
    accessor: (row) => (
      <div className="table-tr">{`${row.firstName} ${row.lastName}`}</div>
    ),
    width: 200,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Phone number"
        valueSort={valueSort}
        isActiveSort={sortType == "phone"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "phone")
        }
      />
    ),
    id: "phone",
    accessor: (row) => <div className="table-tr">{`${row.phone}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Email"
        valueSort={valueSort}
        isActiveSort={sortType == "email"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "email")
        }
      />
    ),
    id: "email",
    accessor: (row) => <div className="table-tr">{`${row.email}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Group"
        valueSort={valueSort}
        isActiveSort={sortType == "isVip"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "isVip")
        }
      />
    ),
    id: "isVip",
    accessor: (row) => (
      <div className="table-tr">{`${convertIsVip(row.isVip)}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Customer since"
        valueSort={valueSort}
        isActiveSort={sortType == "createdDate"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "createdDate")
        }
      />
    ),
    id: "createdDate",
    accessor: (row) => (
      <div className="table-tr">{`${moment(row.createdDate).format(
        "MMMM DD, YYYY"
      )}`}</div>
    ),
  },
];

export default columns;
