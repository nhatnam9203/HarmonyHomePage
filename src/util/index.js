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
