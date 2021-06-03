import React from "react";
import icon_calendar from "@/assets/images/retailer/icon_calendar.png";
import PopupSelectDate from "./PopupSelectDate";
import OutsideClickHandler from "react-outside-click-handler";

import "./style.scss";

const SelectDate = ({ value = "This week", onChangeDate }) => {
  const [isPopupDate, setPopupDate] = React.useState(false);

  const togglePopupDate = () => {
    setPopupDate(!isPopupDate);
  };

  const closePopupDate = () => {
    setPopupDate(false);
  };

  return (
    <div className="selectDate-button">
      <div
        onClick={togglePopupDate}
        className="report_button_icon top20 button_select_date"
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
          />
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default SelectDate;
