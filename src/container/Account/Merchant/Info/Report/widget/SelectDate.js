import React from "react";
import icon_calendar from "@/assets/images/retailer/icon_calendar.png";
import PopupSelectDate from "./PopupSelectDate";
import OutsideClickHandler from "react-outside-click-handler";

import "./style.scss";

const SelectDate = ({
  value = "This week",
  onChangeDate,
  updateValueCustom,
}) => {
  const [isPopupDate, setPopupDate] = React.useState(false);

  const togglePopupDate = () => {
    setPopupDate(!isPopupDate);
  };

  const closePopupDate = () => {
    setPopupDate(false);
  };

  const checkValue = () => {
    if (
      value === "Today" ||
      value === "Yesterday" ||
      value === "This Week" ||
      value === "Last Week" ||
      value === "This Month" ||
      value === "Last Month" ||
      value === "Custom"
    )
      return "button_select_date";

    return "button_select_date_expand";
  };

  return (
    <div className="selectDate-button">
      <div
        onClick={togglePopupDate}
        className={"report_button_icon top20 " + checkValue()}
        style={{ borderColor: isPopupDate ? "#1366AE" : "#dddddd" }}
      >
        {value}
        <img src={icon_calendar} alt="img" />
        <OutsideClickHandler onOutsideClick={closePopupDate}>
          <PopupSelectDate
            closePopupDate={closePopupDate}
            onChangeDate={onChangeDate}
            isPopupDate={isPopupDate}
            dateSelected={value}
            updateValueCustom={updateValueCustom}
          />
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default SelectDate;
