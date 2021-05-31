import moment from "moment";
import "../Info.scss";
import "./style.scss";
import sortIcon from "../../../../../assets/images/sort.png";

const CustomTableHeader = ({
  value,
  valueSort,
  onClickSort = () => {},
  isSort = false,
}) => {
  return (
    <div className="headerTable" onClick={onClickSort}>
      {value}
      {isSort && (
        <img
          src={sortIcon}
          alt={"image sort"}
          style={{
            transform: valueSort == "ASC" ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      )}
    </div>
  );
};

const CustomStatus = ({ status }) => {
  const convertColor = (status) => {
    let color = "#FEDC32",
      backgroundColor = "#404040";
    switch (status) {
      case "checkin":
        color = "white";
        backgroundColor = "#1366AE";
        break;

      case "Processing":
        color = "white";
        backgroundColor = "#1366AE";
        break;

      case "confirm":
        color = "#404040";
        backgroundColor = "#C8EDFB";
        break;

      case "unconfirm":
        color = "#404040";
        backgroundColor = "#FEDC32";
        break;

      case "Pending":
        color = "#404040";
        backgroundColor = "#FEDC32";
        break;

      case "paid":
        color = "white";
        backgroundColor = "#53D769";
        break;

      case "Complete":
        color = "white";
        backgroundColor = "#53D769";
        break;

      case "cancel":
        color = "#404040";
        backgroundColor = "#E5E5E5";
        break;

      case "Canceled":
        color = "#404040";
        backgroundColor = "#E5E5E5";
        break;

      case "shipped":
        color = "#404040";
        backgroundColor = "transparent";
        break;

      case "Shipped":
        color = "#404040";
        backgroundColor = "transparent";
        break;

      case "Return":
        color = "white";
        backgroundColor = "#B73B36";
        break;

      default:
        break;
    }
    return { backgroundColor, color };
  };

  return (
    <div
      style={{
        backgroundColor: convertColor(status).backgroundColor,
        color: convertColor(status).color,
        borderWidth: 1,
        borderColor:
          status == "shipped" || status == "Shipped"
            ? "#53D769"
            : "transparent",
      }}
      className="table_row_status"
    >
      {status}
    </div>
  );
};

const columns = (valueSort, onClickSort) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="ID"
        valueSort={valueSort}
        onClickSort={() => onClickSort(valueSort == "DESC" ? "ASC" : "DESC")}
      />
    ),
    id: "code",
    accessor: (row) => <div className="table-tr">{`${row.code}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Purchase Point" />,
    id: "purchasePoint",
    accessor: (row) => <div className="table-tr">{`${row.purchasePoint}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Purchase Date" />,
    id: "createdDate",
    accessor: (row) => (
      <div className="table-tr">{`${moment(row.createdDate).format(
        "MMMM DD, YYYY hh:mm A"
      )}`}</div>
    ),
    width: 250,
  },
  {
    Header: <CustomTableHeader value="Bill-to Name" />,
    id: "billToName",
    accessor: (row) => <div className="table-tr">{`${row.billToName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Ship-to Name" />,
    id: "shipToName",
    accessor: (row) => <div className="table-tr">{`${row.shipToName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Status" />,
    id: "status",
    accessor: (row) => <CustomStatus status={row.status} />,
  },
  {
    Header: <CustomTableHeader value="Grand total" />,
    id: "total",
    accessor: (row) => <div className="table-tr">{`${row.total}`}</div>,
  },
];

export default columns;
