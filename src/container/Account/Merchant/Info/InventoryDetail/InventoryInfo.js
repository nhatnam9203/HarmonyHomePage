import React from "react";
import { Button } from "react-bootstrap";
import Title from "@/components/Title";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setVisibleInventoryEdit,
  getAttribute
} from "@/actions/retailerActions";
import product_default from "@/assets/images/product_default.png";
import icon_edit from "@/assets/images/retailer/icon_edit.png";
import "../Info.scss";
import "./style.scss";

const InventoryInfo = ({ onBack }) => {
  const dispatch = useDispatch();
  const { inventoryDetail } = useSelector((state) => state.retailer);
  const { detail } = useSelector((state) => state.merchantDetail);
  const { images } = inventoryDetail;

  const [isMore, showMore] = React.useState(false);

  const editInventory = () => {
    dispatch(setVisibleInventoryEdit(true));
    dispatch(getAttribute(detail.merchantId));
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

  const descriptionLength = inventoryDetail?.description?.length || 0;

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
            <div>Range</div>
            <div
              style={{ fontWeight: '600' }}>
              {inventoryDetail.priceRange}
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
            <div style={{ width: 300 }}>
              {
                descriptionLength > 60 ?
                  !isMore ?
                  inventoryDetail.description.slice(0, 60) + "..." :
                  inventoryDetail.description : inventoryDetail.description
              }
              {
                descriptionLength > 60 &&
                <span
                  onClick={() => {
                    showMore(isMore => !isMore)
                  }}
                  style={{ color: '#1366AE', fontWeight: '600', cursor: 'pointer' }}>
                  {isMore ? " less" : "more"}
                </span>
              }
            </div>
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
    </>
  );
};

export default InventoryInfo;
