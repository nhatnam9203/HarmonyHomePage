import React from "react";
import Title from "@/components/Title";
import FormEditInventory from "./FormEditInventory";
import Loading from "@/components/Loading";
import ProductOptions from "./ProductOptions";
import {
  uploadImageProduct,
  addNewCategory,
  editProduct,
  uploadImageOptions,
  getAttributeById,
  createProduct,
} from "@/actions/retailerActions";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { FormatPrice, formatMoney } from "@/util";
import { PopupNewCategory, PopupDefaultImage, PopupAddOption, ProductTable, PopupAuto, PopupManual } from "./widget"
import { createQuantitiesItem, arrayIsEqual, createVersionFromItems } from "@/util";

import "../Info.scss";
import "./style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const {
    inventoryDetail,
    subCategory,
    loadingUpfile,
    loadingNewCategory,
    attributes,
    isVisibleInventoryAdd,
  } = useSelector((state) => state.retailer);
  const { detail } = useSelector((state) => state.merchantDetail);

  const refProductVersion = React.useRef(null);

  const [isVisible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [barCode, setBarCode] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [price, setPrice] = React.useState("0.00");
  const [costPrice, setCostPrice] = React.useState("0.00");
  const [quantity, setQuantity] = React.useState("");
  const [minThreshold, setMinThreshold] = React.useState("");
  const [maxThreshold, setMaxThreshold] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [quantities, setQuantities] = React.useState([]);
  const [options, setOptions] = React.useState([]);

  const [temptOption, setTemptOption] = React.useState([]);
  const [imageDefault, setImageDefault] = React.useState("");
  const [isVisibleNewCategory, setVisibleNewCategory] = React.useState(false);
  const [visibility, setVisibility] = React.useState("webApp");

  const [fileUpload, setFileUpload] = React.useState([]);
  const [isShowAddOption, showOption] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const [isPopupManual, setPopupManual] = React.useState(false);
  const [isPopupAuto, setPopupAuto] = React.useState(false);
  const [itemExisted, setItemExisted] = React.useState(-1);

  const [pageAttribute, setPageAttribute] = React.useState(1);

  const checkIsExist = (optionValues, value) => {
    let flag = false;
    for (let i = 0; i < optionValues.length; i++) {
      if (optionValues[i].attributeValueId === value.id) {
        flag = true;
      }
    }
    return flag;
  }

  const callBackGetOption = async (data) => {
    let tempt = [...temptOption];
    setOptions([
      ...options,
      {
        ...data,
        attributeId: data.id,
        values: data.values.map((dt) => {
          return ({
            ...dt,
            checked: checkIsExist(tempt[0].values, dt),
            attributeValueId: dt.id,
          })
        })
      }
    ]);
    tempt.shift();
    if (tempt.length === 0) {
      setLoading(false);
    }
    await setTemptOption(tempt);
  }

  React.useEffect(() => {
    if (temptOption && temptOption.length > 0) {
      setLoading(true);
      dispatch(
        getAttributeById(temptOption[0].attributeId, callBackGetOption)
      );
    }
  }, [temptOption]);


  React.useEffect(() => {
    setTimeout(async () => {
      if (!isVisibleInventoryAdd) {
        await setData();
      }
      setVisible(true);
    }, 300);
  }, []);

  /***************** SET DATA FIRST IN *****************/
  const setData = () => {
    setName(inventoryDetail.name);
    setSku(inventoryDetail.sku);
    setBarCode(inventoryDetail.barCode);
    setPrice(FormatPrice(inventoryDetail.price).toFixed(2));
    setCostPrice(FormatPrice(inventoryDetail.costPrice).toFixed(2));
    setQuantity(inventoryDetail.quantity);
    setMinThreshold(inventoryDetail.minThreshold);
    setMaxThreshold(inventoryDetail.maxThreshold);
    setCategoryId(inventoryDetail.categoryId);
    setImages(inventoryDetail.images);
    setDescription(inventoryDetail.description);
    setQuantities(inventoryDetail.quantities);
    setTemptOption(inventoryDetail.options);
    setVisibility(inventoryDetail.visibility);
  };

  const onBlurInputName = () => {
    updateLabelQuantities(name);
  }

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
      case "description":
        setDescription(value);
        break;
      case "visibility":
        setVisibility(value);
        break;

      default:
        break;
    }
  };

  const checkSubmit = () => {
    let flag = true;
    if (
      isEmpty(name) ||
      isEmpty(sku) ||
      isEmpty(formatMoney(price)) ||
      (isEmpty(quantity) && typeof quantity !== "number") ||
      (isEmpty(minThreshold) && typeof minThreshold !== "number") ||
      (isEmpty(maxThreshold) && typeof maxThreshold !== "number") ||
      (isEmpty(categoryId) && typeof categoryId !== "number")
    ) {
      flag = false
    }
    return flag;
  }

  /***************** HANDLE BUTTON SAVE *****************/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(name) ||
      isEmpty(sku) ||
      isEmpty(formatMoney(price)) ||
      // isEmpty(formatMoney(costPrice)) ||
      (isEmpty(quantity) && typeof quantity !== "number") ||
      (isEmpty(minThreshold) && typeof minThreshold !== "number") ||
      (isEmpty(maxThreshold) && typeof maxThreshold !== "number") ||
      (isEmpty(categoryId) && typeof categoryId !== "number")
    ) {
      alert("error");
    } else {
      setTimeout(() => {
        const body = {
          ...inventoryDetail,
          images,
          name,
          sku,
          barCode,
          price: isVisibleInventoryAdd ? price : (quantities && quantities.length > 0) ? inventoryDetail.price : price,
          // costPrice: formatMoney(refCostPrice.current.value),
          quantity: isVisibleInventoryAdd ? quantity : (quantities && quantities.length > 0) ? inventoryDetail.quantity : quantity,
          minThreshold,
          maxThreshold,
          categoryId,
          description,
          quantities,
          visibility,
          options: options.map((x) => ({
            attributeId: x.attributeId,
            values: x.values
              ?.filter((v) => v.checked)
              ?.map((v) => {
                return {
                  id: v.id,
                  attributeValueId: v?.attributeValueId,
                  isDisabled: 0,
                };
              }),
          })),
          fileId: findImageDefault() ? findImageDefault().fileId : isVisibleInventoryAdd ? 0 : inventoryDetail.fileId
        };
        if (isVisibleInventoryAdd) {
          addNewProduct(body);
          return;
        } else {
          dispatch(editProduct(body, inventoryDetail.productId, back));
        }
      }, 200);
    }
  };

  const addNewProduct = (body) => {
    dispatch(createProduct(body, backAddNewProduct));
  }

  const backAddNewProduct = () => {
    onBack("reset");
  }

  const findImageDefault = () => {
    const imgeDefault = images.find(i => i.isDefault);
    return imgeDefault;
  }

  const back = () => {
    onBack(null);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  /***************** UPLOAD IMAGE PRODUCT *****************/
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
  /***************** END UPLOAD IMAGE PRODUCT *****************/


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

  /***************** set default image *****************/
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

  /***************** submit add new category *****************/
  const actionAddNewCategory = (body, callBack) => {
    const payload = {
      ...body,
      merchantId: detail.merchantId,
    };
    dispatch(addNewCategory(payload, callBack));
  };

  /***************** upload image option in product version *****************/
  const uploadImagesOption = (files = [], label) => {
    let file = files[0];
    let formData = new FormData();
    formData.append("Filename3", file);
    dispatch(uploadImageOptions(formData, label, callBackUploadImagesOption));
  }

  const callBackUploadImagesOption = (data, label) => {
    const temptQuantities = JSON.parse(JSON.stringify(quantities));
    for (let i = 0; i < temptQuantities.length; i++) {
      if (temptQuantities[i].label === label) {
        temptQuantities[i].fileId = data.fileId;
        temptQuantities[i].imageUrl = data.url;
      }
    }
    setQuantities(temptQuantities);
  }

  /***************** CHANGE VALUE INPUT PRODUCT VERSION *****************/
  const handleChangeInputTable = (value, type, row) => {

    let tempt = JSON.parse(JSON.stringify(quantities));
    for (let i = 0; i < tempt.length; i++) {
      if (tempt[i].label === row.label) {
        tempt[i][type] = value;
      }
    }
    setQuantities(tempt);
  }

  /***************** Delete row of product versions *****************/
  const deleteQuantities = (qtyItem) => {
    let tempt = [...quantities];
    tempt = tempt.filter(t => t.label !== qtyItem.label);
    setQuantities(tempt);
  }

  /***************** merge options after add new option *****************/
  const mergeOption = async (data) => {
    setOptions([
      ...options,
      { ...data, },
    ]);
  }

  /***************** Delete option *****************/
  const deleteOption = (attributeId) => {
    let tempt = [...options];
    tempt = tempt.filter(t => t.attributeId !== attributeId);
    setOptions(tempt);

    // createProductVersion(tempt);
  }

  /***************** check value option *****************/
  const tickValueOption = (value) => {
    let arrTempOptions = [...options];
    let temptOption = [...options].find(obj => obj.id === value.attributeId);
    if (temptOption) {

      /* find value checked */
      temptOption.values.forEach(el => {
        if (el.attributeValueId === value.attributeValueId) {
          el.checked = !el.checked
        }
      });

      /* assign option after check */
      for (let i = 0; i < arrTempOptions.length; i++) {
        if (arrTempOptions[i].id === temptOption.id) {
          arrTempOptions[i] = temptOption
        }
      }
      setOptions(arrTempOptions);
      // setNewQuantities(arrTempOptions);
      // refProductVersion.current.changePage(1);
    }
  }

  const setNewQuantities = (optionsTicked) => {
    const oldList = quantities ? [...quantities] : [];

    let newList = createQuantitiesItem(inventoryDetail, optionsTicked)?.map((x) => {
      const isExistItem = oldList?.find((f) =>
        arrayIsEqual(f?.attributeIds, x?.attributeIds)
      );

      if (isExistItem) {
        return Object.assign({}, x, {
          quantity: isExistItem.quantity,
          costPrice: isExistItem.costPrice,
          additionalPrice: isExistItem.additionalPrice,
          price: isExistItem.price,
          imageUrl: isExistItem.imageUrl,
          fileId: isExistItem.fileId,
          position: isExistItem.position ?? 0,
          id: isExistItem.id ?? 0,
          description: isExistItem.description ?? "",
        });
      }
      return x;
    });

    setQuantities(newList);
  }

  const updateLabelQuantities = (value) => {
    const quantitiesUpdateName = createQuantitiesItem(
      inventoryDetail,
      options,
      value
    )?.map((x) => {

      const isExistItem = quantities.find((f) =>
        arrayIsEqual(f?.attributeIds, x?.attributeIds)
      );

      if (isExistItem) {
        return Object.assign({}, x, {
          quantity: isExistItem.quantity,
          costPrice: isExistItem.costPrice,
          price: isExistItem.costPrice,
          description: isExistItem.description,
          additionalPrice: isExistItem.additionalPrice,
        });
      }
      return x;
    });

    setQuantities(quantitiesUpdateName);
  }

  const createProductVersion = (optionMerge) => {
    const qtys = createQuantitiesItem(inventoryDetail, optionMerge);
    setQuantities(qtys);
  }

  const createOtionsManual = (payload) => {
    let newQuantityList = [...quantities];
    let temp = createVersionFromItems(inventoryDetail, payload);
    const isExistIndex = newQuantityList?.findIndex((f) =>
      arrayIsEqual(f?.attributeIds, temp?.attributeIds)
    );

    if (isExistIndex >= 0) {
      const isExistItem = newQuantityList[isExistIndex];
      temp = Object.assign({}, temp, {
        needToOrder: isExistItem.needToOrder,
        quantity: "0",
        tempQuantity: "0",
        description: "",
        costPrice: "0.00",
        price: "0.00",
        sku: isExistItem.sku,
        imageUrl: isExistItem.imageUrl,
        fileId: isExistItem.fileId,
        position: isExistItem.position ?? 0,
        id: isExistItem.id ?? 0,
      });
      const page = Math.ceil((isExistIndex + 1) / 10);
      page && refProductVersion?.current?.changePage(page);
      const positionItem = (isExistIndex + 1) % 10;
      if (positionItem > 5) {
        const item = document.getElementById('product_versions');
        item && item.scrollIntoView(false);
      }

      newQuantityList[isExistIndex] = temp;
      setItemExisted(newQuantityList[isExistIndex]);
    } else {
      newQuantityList.push(temp);
      setItemExisted(null);
    }
    refProductVersion?.current?.resetSearch();

    setQuantities(newQuantityList);
  }

  const autoGenerate = () => {
    let optionsList = options;
    const quantityList = quantities;

    let generateList = createQuantitiesItem(inventoryDetail, optionsList)?.map((x) => {
      const isExistItem = quantityList?.find((f) =>
        arrayIsEqual(f?.attributeIds, x?.attributeIds)
      );

      if (isExistItem) {
        return Object.assign({}, x, {
          needToOrder: isExistItem.needToOrder,
          quantity: isExistItem.quantity,
          tempQuantity: isExistItem.tempQuantity,
          description: isExistItem.description,
          costPrice: isExistItem.costPrice,
          price: isExistItem.price,
          sku: isExistItem.sku,
          imageUrl: isExistItem.imageUrl,
          fileId: isExistItem.fileId,
          position: isExistItem.position ?? 0,
          id: isExistItem.id ?? 0,
        });
      }
      return x;
    });

    setQuantities(generateList?.sort((a, b) => a.position - b.position));
    setPopupAuto(false);
    setItemExisted(null);
    refProductVersion?.current?.resetSearch();

  }

  if (!isVisible) return null;

  return (
    <>
      <>
        <Title style={{ color: "#333" }}>
          {isVisibleInventoryAdd ? "New Product" : `${inventoryDetail.name} - Edit details`}
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
          description={description}
          handleChange={handleChange}
          images={images}
          uploadImage={uploadImage}
          selectImage={selectImage}
          openNewCategory={() => setVisibleNewCategory(true)}
          deleteImage={deleteImage}
          handleSubmit={handleSubmit}
          quantities={quantities}
          visibility={visibility}
          onBlurInputName={onBlurInputName}
          isVisibleInventoryAdd={isVisibleInventoryAdd}
        />

        <ProductOptions
          openAddOption={() => showOption(true)}
          options={options}
          deleteOption={deleteOption}
          tickValueOption={tickValueOption}
        />

        <ProductTable
          quantities={quantities}
          uploadImagesOption={uploadImagesOption}
          handleChangeInput={handleChangeInputTable}
          deleteQuantities={deleteQuantities}
          ref={refProductVersion}
          openPopupAuto={() => setPopupAuto(true)}
          openPopupManual={() => setPopupManual(true)}
          itemExisted={itemExisted}
        />

        <div className="btn_group_edit_inventory">
          <Button
            className="btn btn_cancel"
            onClick={back} variant="primary"
            style={{ marginRight: 10 }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{ background: "#1366AE", color: "white" }}
            onClick={handleSubmit}
            className="btn btn-primary btn-submit"
            disabled={isVisibleInventoryAdd && !checkSubmit()}
          >
            Save
          </Button>
        </div>
      </>

      {loadingUpfile && <Loading />}

      <PopupAddOption
        isVisible={isShowAddOption}
        close={() => showOption(false)}
        attributes={attributes}
        mergeOption={mergeOption}
        options={options}
        createProductVersion={createProductVersion}
      />

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

      <PopupAuto
        isVisible={isPopupAuto}
        close={() => setPopupAuto(false)}
        autoGenerate={autoGenerate}
        options={options}
      />

      <PopupManual
        isVisible={isPopupManual}
        close={() => setPopupManual(false)}
        options={options}
        createOtionsManual={createOtionsManual}
        quantities={quantities}
        inventoryDetail={inventoryDetail}
      />
      {(loadingNewCategory || isLoading) && <Loading isFullLoading={true} />}
    </>
  );
};
export default Index;
