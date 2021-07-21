import React from "react";
import ReactTable from "react-table";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import CustomTableHeader from "../CustomTableHeader";
import product_default from "@/assets/images/product_default.png";
import InventoryInfo from "./InventoryInfo";
import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const { inventoryDetail } = useSelector((state) => state.retailer);

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <InventoryInfo onBack={onBack} />
      <Title
        style={{
          borderBottomWidth: 0,
          marginTop: "2.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Product Versions
      </Title>
      <ReactTable
        className="table-inventoryDetail product-table"
        manual
        sortable={false}
        data={inventoryDetail.quantities || []}
        minRows={1}
        noDataText="NO DATA!"
        NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
        columns={columns()}
        PaginationComponent={() => <div />}
      />
    </>
  );
};

export default Index;

const columns = () => [
  {
    Header: <CustomTableHeader value="Versions" />,
    id: "label",
    accessor: (row) => <div className="table-tr">{row.label}</div>,
    width: 400,
  },
  {
    Header: <CustomTableHeader value="Description" />,
    id: "description",
    accessor: (row) => (
      <div className="table-tr">{`${row.description || ""}`}</div>
    ),
  },
  {
    Header: <CustomTableHeader value="Cost price" />,
    id: "costPrice",
    accessor: (row) => (
      <div className="table-tr">{`$ ${row.costPrice || "0.00"}`}</div>
    ),
  },
  {
    Header: <CustomTableHeader value="Price" />,
    id: "price",
    accessor: (row) => <div className="table-tr">{`$ ${row.price}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Qty" />,
    id: "quantity",
    accessor: (row) => (
      <div className="table-tr">{`${row.quantity || "0"}`}</div>
    ),
  },
  {
    Header: <CustomTableHeader value="Image" />,
    id: "imageUrl",
    accessor: (row) => row.imageUrl ? (
      <img style={{ width: 43, height: 43, marginTop: 5 }} src={row.imageUrl} alt="imgjj" />
    ) : (
        <img style={{ width: 43, height: 43, marginTop: 5 }} src={product_default} alt="imgjj" />
      )
  },
];
