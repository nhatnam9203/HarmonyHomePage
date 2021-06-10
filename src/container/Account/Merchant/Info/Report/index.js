import React from "react";
import { ColumnReport, dataColumnReport as data } from "./widget";
import {
  Overall,
  SalesByOrder,
  SalesByPayment,
  SalesByProduct,
  SalesByCategory,
  SalesByCustomer,
  TopProduct,
  TopCategory,
  StaffReport,
  MarketingEfficiency,
} from "./pages";
import Fade from "react-reveal/Fade";

import "../Info.scss";

const Index = () => {
  const [pageVisibile, setPageVisible] = React.useState("");

  const onClickItemColumn = (page) => {
    setPageVisible(page);
  };

  const renderPages = () => {
    switch (pageVisibile) {
      case "Overall":
        return <Overall onBack={() => onClickItemColumn("")} />;

      case "Sales by Order":
        return <SalesByOrder onBack={() => onClickItemColumn("")} />;

      case "Sales by Payment method":
        return <SalesByPayment onBack={() => onClickItemColumn("")} />;

      case "Sales by Product":
        return <SalesByProduct onBack={() => onClickItemColumn("")} />;

      case "Sales by Category":
        return <SalesByCategory onBack={() => onClickItemColumn("")} />;

      case "Sales by Customer":
        return <SalesByCustomer onBack={() => onClickItemColumn("")} />;

      case "Top Products":
        return <TopProduct onBack={() => onClickItemColumn("")} />;

      case "Top Categories":
        return <TopCategory onBack={() => onClickItemColumn("")} />;

      case "Staff reports":
        return <StaffReport onBack={() => onClickItemColumn("")} />;

      case "Marketing Efficiency":
        return <MarketingEfficiency onBack={() => onClickItemColumn("")} />;

      default:
        return (
          <>
            <div className="info_merchant_title">Report</div>
            <div className="report_container_column">
              <ColumnReport
                title="Sales"
                data={data.columnSales}
                onClickItem={onClickItemColumn}
              />
              <ColumnReport
                title="Products"
                data={data.columnProducts}
                onClickItem={onClickItemColumn}
              />
              <ColumnReport
                title="Customers"
                data={data.columnCustomers}
                onClickItem={onClickItemColumn}
              />
              <ColumnReport
                title="Marketing"
                data={data.columnMarketing}
                onClickItem={onClickItemColumn}
              />
              <ColumnReport
                title="Staffs"
                data={data.columnStaffs}
                onClickItem={onClickItemColumn}
              />
            </div>
          </>
        );
    }
  };

  return (
    <Fade>
      <div className="report_page">{renderPages()}</div>
    </Fade>
  );
};

export default Index;
