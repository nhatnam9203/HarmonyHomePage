import React from "react";
import Fade from "react-reveal/Fade";
import PopupCustom from "./PopupCustom";
import "./style.scss";

const data = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Lats Month",
  "Custom",
];

const PopupSelectDate = ({ closePopupDate, onChangeDate }) => {
  const [dateSelected, setDateSelected] = React.useState("This Week");

  const changeDate = (e, date) => {
    e.stopPropagation();
    setDateSelected(date);
    onChangeDate(date);
    date !== "Custom" && closePopupDate();
  };

  return (
    <div className="popupDate_container">
      <div
        className="popupDate"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderTopRightRadius: dateSelected === "Custom" ? "0px" : "5px",
          borderBottomRightRadius: dateSelected === "Custom" ? "0px" : "5px",
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
      {dateSelected === "Custom" && <PopupCustom />}
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
