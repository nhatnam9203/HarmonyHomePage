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

const columns = (valueSort, onClickSort) => [
  {
    Header: <CustomTableHeader value="Image" />,
    id: "imageUrl",
    accessor: (row) => (
      <div className="table-tr">
        <img className="img-inventory" src={row.imageUrl} />
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Product name"
        valueSort={valueSort}
        onClickSort={() => onClickSort(valueSort == "DESC" ? "ASC" : "DESC")}
      />
    ),
    id: "name",
    accessor: (row) => <div className="table-tr">{`${row.name}`}</div>,
    width: 200,
  },
  {
    Header: <CustomTableHeader value="Category" />,
    id: "categoryName",
    accessor: (row) => <div className="table-tr">{`${row.categoryName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="SKU" />,
    id: "sku",
    accessor: (row) => <div className="table-tr">{`${row.sku}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Price" />,
    id: "price",
    accessor: (row) => <div className="table-tr">{`${row.price}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Qty" />,
    id: "quantity",
    accessor: (row) => <div className="table-tr">{`${row.quantity}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Need to order" />,
    id: "needToorDer",
    accessor: (row) => <div className="table-tr">{`${row.needToorDer}`}</div>,
  },
];

export default columns;
