export const convertDateData = (date) => {
  let temp = "today";

  switch (date) {
    case "Today":
      temp = "today";
      break;
    case "Yesterday":
      temp = "yesterday";
      break;
    case "This Week":
      temp = "thisWeek";
      break;
    case "Last Week":
      temp = "lastWeek";
      break;
    case "This Month":
      temp = "thisMonth";
      break;
    case "Last Month":
      temp = "lastMonth";
      break;

    default:
      temp = date;
      break;
  }

  return temp;
};

export const convertIsVip = (isVip) => {
  let value = "InValid";
  switch (parseInt(isVip)) {
    case 0:
      value = "Normal";
      break;

    case 1:
      value = "Vip";
      break;

    case 2:
      value = "Blacklist";
      break;

    default:
      break;
  }

  return value;
};

export const CustomStatus = ({ status }) => {
  const convertColor = (status) => {
    let color = "#FEDC32",
      backgroundColor = "#404040";
    switch (status) {
      case "checkin":
        color = "white";
        backgroundColor = "#1366AE";
        break;

      case "Processing":
        color = "white";
        backgroundColor = "#1366AE";
        break;

      case "confirm":
        color = "#404040";
        backgroundColor = "#C8EDFB";
        break;

      case "unconfirm":
        color = "#404040";
        backgroundColor = "#FEDC32";
        break;

      case "Pending":
        color = "#404040";
        backgroundColor = "#FEDC32";
        break;

      case "paid":
        color = "white";
        backgroundColor = "#53D769";
        break;

      case "Complete":
        color = "white";
        backgroundColor = "#53D769";
        break;

      case "cancel":
        color = "#404040";
        backgroundColor = "#E5E5E5";
        break;

      case "Canceled":
        color = "#404040";
        backgroundColor = "#E5E5E5";
        break;

      case "shipped":
        color = "#404040";
        backgroundColor = "transparent";
        break;

      case "Shipped":
        color = "#404040";
        backgroundColor = "transparent";
        break;

      case "Return":
        color = "white";
        backgroundColor = "#B73B36";
        break;

      default:
        break;
    }
    return { backgroundColor, color };
  };

  return (
    <div
      style={{
        backgroundColor: convertColor(status).backgroundColor,
        color: convertColor(status).color,
        borderWidth: 1,
        borderColor:
          status === "shipped" || status === "Shipped"
            ? "#53D769"
            : "transparent",
      }}
      className="table_row_status"
    >
      {status}
    </div>
  );
};

export const summary = (value) => {
  return {
    total_averageOrder: value.averageOrder,
    total_date: value.date,
    total_tax: value.tax,
    total_revenue: value.revenue,
    total_totalOrder: value.totalOrder,
    total_cost: value.cost,
    total_profit: value.profit,
  };
};

export const summary_sales_by_order = (value) => {
  return {
    total_canceled: value.canceled,
    total_date: value.date,
    total_completed: value.completed,
    total_returned: value.returned,
    total_total: value.total,
    total_unCompleted: value.unCompleted,
  };
};

export const summary_sales_by_product = (value) => {
  return {
    total_name: value.name,
    total_quantity: value.quantity,
    total_totalCost: value.totalCost,
    total_totalProfit: value.totalProfit,
    total_totalRevenue: value.totalRevenue,
    total_totalTax: value.totalTax,
  };
};

export const summary_sales_by_customer = (value) => {
  return {
    total_name: value.name,
    total_appointmentCount: value.appointmentCount,
    total_lastVisitSale: value.lastVisitSale,
    total_lastVisitDate: value.lastVisitDate,
    total_total: value.total,
  };
};

export const summary_staff_report = (value) => {
  return {
    total_name: value.name,
    total_productSales: value.productSales,
    total_productSplit: value.productSplit,
    total_workingHour: value.workingHour,
    total_salaryWage: value.salaryWage,
    total_refundAmount: value.refundAmount,
    total_discountByStaff: value.discountByStaff,
    total_salary: value.salary,
  };
};

export const summary_payment_by_method = (value) => {
  return {
    total_canceled: value.canceled,
    total_date: value.date,
    total_completed: value.completed,
    total_returned: value.returned,
    total_total: value.total,
    total_unCompleted: value.unCompleted,
  };
};

export const summary_marketing_efficiency = (value) => {
  return {
    total_name: value.name,
    total_discount: value.discount,
    total_revenue: value.revenue,
  };
};

export const FormatPrice = (price) => {
  const checkPrice = price ? price + "" : "0";
  const formatPrice = checkPrice.replace(",", "");
  return parseFloat(formatPrice);
};

export const formatNumberFromCurrency = (currency) => {
  return Number(`${currency}`.replace(/[^0-9.-]+/g, ""));
};

export const formatMoney = (
  number,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  let amount = formatNumberFromCurrency(number);
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
        : "")
    );
  } catch (e) { }
};


const createOptionsValuesQty = (optionValues) => {
  if (!optionValues || optionValues?.length <= 0) return null;

  return optionValues?.map((item) => ({
    id: 0,
    label: item.label,
    attributeIds: [item.attributeValueId],
    quantity: 0,
    costPrice: "0.00",
    additionalPrice: "0.00",
  }));
};

export const combineOptionsValuesQty = (qtyArr, optionValues) => {
  if (!qtyArr || !optionValues || optionValues?.length <= 0) return qtyArr;

  var resultArray = [];

  for (var i = 0; i < optionValues?.length; i++) {
    const item = optionValues[i];

    const qtyArrOfOptions = qtyArr?.map((x) =>
      Object.assign({}, x, {
        label: `${x.label ?? ""} - ${item.label ?? ""}`,
        attributeIds: [...x.attributeIds, item.attributeValueId],
      })
    );

    resultArray = resultArray.concat(qtyArrOfOptions);
  }

  return resultArray;
};

export const createQuantitiesItem = (product, options, name = null) => {
  if (!options || options?.length < 0) return null;

  const quantities = options?.reduce((accumulator, currentValue, index) => {
    if (!accumulator || accumulator?.length <= 0)      
    return createOptionsValuesQty(
        currentValue?.values?.filter((x) => x.checked)
      );

    return combineOptionsValuesQty(
      accumulator,
      currentValue?.values?.filter((x) => x.checked)
    );
  }, []);

  return quantities?.map((quantity) =>
    Object.assign({}, quantity, {
      label: `${name ? name : product.name ? product.name : "New - product"} - ${quantity.label ?? ""}`,
      price: product.price ? product.price : "0.00",
      description: "",
      fileId: 0,
    })
  );
};

export const createVersionFromItems = (product, items) => {
  const item = items?.reduce((accumulator, currentValue, index) => {

    return Object.assign({}, accumulator, {
      label: accumulator?.label
        ? `${accumulator.label ?? ""} - ${currentValue.label ?? ""}`
        : currentValue.label,
      attributeIds: [
        ...(accumulator.attributeIds || []),
        currentValue.attributeValueId,
      ],
    });

  }, {});

  return {
    label: `${product?.name ?? "New product"} - ${item.label ?? ""}`,
    price: item?.price || "0.00",
    attributeIds: item.attributeIds,
  };
};

export const arrayIsEqual = (a, b) => {
  if (a?.length !== b?.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) return false;
  }

  return true;
};
