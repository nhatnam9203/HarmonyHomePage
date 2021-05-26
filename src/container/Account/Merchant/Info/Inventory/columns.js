import "../Info.scss";
import "./style.scss";

const CustomTableHeader = ({ value }) => {
  return <div className="headerTable">{value}</div>;
};

const columns = [
  {
    Header: <CustomTableHeader value="Image" />,
    id: "imageUrl",
    accessor: (row) => (
      <div className="table-tr">
        <img className="img-inventory" src={row.imageUr} />
      </div>
    ),
  },
  {
    Header: <CustomTableHeader value="Product name" />,
    id: "name",
    accessor: (row) => <div className="table-tr">{`${row.name}`}</div>,
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
