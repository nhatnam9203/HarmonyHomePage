import React from "react";
import PopupCustom from "./PopupCustom";
import { SlideDown } from "react-slidedown";
import OutsideClickHandler from "react-outside-click-handler";
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
  const [isCustom, setCustom] = React.useState(false);

  const changeDate = (e, date) => {
    e.stopPropagation();
    if (date !== "Custom") {
      onChangeDate(date);
      closePopupDate();
      setCustom(false);
    } else {
      setCustom(true);
    }
  };

  const handleClickOutSide = () => {
    closePopupDate();
    setCustom(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleClickOutSide}>
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
                  isActive={
                    (dateSelected === obj &&
                      isCustom === false &&
                      dateSelected !== "Custom") ||
                    (isCustom === true && obj === "Custom")
                  }
                />
              ))}
            </div>
          )}
        </SlideDown>
        {isCustom && isPopupDate && (
          <PopupCustom
            updateValueCustom={(start, end) => {
              updateValueCustom(start, end);
              setCustom(false);
              closePopupDate();
            }}
          />
        )}
      </div>
    </OutsideClickHandler>
  );
};

const ItemDate = ({ onChangeDate, isActive, obj }) => (
  <div
    onClick={(e) => onChangeDate(e, obj)}
    className="popupDate_rowSelect"
    key={obj}
    style={{
      color: isActive ? "#1366AE" : "#585858",
      fontWeight: isActive ? "600" : "400",
    }}
  >
    {obj}
  </div>
);

export default PopupSelectDate;
