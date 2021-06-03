import React from "react";
import { SelectDate } from "../widget";
import icon_download from "@/assets/images/retailer/icon_download.png";
import "./style.scss";

const Overall = () => {
  const [valueDate, setValueDate] = React.useState("This Week");

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  return (
    <>
      <div className="info_merchant_title">Overall</div>
      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />
      <div className="row_button_report top20">
        <div className="report_button">Show report</div>
        <div className="report_button_icon">
          Export
          <img src={icon_download} />
        </div>
      </div>
    </>
  );
};

export default Overall;
