import React from "react";
import "../Info.scss";
import { ColumnReport, dataColumnReport as data } from "./widget";
import Fade from "react-reveal/Fade";

const Index = () => {
  return (
    <Fade>
      <div className="info_merchant_title">Report</div>
      <div className="report_container_column">
        <ColumnReport title="Sales" data={data.columnSales} />
        <ColumnReport title="Products" data={data.columnProducts} />
        <ColumnReport title="Customers" data={data.columnCustomers} />
        <ColumnReport title="Marketing" data={data.columnMarketing} />
        <ColumnReport title="Staffs" data={data.columnStaffs} />
      </div>
    </Fade>
  );
};

export default Index;
