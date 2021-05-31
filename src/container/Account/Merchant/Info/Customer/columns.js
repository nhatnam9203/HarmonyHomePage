import "../Info.scss";
import "./style.scss";
import sortIcon from "../../../../../assets/images/sort.png";
import moment from "moment";

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

const columns = (valueSort, onClickSort) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Name"
        valueSort={valueSort}
        onClickSort={() => onClickSort(valueSort == "DESC" ? "ASC" : "DESC")}
      />
    ),
    id: "name",
    accessor: (row) => (
      <div className="table-tr">{`${row.firstName} ${row.lastName}`}</div>
    ),
    width: 200,
  },
  {
    Header: <CustomTableHeader value="Phone number" />,
    id: "phone",
    accessor: (row) => <div className="table-tr">{`${row.phone}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Email" />,
    id: "email",
    accessor: (row) => <div className="table-tr">{`${row.email}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Customer since" />,
    id: "createdDate",
    accessor: (row) => (
      <div className="table-tr">{`${moment(row.createdDate).format(
        "MMMM DD, YYYY"
      )}`}</div>
    ),
  },
];

export default columns;
