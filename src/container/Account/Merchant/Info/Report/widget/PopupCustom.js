import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.scss";

const PopupCustom = ({}) => {
  const [value, onChange] = React.useState(new Date());

  return (
    <div onClick={(e) => e.stopPropagation()} className="popupCustom_container">
      <Calendar
        onChange={onChange}
        value={value}
        nextLabel={"next"}
        next2Label={<div />}
        prevLabel={"prev"}
        prev2Label={<div />}
        defaultView="month"
        view="month"
        onClickDecade={(value, event) => {
          console.log({ value, event });
        }}
        onDrillUp={(value, event) => {
          console.log({ value, event });
        }}
        onDrillDown={(value, event) => {
          console.log({ value, event });
        }}
      />
    </div>
  );
};

export default PopupCustom;
