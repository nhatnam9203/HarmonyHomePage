import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import ReactTable from "react-table";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import CustomTableHeader from "../CustomTableHeader";
import { useDispatch } from "react-redux";
import {
  setVisibleInventoryEdit,
} from "@/actions/retailerActions";
import product_default from "@/assets/images/product_default.png";
import icon_edit from "@/assets/images/retailer/icon_edit.png";
import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const { inventoryDetail } = useSelector((state) => state.retailer);
  const { images } = inventoryDetail;

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const editInventory = () => {
    dispatch(setVisibleInventoryEdit(true));
  };

  const imageDefault = () => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].isDefault) {
        return images[i].imageUrl
      }
    }
    return inventoryDetail?.image?.imageUrl;
  }

  const imgDefault = imageDefault();

  console.log({ inventoryDetail });

  return (
    <>
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
        <div onClick={editInventory} className="row_edit_retailer">
          <img src={icon_edit} />
          <p>Edit</p>
        </div>
      </div>
      <div className="inventory_info_detail">
        <img
          src={imgDefault ? imgDefault : product_default}
          className="inventory_img_big_product"
          alt="img"
        />

        <div style={{ marginLeft: 15 }}>
          <div className="item_inventory_detail">
            <div>Category</div>
            <div>{inventoryDetail.categoryName}</div>
          </div>
          <div className="item_inventory_detail">
            <div>SKU</div>
            <div>{inventoryDetail.sku}</div>
          </div>
          <div className="item_inventory_detail">
            <div>Barcode</div>
            <div>{inventoryDetail.barCode}</div>
          </div>
          <div className="item_inventory_detail">
            <div>Price</div>
            <div style={{ fontWeight: '600' }}>{inventoryDetail.price}</div>
          </div>
          <div className="item_inventory_detail">
            <div>Cost price</div>
            <div
              style={{ fontWeight: '600' }}>
              {inventoryDetail.costPrice}
            </div>
          </div>
          <div className="item_inventory_detail">
            <div>Total items in stock</div>
            <div
              style={{ fontWeight: '600', color: (parseInt(inventoryDetail.quantity) < parseInt(inventoryDetail.minThreshold)) ? "red" : "#404040", }}>
              {inventoryDetail.quantity}
            </div>
          </div>
          <div className="item_inventory_detail">
            <div>Total items need to order</div>
            <div
              style={{ fontWeight: '600', color: parseInt(inventoryDetail.needToOrder) > 0 ? "red" : "#333", fontWeight: "600" }}>
              {inventoryDetail.needToOrder}
            </div>
          </div>
          <div className="item_inventory_detail">
            <div>Description</div>
            <div style={{ width : 300 }}>{inventoryDetail.description}</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {images &&
          images.map((image) => (
            <img
              key={image.id + "small_img"}
              src={image.imageUrl ? image.imageUrl : product_default}
              className="inventory_img_small_product"
              alt="img"
            />
          ))}
      </div>

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
    Header: <CustomTableHeader value="Cost price" />,
    id: "costPrice",
    accessor: (row) => <div className="table-tr">{`$ ${row.costPrice}`}</div>,
  },
  {
    Header: <CustomTableHeader value="Additional price" />,
    id: "additionalPrice",
    accessor: (row) => (
      <div className="table-tr">{`${row.additionalPrice || "0"}`}</div>
    ),
  },
  {
    Header: <CustomTableHeader value="Qty" />,
    id: "quantity",
    accessor: (row) => (
      <div className="table-tr">{`${row.quantity || "0"}`}</div>
    ),
  },
];
