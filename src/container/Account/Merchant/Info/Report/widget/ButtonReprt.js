import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import icon_download from "@/assets/images/retailer/icon_download.png";
import "react-slidedown/lib/slidedown.css";
import "./style.scss";

const ButtonReport = ({ isNotReport = false, onClickExport = () => {} }) => {
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
      {!isNotReport && (
        <OutsideClickHandler onOutsideClick={closePopupReport}>
          <div onClick={openPopupReport} className="report_button_icon">
            Export
            <img src={icon_download} />
            <PopupExport
              isPopupExport={isPopupExport}
              onClickExport={(reportType) => {
                onClickExport(reportType);
                closePopupReport();
              }}
            />
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

const PopupExport = ({ isPopupExport, onClickExport }) => {
  if (!isPopupExport) return null;
  return (
    <div className="popupExport">
      <div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClickExport("PDF");
          }}
        >
          PDF
        </div>

        <div
          onClick={(e) => {
            e.stopPropagation();
            onClickExport("Excel");
          }}
          style={{ marginTop: 13 }}
        >
          Excel
        </div>
      </div>
    </div>
  );
};

export default ButtonReport;