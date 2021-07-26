import * as api from "../api/index";
import * as typeRetailer from "../constants/retailerConstant";
import * as typeNotify from "../constants/notifyConstants";
import {
  summary,
  summary_sales_by_order,
  summary_sales_by_product,
  summary_sales_by_customer,
  summary_payment_by_method,
  summary_marketing_efficiency,
  FormatPrice,
} from "@/util";

export const getOrders = (requestUrl = "", token = "") => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });

    const { data = null } = await api.getByPage(requestUrl, token);

    let orders = data.data
      ? data.data.map((obj) => { return { ...obj, total: FormatPrice(obj.total) }; }) : [];

    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_ORDERS,
        payload: { data: orders, count: data.count },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getInventory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });

    const { data = null } = await api.getByPage(requestUrl, token);

    let inventory = data.data
      ? data.data.map((obj) => { return { ...obj, price: FormatPrice(obj.price) }; }) : [];

    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_INVENTORY,
        payload: { data: inventory, count: data.count },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getCustomer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    const { data = null } = await api.getByPage(requestUrl, token);
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_CUSTOMER,
        payload: { data: data.data, count: data.count },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getOverall = (requestUrl = "", token = "") => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {

      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            revenue: FormatPrice(obj.revenue),
            profit: FormatPrice(obj.profit),
            averageOrder: FormatPrice(obj.averageOrder),
            cost: FormatPrice(obj.cost),
            tax: FormatPrice(obj.tax),
          };
        })
        : [];

      let result = [];
      if (temptData.length > 0) result = [...temptData, summary(data.summary)];

      dispatch({
        type: typeRetailer.SET_OVERALL,
        payload: { data: result, summary: data.summary },
      });

    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getSalesByOrder = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_order(data.summary)];

      dispatch({
        type: "SET_SALES_BY_ORDER",
        payload: { data: result, summary: data.summary },
      });

    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getSalesByProduct = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {

      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            totalRevenue: FormatPrice(obj.totalRevenue),
            totalProfit: FormatPrice(obj.totalProfit),
            totalCost: FormatPrice(obj.totalCost),
            totalTax: FormatPrice(obj.totalTax),
          };
        })
        : [];

      let result = [];

      if (temptData.length > 0)
        result = [...temptData, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_SALES_BY_PRODUCT",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getSalesByCategory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {

      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            totalrevenue: FormatPrice(obj.totalrevenue),
            totalProfit: FormatPrice(obj.totalProfit),
            totalCost: FormatPrice(obj.totalCost),
            totalTax: FormatPrice(obj.totalTax),
          };
        })
        : [];

      let result = [];
      if (temptData.length > 0)
        result = [...temptData, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_SALES_BY_CATEGORY",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getSalesByCustomer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            lastVisitSale: FormatPrice(obj.lastVisitSale),
            total: FormatPrice(obj.total),
          };
        })
        : [];
      let result = [];
      if (temptData.length > 0)
        result = [...temptData, summary_sales_by_customer(data.summary)];

      dispatch({
        type: "SET_SALES_BY_CUSTOMER",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getTopProduct = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            totalRevenue: FormatPrice(obj.totalRevenue),
            totalProfit: FormatPrice(obj.totalProfit),
            totalCost: FormatPrice(obj.totalCost),
            totalTax: FormatPrice(obj.totalTax),
          };
        })
        : [];
      let result = [];
      if (temptData.length > 0)
        result = [...temptData, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_TOP_PRODUCT",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getTopCategory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            totalrevenue: FormatPrice(obj.totalrevenue),
            totalProfit: FormatPrice(obj.totalProfit),
            totalCost: FormatPrice(obj.totalCost),
            totalTax: FormatPrice(obj.totalTax),
          };
        })
        : [];
      let result = [];
      if (temptData.length > 0)
        result = [...temptData, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_TOP_CATEGORY",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getPaymentByMethod = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0) {
        let temptData = [...data.data].reverse();
        result = [...temptData, summary_payment_by_method(data.summary)];
      }

      dispatch({
        type: "SET_PAYMENT_BY_METHOD",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getStaffReport = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            productSales: FormatPrice(obj.productSales),
            productSplit: FormatPrice(obj.productSplit),
            salaryWage: FormatPrice(obj.salaryWage),
            refundAmount: FormatPrice(obj.refundAmount),
            discountByStaff: FormatPrice(obj.discountByStaff),
            salary: FormatPrice(obj.salary),
          };
        })
        : [];
      if (temptData.length > 0)
        dispatch({
          type: "SET_STAFF_REPORT",
          payload: { data: temptData, count: data.count },
        });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getMarketingEfficiency = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let temptData = data.data
        ? data.data.map((obj) => {
          return {
            ...obj,
            discount: FormatPrice(obj.discount),
            revenue: FormatPrice(obj.revenue),
          };
        })
        : [];
      let result = [];
      if (temptData.length > 0)
        result = [...temptData, summary_marketing_efficiency(data.summary)];

      dispatch({
        type: "SET_MARKETING_EFFICIENCY",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const exportRetailer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_EXPORT_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);
    let path = typeof data.data === "object" ? data.data.path : data.data;

    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.EXPORT_SUCCESS,
        payload: path,
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_EXPORT_REQUEST });
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};


export const getOrderDetail = (requestUrl = "", token = "", callBack) => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_DETAIL_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_ORDER_DETAIL,
        payload: data.data,
      });
      callBack();
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_DETAIL_REQUEST });
  }
};

export const getInventoryDetail = (
  requestUrl = "",
  token = "",
  callBack
) => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_DETAIL_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_INVENTORY_DETAIL,
        payload: data.data,
      });
      if (callBack) callBack();
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_DETAIL_REQUEST });
  }
};


export const getCustomerDetail = (
  requestUrl = "",
  token = "",
  callBack
) => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_DETAIL_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_CUSTOMER_DETAIL,
        payload: data.data,
      });
      callBack();
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_DETAIL_REQUEST });
  }
};


export const getAppointmentCustomer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_DETAIL_REQUEST });
    let { data = null } = await api.getByPage(requestUrl, token);
    let temptData = data.data
      ? data.data.map((obj) => {
        return {
          ...obj,
          total: FormatPrice(obj.total),
        };
      })
      : [];
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_APPOINTMENT_CUSTOMER_DETAIL,
        payload: { data: temptData, count: data.pages },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_DETAIL_REQUEST });
  }
};


export const getSubCategory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    let { data = null } = await api.getByPage(requestUrl, token);
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_SUB_CATEGORY,
        payload: data.data,
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
  }
};

export const changeImageProduct = (formData, productId, callBack) => async (
  dispatch
) => {
  try {
    const urlUpload = "file?category=product";
    const urlUpdateProduct = `product/changeImage/${productId}`;
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    dispatch({ type: typeRetailer.UPLOAD_FILE_REQUEST });
    let { data = null } = await api.uploadFile(urlUpload, formData);

    if (parseInt(data.codeNumber) === 200) {
      const { fileId, url } = data.data;
      const body = { fileId };
      const response = await api.updateImageProduct(
        urlUpdateProduct,
        body,
        token
      );

      if (parseInt(response.data.codeNumber) === 200) {
        dispatch({
          type: typeRetailer.CHANGE_IMAGE_PRODUCT_SUCCESS,
          payload: { productId, fileId, url },
        });
        dispatch({
          type: typeNotify.NOTIFY_SUCCESS,
          payload: response.data.message,
        });
        callBack();
      }
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_UPLOAD_FILE_REQUEST });
  }
};

export const uploadImageProduct = (formData, callBack) => async (dispatch) => {
  try {
    const url = "file?category=product";
    dispatch({ type: typeRetailer.UPLOAD_FILE_REQUEST });
    let { data = null } = await api.uploadFile(url, formData);
    if (parseInt(data.codeNumber) === 200) {
      callBack(data.data);
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_UPLOAD_FILE_REQUEST });
  }
};


export const uploadImageOptions = (formData, label, callBack) => async (dispatch) => {
  try {
    const url = "file?category=product";
    dispatch({ type: typeRetailer.UPLOAD_FILE_REQUEST });
    let { data = null } = await api.uploadFile(url, formData);
    if (parseInt(data.codeNumber) === 200) {
      callBack(data.data, label);
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_UPLOAD_FILE_REQUEST });
  }
};

export const addNewCategory = (body, callBack) => async (dispatch) => {
  try {
    const url = "category";
    const urlSubCategory = `category/search?status=ACTIVE&merchantId=${body.merchantId}`;
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    dispatch({ type: typeRetailer.LOADING_NEW_CATEGORY });
    let { data = null } = await api.postApi(url, body, token);

    if (parseInt(data.codeNumber) === 200) {
      dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
      dispatch(getSubCategory(urlSubCategory, token));
      callBack();
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_LOADING_NEW_CATEGORY });
  }
};

export const editProduct = (body, productId, callBack) => async (dispatch) => {
  try {
    const url = `product/${productId}`;
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    dispatch({ type: typeRetailer.LOADING_NEW_CATEGORY });
    let { data = null } = await api.putApi(url, body, token);

    if (parseInt(data.codeNumber) === 200) {
      dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
      dispatch(getInventoryDetail(url, token, () => { }));
      callBack();
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_LOADING_NEW_CATEGORY });
  }
};

export const getAttribute = (merchantId) => async (dispatch) => {
  try {
    const url = `attribute/search?key=&page=1&row=20&sorts=&merchantId=${merchantId}`;
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    let { data = null } = await api.getApi(url, token);

    if (parseInt(data.codeNumber) === 200) {
      dispatch({ type: typeRetailer.SET_ATTRIBUTES, payload: data?.data || [] })
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
  }
};

export const getAttributeById = (attributeId, callBack) => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.LOADING_ATTRIBUTE });

    const url = `attribute/${attributeId}`;
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    let { data = null } = await api.getApi(url, token);

    if (parseInt(data.codeNumber) === 200) {
      callBack(data.data);
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_LOADING_ATTRIBUTE });
  }
};


export const sortOverAll = (payload) => {
  return {
    type: typeRetailer.SORT_OVRERALL,
    payload,
  };
};

export const sort_sales_by_order = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_ORDER,
    payload,
  };
};

export const sort_sales_by_product = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_PRODUCT,
    payload,
  };
};

export const sort_sales_by_customer = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_CUSTOMER,
    payload,
  };
};

export const sort_sales_by_category = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_CATEGORY,
    payload,
  };
};

export const sort_top_category = (payload) => {
  return {
    type: typeRetailer.SORT_TOP_CATEGORY,
    payload,
  };
};

export const sort_top_product = (payload) => {
  return {
    type: typeRetailer.SORT_TOP_PRODUCT,
    payload,
  };
};

export const sort_staff_report = (payload) => {
  return {
    type: typeRetailer.SORT_STAFF_REPORT,
    payload,
  };
};

export const sort_payment_method = (payload) => {
  return {
    type: typeRetailer.SORT_PAYMENT_BY_METHOD,
    payload,
  };
};

export const sort_marketing_efficiency = (payload) => {
  return {
    type: typeRetailer.SORT_MARKETING_EFFICIENCY,
    payload,
  };
};

export const sort_inventory = (payload) => {
  return {
    type: typeRetailer.SORT_INVENTORY,
    payload,
  };
};

export const sort_customer = (payload) => {
  return {
    type: typeRetailer.SORT_CUSTOMER,
    payload,
  };
};

export const sort_orders = (payload) => {
  return {
    type: typeRetailer.SORT_ORDERS,
    payload,
  };
};

export const reset_sort_orders = (payload) => {
  return {
    type: typeRetailer.RESET_SORT_ORDERS,
    payload,
  };
};

export const reset_sort_inventory = (payload) => {
  return {
    type: typeRetailer.RESET_SORT_INVENTORY,
    payload,
  };
};

export const reset_sort_customer = (payload) => {
  return {
    type: typeRetailer.RESET_SORT_CUSTOMER,
    payload,
  };
};

export const resetSortStaff = () => {
  return {
    type: typeRetailer.RESET_SORT_STAFF,
  };
};

export const closeExport = () => {
  return {
    type: typeRetailer.CLOSE_EXPORT,
  };
};

export const setVisibleOrderDetail = (payload) => {
  return {
    type: typeRetailer.SET_VISIBLE_ORDER_DETAIL,
    payload,
  };
};
export const setVisibleInventoryDetail = (payload) => {
  return {
    type: typeRetailer.SET_VISIBLE_INVENTORY_DETAIL,
    payload,
  };
};

export const setVisibleInventoryEdit = (payload) => {
  return {
    type: typeRetailer.SET_VISIBLE_INVENTORY_EDIT,
    payload,
  };
};

export const setVisibleCustomerDetail = (payload) => {
  return {
    type: typeRetailer.SET_VISIBLE_CUSTOMER_DETAIL,
    payload,
  };
};

export const sortCustomerAppointment = (payload) => {
  return {
    type: typeRetailer.SORT_CUSTOMER_APPOINTMENT,
    payload,
  };
};

export const resetSortCustomerAppointment = (payload) => {
  return {
    type: typeRetailer.RESET_SORT_CUSTOMER_APPOINTMENT,
    payload,
  };
};
