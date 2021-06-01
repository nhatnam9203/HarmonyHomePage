import React from "react";
import { ColumnReport, dataColumnReport as data } from "./widget";
import { Overall } from "./pages";
import Fade from "react-reveal/Fade";

import "../Info.scss";

const Index = () => {
  const [pageVisibile, setPageVisible] = React.useState("");

  const renderPages = () => {
    switch (pageVisibile) {
      case "Overall":
        return <Overall />;

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
              <ColumnReport title="Products" data={data.columnProducts} />
              <ColumnReport title="Customers" data={data.columnCustomers} />
              <ColumnReport title="Marketing" data={data.columnMarketing} />
              <ColumnReport title="Staffs" data={data.columnStaffs} />
            </div>
          </>
        );
    }
  };

  const onClickItemColumn = (page) => {
    setPageVisible(page);
  };

  return (
    <Fade>
      <div className="report_page">{renderPages()}</div>
    </Fade>
  );
};

export default Index;
