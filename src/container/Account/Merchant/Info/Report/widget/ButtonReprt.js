import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { SlideDown } from "react-slidedown";
import icon_download from "@/assets/images/retailer/icon_download.png";
import "react-slidedown/lib/slidedown.css";
import "./style.scss";

const ButtonReport = ({ isReport = false }) => {
  const [isPopupExport, setPopupExport] = React.useState(false);

  const openPopupReport = () => {
    setPopupExport(true);
  };

  const closePopupReport = () => {
    setPopupExport(false);
  };

  return (
    <div className="row_button_report top20">
      <div className="report_button">Show report</div>
      <OutsideClickHandler onOutsideClick={closePopupReport}>
        <div onClick={openPopupReport} className="report_button_icon">
          Export
          <img src={icon_download} />
          <PopupExport isPopupExport={isPopupExport} />
        </div>
      </OutsideClickHandler>
    </div>
  );
};

const PopupExport = ({ isPopupExport }) => {
  if (!isPopupExport) return null;
  return (
    <div className="popupExport">
      <div>
        <div>PDF</div>
        <div style={{ marginTop: 13 }}>Excel</div>
      </div>
    </div>
  );
};

export default ButtonReport;
