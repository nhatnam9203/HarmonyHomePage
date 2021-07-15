import React from "react";
import Fade from "react-reveal/Fade";
import Title from "@/components/Title";
import FormEditInventory from "./FormEditInventory";
import Loading from "@/components/Loading";
import PopupDefaultImage from "./PopupDefaultImage";
import PopupNewCategory from "./PopupNewCategory";
import {
  uploadImageProduct,
  addNewCategory,
  editProduct,
} from "@/actions/retailerActions";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { FormatPrice, formatMoney } from "@/util";

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

  const [fileUpload, setFileUpload] = React.useState([]);

  const refPrice = React.useRef();
  const refCostPrice = React.useRef();

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
    setPrice(FormatPrice(inventoryDetail.price));
    setCostPrice(FormatPrice(inventoryDetail.costPrice));
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
      isEmpty(formatMoney(price)) ||
      isEmpty(formatMoney(costPrice)) ||
      (isEmpty(quantity) && typeof quantity !== "number") ||
      (isEmpty(minThreshold) && typeof minThreshold !== "number") ||
      (isEmpty(maxThreshold) && typeof maxThreshold !== "number") ||
      (isEmpty(categoryId) && typeof categoryId !== "number")
    ) {
      alert("error");
    } else {
      //submit
      const body = {
        ...inventoryDetail,
        images,
        name,
        sku,
        barCode,
        price: formatMoney(refPrice.current.value),
        costPrice: formatMoney(refCostPrice.current.value),
        quantity,
        minThreshold,
        maxThreshold,
        categoryId,
      };
      dispatch(editProduct(body, inventoryDetail.productId, back));
    }
  };

  const back = () => {
    onBack();
  };

  React.useEffect(() => {
    if (fileUpload.length > 0) {
      let file = fileUpload[0];
      let formData = new FormData();
      formData.append("Filename3", file);
      dispatch(uploadImageProduct(formData, callBackUploadImage));
    }
  }, [fileUpload]);

  const uploadImage = async (files = [], callBack) => {
    if (!isEmpty(files) && files.length > 0) {
      setFileUpload(files);
    }
  };

  const callBackUploadImage = (data) => {
    setImages([
      ...images,
      {
        ...data,
        isDefault: images.length === 0 ? true : false,
        imageUrl: data.url,
        id: 0,
        position: images.length + 1,
      },
    ]);
    let temptFileUpload = [...fileUpload];
    temptFileUpload.shift();
    setFileUpload(temptFileUpload);
  };

  const selectImage = (image) => {
    setImageDefault(image);
  };

  const deleteImage = (image) => {
    const temptImages = images.filter((im) => im.fileId !== image.fileId);
    if (image.isDefault && temptImages.length > 0) {
      temptImages[0].isDefault = true;
    }
    setImages(temptImages);
  };

  const setDefaultImage = async (image) => {
    const temptImages = JSON.parse(JSON.stringify(images));
    for (let i = 0; i < temptImages.length; i++) {
      if (temptImages[i].id === image.id) {
        temptImages[i].isDefault = true;
      } else {
        temptImages[i].isDefault = false;
      }
    }

    await setImages(temptImages);
    setImageDefault("");
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
        <Title style={{ color: "#333" }}>
          {inventoryDetail.name} - Edit details
        </Title>

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
          refPrice={refPrice}
          refCostPrice={refCostPrice}
          handleSubmit={handleSubmit}
        />
        <div className="btn_group_edit_inventory">
          <Button onClick={back} variant="primary" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{ background: "#1366AE", color: "white" }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </Fade>

      {loadingUpfile && <Loading />}

      <PopupDefaultImage
        isVisible={!isEmpty(imageDefault)}
        imageDefault={imageDefault}
        close={() => setImageDefault("")}
        setDefaultImage={setDefaultImage}
      />

      <PopupNewCategory
        isVisible={isVisibleNewCategory}
        category={subCategory.filter((s) => parseInt(s.parentId) === 0)}
        close={() => setVisibleNewCategory(false)}
        addNewCategory={actionAddNewCategory}
        loadingNewCategory={loadingNewCategory}
      />
      {loadingNewCategory && <Loading />}
    </>
  );
};
export default Index;
