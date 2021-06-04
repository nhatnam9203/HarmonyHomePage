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

  return (
    <>
      <div className="info_merchant_title">Overall</div>
      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />
      <ButtonReport />
    </>
  );
};

export default Overall;
