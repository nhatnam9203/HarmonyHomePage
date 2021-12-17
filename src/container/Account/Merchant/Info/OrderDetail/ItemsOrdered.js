import React from "react";
import ReactTable from "react-table";
import Title from "@/components/Title";
import CustomTableHeader from "../CustomTableHeader";
import "../Info.scss";
import "./style.scss";

const ItemsOrdered = ({ products = [] }) => {

  return (
    <>
      <Title>Items Ordered</Title>
      <ReactTable
        className="table_items_ordered"
        manual
        sortable={false}
        data={products}
        minRows={1}
        noDataText="NO DATA!"
        NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
        columns={columns()}
        PaginationComponent={() => <div />}
      />
    </>
  );
};

export default ItemsOrdered;

const columns = () => [
  {
    Header: <CustomTableHeader value="Product" />,
    id: "productName",
    accessor: (row) => (
      <div className="table-tr td_img_product">
        <img
          className="img-inventory"
          src={row.imageUrl}
          alt="img"
          className="img_order_retailer"
        />
        <div className="sku_product_retailer">
          {row.productName}
          <span>SKU : {row.sku}</span>
        </div>
      </div>
    ),
    width: 300,
  },
  {
    Header: (
      <CustomTableHeader value="Price" valueSort={""} onClickSort={() => {}} />
    ),
    id: "price",
    accessor: (row) => (
      <div className="table-tr">
        <p className="td_order_product">{`$ ${row.price}`}</p>
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader value="Qty" valueSort={""} onClickSort={() => {}} />
    ),
    id: "quantity",
    accessor: (row) => (
      <div className="table-tr">
        <p className="td_order_product">{`${row.quantity}`}</p>
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        value="Subtotal"
        valueSort={""}
        onClickSort={() => {}}
      />
    ),
    id: "subTotal",
    accessor: (row) => (
      <div className="table-tr">
        <p className="td_order_product">{`$ ${row.subTotal}`}</p>
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader value="Tax" valueSort={""} onClickSort={() => {}} />
    ),
    id: "tax",
    accessor: (row) => (
      <div className="table-tr">
        <p className="td_order_product">{`$ ${row.tax}`}</p>
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        value="Discount"
        valueSort={""}
        onClickSort={() => {}}
      />
    ),
    id: "discount",
    accessor: (row) => (
      <div className="table-tr">
        <p className="td_order_product">{`$ ${row.discount}`}</p>
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader value="Total" valueSort={""} onClickSort={() => {}} />
    ),
    id: "total",
    accessor: (row) => (
      <div className="table-tr">
        <p className="td_order_product">{`$ ${row.total}`}</p>
      </div>
    ),
  },
];
