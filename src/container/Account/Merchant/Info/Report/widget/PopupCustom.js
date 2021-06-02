import React from "react";
import DayPicker from "react-day-picker";
import { Button } from "react-bootstrap";
import prev from "@/assets/images/retailer/prev.png";
import next from "@/assets/images/retailer/next.png";
import moment from "moment";
import "react-day-picker/lib/style.css";
import "./style.scss";

const PopupCustom = ({}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className="popupCustom_container">
      <div>
        <Picker />
        <div className="daypicker-input-container">
          <Input />
          <span>-</span>
          <Input />
        </div>
      </div>

      <div>
        <div style={{ marginLeft: 15 }}>
          <Picker />
        </div>
        <div className="daypicker-btn-apply-container">
          <Button className="daypicker-btn-apply" variant="primary">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

const Picker = () => {
  const [daySelected, setDaySelected] = React.useState(moment());

  const onChangeDay = (date) => {
    setDaySelected(date);
  };

  return (
    <DayPicker
      firstDayOfWeek={1}
      navbarElement={(event) => {
        const { month, onNextClick, onPreviousClick } = event;
        return (
          <NavbarPicker
            month={month}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        );
      }}
      className="daypicker-container"
      renderDay={(day) => {
        return (
          <Day
            day={day}
            isPicked={
              moment(daySelected).format("MMDDYYYY") ===
              moment(day).format("MMDDYYYY")
            }
            onClick={onChangeDay}
          />
        );
      }}
    />
  );
};

const Day = ({ day, isPicked, onClick }) =>
  !isPicked ? (
    <div onClick={() => onClick(day)} className={"daypicker-renderDay"}>
      {moment(day).format("DD")}
    </div>
  ) : (
    <div onClick={() => onClick(day)} className={"daypicker-renderDay"}>
      <div className="daypicker-renderDay-picked">
        {moment(day).format("DD")}
      </div>
    </div>
  );

const NavbarPicker = ({ month, onNextClick, onPreviousClick }) => (
  <div className="daypicker-nav">
    <img onClick={() => onPreviousClick()} src={prev} alt={"img"} />
    <span>{moment(month).format("MMMM YYYY")}</span>
    <img onClick={() => onNextClick()} src={next} alt={"img"} />
  </div>
);

const Input = () => {
  return (
    <div className="daypicker-input">
      <input placeholder="date ..." />
    </div>
  );
};

export default PopupCustom;
