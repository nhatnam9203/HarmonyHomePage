import "../Info.scss";

const CustomTableHeader = ({ value }) => {
  return <div className="headerTable">{value}</div>;
};

const columns = [
  {
    Header: <CustomTableHeader value="Image" />,
    id: "image",
    accessor: (row) => <div className="tr">{`${row.image}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Product name" />,
    id: "productName",
    accessor: (row) => <div className="tr">{`${row.productName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Category" />,
    id: "category",
    accessor: (row) => <div className="tr">{`${row.categoryName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="SKU" />,
    id: "sku",
    accessor: (row) => <div className="tr">{`${row.sku}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Price" />,
    id: "price",
    accessor: (row) => <div className="tr">{`${row.price}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Qty" />,
    id: "qty",
    accessor: (row) => <div className="tr">{`${row.status}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Need to order" />,
    id: "needToOrder",
    accessor: (row) => <div className="tr">{`${row.needOrder}`}</div>,
  },
];

export default columns;
