
import * as api from "../api/index";
import * as typeRetailer from "../constants/retailerConstant";
import * as typeNotify from "../constants/notifyConstants";

import {
    summary_payment_method_pos,
    summary_sales_by_service_pos,
    summary_sales_by_category_service_pos,
    summary_sales_by_product_pos,
    summary_sales_by_category_product_pos,
    summary_sales_by_giftCard,
    summary_service_duration,
    summary_staff_statistic,
    summary_sales_by_customer_pos,
    handleChange,
    FormatPrice,
} from "@/util";

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
                result = [
                    ...temptData,
                    {
                        ...summary_sales_by_customer_pos(temptData),
                    },
                ];
            
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



export const getPaymentByMethod = (requestUrl = "", token = "") => async (
    dispatch
) => {
    try {
        dispatch({ type: typeRetailer.RETAILER_REQUEST });
        let { data = null } = await api.getByPage(requestUrl, token);

        if (parseInt(data.codeNumber) === 200) {

            let temptData = data?.data
                ? data.data.map((obj) => {
                    return {
                        ...obj,
                        grossPayment: FormatPrice(obj.grossPayment),
                        netPayment: FormatPrice(obj.netPayment),
                        refund: FormatPrice(obj.refund),
                    };
                })
                : [];

            let result = [];
            if (temptData.length > 0)
                result = [...temptData, summary_payment_method_pos(temptData)];

            dispatch({
                type: "SET_PAYMENT_BY_METHOD_POS",
                payload: { data: result, summary: data?.summary },
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

export const getServiceDuration = (requestUrl = "", token = "") => async (
    dispatch
) => {
    try {
        dispatch({ type: typeRetailer.RETAILER_REQUEST });
        let { data = null } = await api.getByPage(requestUrl, token);

        console.log('response service duration : ', { data });

        if (parseInt(data.codeNumber) === 200) {

            // let temptData = data?.data
            //     ? data.data.map((obj) => {
            //         return {
            //             ...obj,
            //             grossPayment: FormatPrice(obj.grossPayment),
            //             netPayment: FormatPrice(obj.netPayment),
            //             refund: FormatPrice(obj.refund),
            //         };
            //     })
            //     : [];

            let result = [];
            result = [...data?.data, summary_service_duration(data?.data)];

            dispatch({
                type: "SET_SERVICE_DURATION",
                payload: { data: result, summary: data?.summary },
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
                        serviceSales: FormatPrice(obj.serviceSales),
                        surcharge: FormatPrice(obj.surcharge),
                        netServiceSales: FormatPrice(obj.netServiceSales),
                        serviceSplit: FormatPrice(obj.serviceSplit),
                        tip: FormatPrice(obj.tip),
                        salary: FormatPrice(obj.salary),
                        discountByStaff : FormatPrice(obj.discountByStaff),
                        refundAmount : FormatPrice(obj.refundAmount),
                    };
                })
                : [];
            if (temptData.length > 0)
                dispatch({
                    type: "SET_STAFF_REPORT_POS",
                    payload: { data: temptData, count: data?.count },
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

export const getSalesByService = (requestUrl = "", token = "") => async (
    dispatch
) => {
    try {
        dispatch({ type: typeRetailer.RETAILER_REQUEST });
        let { data = null } = await api.getByPage(requestUrl, token);

        if (parseInt(data.codeNumber) === 200) {

            let temptData = data?.data
                ? data.data.map((obj) => {
                    return {
                        ...obj,
                        totalSales: FormatPrice(obj.totalSales),
                        avgPrice: FormatPrice(obj.avgPrice),
                        totalDuration: FormatPrice(obj.totalDuration)
                    };
                })
                : [];

            let result = [];

            if (temptData.length > 0)
                result = [...temptData, summary_sales_by_service_pos(temptData)];

            dispatch({
                type: "SET_SALES_BY_SERVICE_POS",
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

export const getSalesByCategoryService = (requestUrl = "", token = "") => async (
    dispatch
) => {
    try {
        dispatch({ type: typeRetailer.RETAILER_REQUEST });
        let { data = null } = await api.getByPage(requestUrl, token);

        if (parseInt(data.codeNumber) === 200) {

            let temptData = data?.data
                ? data.data.map((obj) => {
                    return {
                        ...obj,
                        totalHour: FormatPrice(obj.totalHour),
                        totalSales: FormatPrice(obj.totalSales),
                    };
                })
                : [];

            let result = [];

            if (temptData.length > 0)
                result = [...temptData, summary_sales_by_category_service_pos(temptData)];

            dispatch({
                type: "SET_SALES_BY_CATEGORY_SERVICE_POS",
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
                        stockOnHand: FormatPrice(obj.stockOnHand),
                        avgPrice: FormatPrice(obj.avgPrice),
                        totalSales: FormatPrice(obj.totalSales),
                    };
                })
                : [];

            let result = [];

            if (temptData.length > 0)
                result = [...temptData, summary_sales_by_product_pos(temptData)];

            dispatch({
                type: "SET_SALES_BY_PRODUCT_POS",
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

export const getSalesByCategoryProduct = (requestUrl = "", token = "") => async (
    dispatch
) => {
    try {
        dispatch({ type: typeRetailer.RETAILER_REQUEST });
        let { data = null } = await api.getByPage(requestUrl, token);

        if (parseInt(data.codeNumber) === 200) {

            let temptData = data.data
                ? data.data.map((obj,key) => {
                    return {
                        ...obj,
                        avgPrice: FormatPrice(obj.avgPrice),
                        totalSales: FormatPrice(obj.totalSales),
                        categoryId :"product" + key
                    };
                })
                : [];

            let result = [];

            if (temptData.length > 0)
                result = [...temptData, summary_sales_by_category_product_pos(temptData)];

            dispatch({
                type: "SET_SALES_BY_CATEGORY_PRODUCT_POS",
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

export const getSalesByGiftCard = (requestUrl = "", token = "") => async (
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
                        sales: FormatPrice(obj.sales),
                    };
                })
                : [];

            let result = [];

            if (temptData.length > 0)
                result = [...temptData, summary_sales_by_giftCard(temptData)];

            dispatch({
                type: "SET_SALES_BY_GIFTCARD",
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


export const getStaffStatistic = (requestUrl = "", token = "", callBack) => async (
    dispatch
) => {
    try {
        dispatch({ type: typeRetailer.RETAILER_REQUEST });
        let { data = null } = await api.getByPage(requestUrl, token);

        console.log({ requestUrl, data });


        if (parseInt(data.codeNumber) === 200) {

            let result = [];

            if (data?.data.length > 0)
                result = [...data?.data, summary_staff_statistic(data?.data)];

            dispatch({
                type: "SET_STAFF_STATISTIC",
                payload: { data: result, summary: data.summary },
            });
            callBack && callBack();
        } else {
            dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
        }
    } catch (error) {
        dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    } finally {
        dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
    }
};


export const sort_staff_report = (payload) => {
    return {
        type: "SORT_STAFF_POS",
        payload,
    };
};

export const sort_payment_method = (payload) => {
    return {
        type: typeRetailer.SORT_PAYMENT_BY_METHOD,
        payload,
    };
};


export const sort_sales_by_service = (payload) => {
    return {
        type: "SORT_SALES_BY_SERVICE_POS",
        payload,
    };
};

export const sort_sales_by_category_service = (payload) => {
    return {
        type: "SORT_SALES_BY_CATEGORY_SERVICE_POS",
        payload,
    };
};

export const sort_sales_by_product_pos = (payload) => {
    return {
        type: "SORT_SALES_BY_PRODUCT_POS",
        payload,
    };
};

export const sort_sales_by_category_product_pos = (payload) => {
    return {
        type: "SORT_SALES_BY_CATEGORY_PRODUCT_POS",
        payload,
    };
};

export const sort_sales_by_giftCard = (payload) => {
    return {
        type: "SORT_SALES_BY_GIFTCARD",
        payload,
    };
};

export const sort_service_duration = (payload) => {
    return {
        type: "SORT_SERVICE_DURATION",
        payload,
    };
}

export const sort_staff_statistic = (payload) => {
    return {
        type: "SORT_STAFF_STATISTIC",
        payload
    }
}

export const sort_giftCard_statistic = (payload) => {
    return {
        type: "SORT_GIFTCARD_STATISTIC",
        payload
    }
}

export const sort_customer_statistic = (payload) => {
    return {
        type: "SORT_CUSTOMER_STATISTIC",
        payload
    }
}

export const sort_service_statistic = (payload) => {
    return {
        type: "SORT_SERVICE_STATISTIC",
        payload
    }
}
export const sort_service_category_statistic = (payload) =>{
    return {
        type: "SORT_CATEGORY_SERVICE_STATISTIC",
        payload
    }
}

export const sort_product_category_statistic = (payload) =>{
    return {
        type: "SORT_PRODUCT_CATEGORY_STATISTIC",
        payload
    }
}


export const sort_product_statistic = (payload) =>{
    return {
        type: "SORT_PRODUCT_STATISTIC",
        payload
    }
}


export const  sort_marketing_statistic = (payload) =>{
    return {
        type: "SORT_MARKETING_STATISTIC",
        payload
    }
}

export const  sort_payment_method_statistic = (payload) =>{
    return {
        type: "SORT_PAYMENT_METHOD_STATISTIC",
        payload
    }
}