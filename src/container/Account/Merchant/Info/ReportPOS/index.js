import React from "react";
import { ColumnReport, dataColumnReport as data } from "./widget";
import {
  SalesByPayment,
  SalesByProduct,
  SalesByCategory,
  SalesByCustomer,
  TopProduct,
  TopCategory,
  StaffReport,
  MarketingEfficiency,
  SalesByService,
  SalesByCategoryService,
  GiftCard,
  ServiceDuration
} from "./pages";
import Fade from "react-reveal/Fade";

import "../Info.scss";

const Index = () => {
  const [pageVisibile, setPageVisible] = React.useState("");
  const [keyVisible, setKeyVisible] = React.useState("");

  const onClickItemColumn = (page, key) => {
    setPageVisible(page);
    setKeyVisible(key);
  };

  const renderPages = () => {
    switch (pageVisibile) {

      case "Sales by Payment method":
        return <SalesByPayment onBack={() => onClickItemColumn("")} />;

      case "Sales by Product":
        return <SalesByProduct onBack={() => onClickItemColumn("")} />;

      case "Sales by Category":
        if (keyVisible !== 13)
          return <SalesByCategory onBack={() => onClickItemColumn("")} />;
        else return <SalesByCategoryService onBack={() => onClickItemColumn("")} />

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

      case "Gift card sales":
        return <GiftCard onBack={() => onClickItemColumn("")} />;

      case "Sales by service":
        return <SalesByService onBack={() => onClickItemColumn("")} />;

      case "Service duration":
        return <ServiceDuration onBack={() => onClickItemColumn("")} />;

      default:
        return (
          <>
            <div className="info_merchant_title">Report</div>
            <div className="report_container_column">
              <ColumnReport
                title="Staffs"
                data={data.columnStaffs}
                onClickItem={onClickItemColumn}
              />
              <ColumnReport
                title="Services"
                data={data.columnServive}
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
                title="Gift cards"
                data={data.columnGiftCard}
                onClickItem={onClickItemColumn}
              />
              <ColumnReport
                title="Overall"
                data={data.columnMarketing}
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
