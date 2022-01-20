import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import icon_download from "@/assets/images/retailer/icon_download.png";
import "react-slidedown/lib/slidedown.css";
import "./style.scss";

const ButtonReport = ({
  isNotReport = false,
  isNotShowReport = false,
  onClickExport = () => { },
  onClickShowReport = () => { },
  renderShowReport
}) => {
  const [isPopupExport, setPopupExport] = React.useState(false);

  const openPopupReport = () => {
    setPopupExport(true);
  };

  const closePopupReport = () => {
    setPopupExport(false);
  };

  return (
    <div className="row_button_report top20">
      {
        renderShowReport ? renderShowReport() : <div onClick={onClickShowReport} className="report_button">
          Show report
        </div>
      }
      {!isNotReport && (
        <OutsideClickHandler onOutsideClick={closePopupReport}>
          <div
            onClick={openPopupReport}
            className="report_button_icon"
            style={{ borderColor: isPopupExport ? "#1366AE" : "#dddddd" }}
          >
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
        <ItemExport onClick={onClickExport} title="CSV" />
        <ItemExport
          onClick={onClickExport}
          title="Excel"
          style={{ marginTop: 15 }}
        />
      </div>
    </div>
  );
};

const ItemExport = ({ onClick, title, style }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick(title);
      }}
      style={style}
    >
      {title}
    </div>
  );
};

export default ButtonReport;
