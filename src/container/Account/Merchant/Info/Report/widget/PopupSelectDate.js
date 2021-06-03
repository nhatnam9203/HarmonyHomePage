import React from "react";
import PopupCustom from "./PopupCustom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import "./style.scss";

const data = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "Custom",
];

const PopupSelectDate = ({
  closePopupDate,
  onChangeDate,
  isPopupDate,
  dateSelected,
  updateValueCustom,
}) => {
  const changeDate = (e, date) => {
    e.stopPropagation();
    onChangeDate(date);
    date !== "Custom" && closePopupDate();
  };

  return (
    <div className="popupDate_container">
      <SlideDown>
        {isPopupDate && (
          <div
            className="popupDate"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderTopRightRadius: dateSelected === "Custom" ? "0px" : "5px",
              borderBottomRightRadius:
                dateSelected === "Custom" ? "0px" : "5px",
              borderRightWidth: dateSelected === "Custom" ? "0px" : "1px",
            }}
          >
            {data.map((obj) => (
              <ItemDate
                key={obj}
                obj={obj}
                onChangeDate={changeDate}
                dateSelected={dateSelected}
              />
            ))}
          </div>
        )}
      </SlideDown>
      {dateSelected === "Custom" && isPopupDate && (
        <PopupCustom updateValueCustom={updateValueCustom} />
      )}
    </div>
  );
};

const ItemDate = ({ onChangeDate, dateSelected, obj }) => (
  <div
    onClick={(e) => onChangeDate(e, obj)}
    className="popupDate_rowSelect"
    key={obj}
    style={{
      color: dateSelected === obj ? "#1366AE" : "#585858",
      fontWeight: dateSelected === obj ? "600" : "400",
    }}
  >
    {obj}
  </div>
);

export default PopupSelectDate;
