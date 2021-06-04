import React from "react";
import { SelectDate, ButtonReport } from "../widget";
import "./style.scss";

const Overall = () => {
  const [valueDate, setValueDate] = React.useState("This Week");

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  const onClickExport = (reportType) => {
    switch (reportType) {
      case "PDF":
        break;

      case "Excel":
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="info_merchant_title">Overall</div>
      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />
      <ButtonReport onClickExport={onClickExport} />
    </>
  );
};

export default Overall;
