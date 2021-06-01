import React from "react";
import "../style.scss";

const ColumnReport = ({ title = "", data = [] }) => {
  return (
    <div className="report_column">
      <h4>{title}</h4>
      {data.map((obj) => {
        return (
          <p className="report_column_item" key={obj.key}>
            {obj.name}
          </p>
        );
      })}
    </div>
  );
};

export default ColumnReport;
