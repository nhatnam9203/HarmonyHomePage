import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import ReactTable from "react-table";
import Title from "@/components/Title";
import PopupUpload from "@/components/PopupUpload";
import { useSelector } from "react-redux";
import CustomTableHeader from "../CustomTableHeader";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { changeImageProduct } from "@/actions/retailerActions";
import product_default from "@/assets/images/product_default.png";
import icon_edit from "@/assets/images/retailer/icon_edit.png";
import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [visibleUpload, setVisibleUpload] = React.useState(false);
  const { inventoryDetail } = useSelector((state) => state.retailer);

  const changeImage = (files = [], callBack) => {
    if (!isEmpty(files) && files.length > 0) {
      let fileUpload = files[0];
      let formData = new FormData();
      formData.append("Filename3", fileUpload);

      const productId = inventoryDetail?.productId;

      dispatch(changeImageProduct(formData, productId, callBack));
    }
  };

  return (
    <Fade>
      <div className="info_merchant_title" style={{ color: "#404040" }}>
        {inventoryDetail.name}
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <div
        style={{ borderBottom: "1px solid #dddddd" }}
        className="info_merchant_title"
      >
        <Title style={{ borderBottomWidth: 0 }}>General Details</Title>
        <div className="row_edit_retailer">
          <img src={icon_edit} />
          <p>Edit</p>
        </div>
      </div>
      <div className="inventory_info_detail">
        <img
          src={
            inventoryDetail.imageUrl
              ? inventoryDetail.imageUrl
              : product_default
          }
          className="inventory_img_big_product"
          alt="img"
        />
        <div>
          <p>Category</p>
          <p>SKU</p>
          <p>Barcode</p>
          <p>Price</p>
          <p>Cost price</p>
          <p>Total items in stock</p>
          <p>Total items need to order</p>
        </div>

        <div style={{ marginLeft: "2.5rem" }}>
          {inventoryDetail.categoryName ? (
            <p>{inventoryDetail.categoryName}</p>
          ) : (
            <div>&nbsp;</div>
          )}
          <p>{inventoryDetail.sku}</p>
          <p>{inventoryDetail.barCode}</p>
          <p style={{ fontWeight: "600" }}>{`$ ${inventoryDetail.price}`}</p>
          <p
            style={{ fontWeight: "600" }}
          >{`$ ${inventoryDetail.costPrice}`}</p>
          <p style={{ color: "red", fontWeight: "600" }}>
            {inventoryDetail.restockHistory &&
            typeof Array.isArray(inventoryDetail.restockHistory)
              ? inventoryDetail.restockHistory?.length
              : 0}
          </p>
          <p style={{ color: "red", fontWeight: "600" }}>
            {inventoryDetail.needToOrder}
          </p>
        </div>
      </div>
      {/* 
      <div onClick={() => setVisibleUpload(true)} className="text_change_image">
        Change default image
      </div> */}

      <img
        src={
          inventoryDetail.imageUrl ? inventoryDetail.imageUrl : product_default
        }
        className="inventory_img_small_product"
        alt="img"
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
        className="table-inventoryDetail"
        manual
        sortable={false}
        data={inventoryDetail.quantities || []}
        minRows={1}
        noDataText="NO DATA!"
        NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
        columns={columns()}
        PaginationComponent={() => <div />}
      />
      <PopupUpload
        isVisible={visibleUpload}
        close={() => setVisibleUpload(false)}
        upload={changeImage}
      />
    </Fade>
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
    Header: <CustomTableHeader value="Price" />,
    id: "price",
    accessor: (row) => <div className="table-tr">{`$ ${row.price}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Need to order" />,
    id: "needToOrder",
    accessor: (row) => (
      <div className="table-tr">{`${row.needToOrder || "0"}`}</div>
    ),
  },
  {
    Header: <CustomTableHeader value="Items in stock" />,
    id: "quantity",
    accessor: (row) => (
      <div className="table-tr">{`${row.quantity || "0"}`}</div>
    ),
  },
];
