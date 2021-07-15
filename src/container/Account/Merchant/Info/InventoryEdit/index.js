import React from "react";
import Fade from "react-reveal/Fade";
import Title from "@/components/Title";
import FormEditInventory from "./FormEditInventory";
import Loading from "@/components/Loading";
import PopupDefaultImage from "./PopupDefaultImage";
import PopupNewCategory from "./PopupNewCategory";
import { uploadImageProduct, addNewCategory } from "@/actions/retailerActions";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";

import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const {
    inventoryDetail,
    subCategory,
    loadingUpfile,
    loadingNewCategory,
  } = useSelector((state) => state.retailer);
  const { detail } = useSelector((state) => state.merchantDetail);

  const [isVisible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [barCode, setBarCode] = React.useState("0");
  const [sku, setSku] = React.useState("");
  const [price, setPrice] = React.useState("0.00");
  const [costPrice, setCostPrice] = React.useState("0.00");
  const [quantity, setQuantity] = React.useState("0");
  const [minThreshold, setMinThreshold] = React.useState("0");
  const [maxThreshold, setMaxThreshold] = React.useState("0");
  const [images, setImages] = React.useState([]);

  const [imageDefault, setImageDefault] = React.useState("");

  const [isVisibleNewCategory, setVisibleNewCategory] = React.useState(false);

  React.useEffect(() => {
    setTimeout(async () => {
      await setData();
      setVisible(true);
    }, 300);
  }, []);

  const setData = () => {
    setName(inventoryDetail.name);
    setSku(inventoryDetail.sku);
    setBarCode(inventoryDetail.barCode);
    setPrice(inventoryDetail.price);
    setCostPrice(inventoryDetail.costPrice);
    setQuantity(inventoryDetail.quantity);
    setMinThreshold(inventoryDetail.minThreshold);
    setMaxThreshold(inventoryDetail.maxThreshold);
    setCategoryId(inventoryDetail.categoryId);
    setImages(inventoryDetail.images);
  };

  const handleChange = (type, value) => {
    switch (type) {
      case "name":
        setName(value);
        break;
      case "sku":
        setSku(value);
        break;
      case "barCode":
        setBarCode(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "costPrice":
        setCostPrice(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "minThreshold":
        setMinThreshold(value);
        break;
      case "maxThreshold":
        setMaxThreshold(value);
        break;
      case "categoryId":
        setCategoryId(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(name) ||
      isEmpty(sku) ||
      isEmpty(barCode) ||
      isEmpty(price) ||
      isEmpty(costPrice) ||
      (isEmpty(quantity) && typeof quantity !== "number") ||
      (isEmpty(minThreshold) && typeof minThreshold !== "number") ||
      (isEmpty(maxThreshold) && typeof maxThreshold !== "number") ||
      (isEmpty(categoryId) && typeof categoryId !== "number")
    ) {
      alert("error");
    } else {
      //submit
    }
  };

  const uploadImage = (files = [], callBack) => {
    if (!isEmpty(files) && files.length > 0) {
      let fileUpload = files[0];
      let formData = new FormData();
      formData.append("Filename3", fileUpload);
      dispatch(uploadImageProduct(formData, callBackUploadImage));
    }
  };

  const callBackUploadImage = (data) => {
    setImages([
      ...images,
      {
        ...data,
        isDefault: false,
        imageUrl: data.url,
      },
    ]);
  };

  const selectImage = (image) => {
    setImageDefault(image);
  };

  const deleteImage = (image) => {
    const temptImages = images.filter((im) => im.id !== image.id);
    setImages(temptImages);
  };

  const actionAddNewCategory = (body, callBack) => {
    const payload = {
      ...body,
      merchantId: detail.merchantId,
    };
    dispatch(addNewCategory(payload, callBack));
  };

  if (!isVisible) return null;

  return (
    <>
      <Fade>
        <div className="info_merchant_title">
          {" "}
          <Button className="btn btn_cancel" onClick={onBack}>
            Back
          </Button>
        </div>
        <Title style={{ color: "#333" }}>
          {inventoryDetail.name} - Edit details
        </Title>

        <Form onSubmit={handleSubmit}>
          <FormEditInventory
            subCategory={subCategory.filter((s) => parseInt(s.parentId) > 0)}
            name={name}
            sku={sku}
            barCode={barCode}
            price={price}
            costPrice={costPrice}
            quantity={quantity}
            minThreshold={minThreshold}
            maxThreshold={maxThreshold}
            categoryId={categoryId}
            handleChange={handleChange}
            images={images}
            uploadImage={uploadImage}
            selectImage={selectImage}
            openNewCategory={() => setVisibleNewCategory(true)}
            deleteImage={deleteImage}
          />
          <div className="btn_group_edit_inventory">
            <Button variant="primary" style={{ marginRight: 10 }}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{ background: "#1366AE", color: "white" }}
            >
              Save
            </Button>
          </div>
        </Form>
      </Fade>

      {loadingUpfile && <Loading />}

      <PopupDefaultImage
        isVisible={!isEmpty(imageDefault)}
        imageDefault={imageDefault}
        close={() => setImageDefault("")}
      />

      <PopupNewCategory
        isVisible={isVisibleNewCategory}
        category={subCategory.filter((s) => parseInt(s.parentId) === 0)}
        close={() => setVisibleNewCategory(false)}
        addNewCategory={actionAddNewCategory}
        loadingNewCategory={loadingNewCategory}
      />
    </>
  );
};
export default Index;
