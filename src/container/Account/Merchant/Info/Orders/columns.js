import CustomTableHeader from "../CustomTableHeader";
import moment from "moment";
import "../Info.scss";
import "./style.scss";
import { formatMoney, CustomStatus } from "@/util";

const columns = (valueSort, onClickSort) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="ID"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "code")
        }
      />
    ),
    id: "code",
    accessor: (row) => <div className="table-tr">{`${row.code}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Purchase point"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "purchasePoint")
        }
      />
    ),
    id: "purchasePoint",
    accessor: (row) => <div className="table-tr">{`${row.purchasePoint}`}</div>,
    width: 170,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Purchase date"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "createdDate")
        }
      />
    ),
    id: "createdDate",
    accessor: (row) => (
      <div className="table-tr">{`${moment(row.createdDate).format(
        "MMMM DD, YYYY hh:mm A"
      )}`}</div>
    ),
    width: 210,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Bill-to Name"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "billToName")
        }
      />
    ),
    id: "billToName",
    accessor: (row) => <div className="table-tr">{`${row.billToName}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Ship-to Name"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "shipToName")
        }
      />
    ),
    id: "shipToName",
    accessor: (row) => <div className="table-tr">{`${row.shipToName}`}</div>,
    width: 150,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Status"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "status")
        }
      />
    ),
    id: "status",
    accessor: (row) => <CustomStatus status={row.status} />,
    width: 120,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Grand total"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "total")
        }
      />
    ),
    id: "total",
    accessor: (row) => (
      <div className="table-tr">{`${formatMoney(row.total)}`}</div>
    ),
  },
];

export default columns;
