import React from "react";
import ReactTable from "react-table";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import CustomTableHeader from "../CustomTableHeader";
import product_default from "@/assets/images/product_default.png";
import InventoryInfo from "./InventoryInfo";
import Pagination from "@/components/Pagination";
import PopupConfirm from "./PopupConfirm";
import Loading from "@/components/Loading";
import { useDispatch } from "react-redux";
import {
  deleteProduct
} from "@/actions/retailerActions";

import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const { inventoryDetail , loadingDetail } = useSelector((state) => state.retailer);
  const { productId } = inventoryDetail;

  const [activePage, setActivePage] = React.useState(1);
  const [isModalDelete, setVisibileModalDelete] = React.useState(false);

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const changePage = (page) => {
    setActivePage(page);
  }

  const onDelete = () => {
    setVisibileModalDelete(false);
    dispatch(deleteProduct(productId, callBackDeleteProduct))
  }

  const callBackDeleteProduct = () => {
    onBack("reset");
  }

  let quantities = inventoryDetail.quantities || [];
  let count = Math.ceil(quantities.length);

  const quantitiesList = quantities.slice((activePage - 1) * 10, (activePage - 1) * 10 + 10);

  return (
    <>
      <InventoryInfo
        onBack={onBack}
        setVisibleDelete={() => setVisibileModalDelete(true)}
      />
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
        data={quantitiesList}
        minRows={1}
        noDataText="NO DATA!"
        NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
        columns={columns()}
        PaginationComponent={() => <div />}
      />
      {
        count > 0 && <Pagination
          activePage={activePage}
          handlePageChange={changePage}
          totalItem={Math.ceil(count)}
        />
      }
      <PopupConfirm
        isVisible={isModalDelete}
        close={() => setVisibileModalDelete(false)}
        onDelete={onDelete}
      />
      {loadingDetail && <Loading isFullLoading={true} />}

    </>
  );
};

export default Index;

const columns = () => [
  {
    Header: <CustomTableHeader value="Versions" />,
    id: "label",
    accessor: (row) => <div className="table-tr row-label">{row.label}</div>,
    style: { 'whiteSpace': 'unset' },
    width: 400,
  },
  {
    Header: <CustomTableHeader value="Sku" />,
    id: "sku",
    accessor: (row) => (
      <div className="table-tr">{`${row.sku || ""}`}</div>
    ),
  },
  {
    Header: <CustomTableHeader value="Description" />,
    id: "description",
    accessor: (row) => (
      <div className="table-tr">{`${row.description || ""}`}</div>
    ),
    style: { 'whiteSpace': 'unset' },
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
    Header: <CustomTableHeader value="Temp qty" />,
    id: "tempQuantity",
    accessor: (row) => (
      <div className="table-tr">{`${row.tempQuantity || "0"}`}</div>
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
