import "../Info.scss";

const CustomTableHeader = ({ value }) => {
  return <div className="headerTable">{value}</div>;
};

const columns = [
  {
    Header: <CustomTableHeader value="ID" />,
    id: "id",
    accessor: (row) => <div className="tr">{`${row.id}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Purchase Point" />,
    id: "purchasePoint",
    accessor: (row) => <div className="tr">{`${row.purchasePoint}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Purchase Date" />,
    id: "purchaseDate",
    accessor: (row) => <div className="tr">{`${row.purchaseDate}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Bill-to Name" />,
    id: "billName",
    accessor: (row) => <div className="tr">{`${row.billName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Ship-to Name" />,
    id: "shipName",
    accessor: (row) => <div className="tr">{`${row.shipName}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Status" />,
    id: "status",
    accessor: (row) => <div className="tr">{`${row.status}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Grand total" />,
    id: "grandTotal",
    accessor: (row) => <div className="tr">{`${row.grandTotal}`}</div>,
  },
];

export default columns;
