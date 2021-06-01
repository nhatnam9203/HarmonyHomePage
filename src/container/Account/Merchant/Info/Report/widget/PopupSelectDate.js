import React from "react";
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

const PopupSelectDate = ({}) => {
  const [dateSelected, setDateSelected] = React.useState("This Week");

  const onChangeDate = (date) => {
    setDateSelected(date);
  };

  return (
    <div className="popupDate">
      {data.map((obj) => (
        <div
          onClick={() => onChangeDate(obj)}
          className="popupDate_rowSelect"
          key={obj}
          style={{
            color: dateSelected === obj ? "#1366AE" : "#585858",
            fontWeight: dateSelected === obj ? "600" : "400",
          }}
        >
          {obj}
        </div>
      ))}
    </div>
  );
};

export default PopupSelectDate;
