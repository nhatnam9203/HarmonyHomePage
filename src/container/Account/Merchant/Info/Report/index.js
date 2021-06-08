import React from "react";
import { ColumnReport, dataColumnReport as data } from "./widget";
import { Overall, SalesByOrder, SalesByPayment, SalesByProduct } from "./pages";
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
        return <Overall />;

      case "Sales by Order":
        return <SalesByOrder />;

      case "Sales by Payment method":
        return <SalesByPayment />;

      case "Sales by Product":
        return <SalesByProduct />;

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
              <ColumnReport title="Customers" data={data.columnCustomers} />
              <ColumnReport title="Marketing" data={data.columnMarketing} />
              <ColumnReport title="Staffs" data={data.columnStaffs} />
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
