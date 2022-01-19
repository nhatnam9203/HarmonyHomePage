
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
    summary_payment_method_pos,
    summary_sales_by_service_pos,
    FormatPrice,
} from "@/util";


export const getPaymentByMethod = (requestUrl = "", token = "") => async (
    dispatch
) => {
    try {
        console.log({ requestUrl })
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

            console.log({ temptData })

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

        console.log('reponse sales by service : ', { data, requestUrl });

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
