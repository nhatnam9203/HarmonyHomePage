import React from "react";
import "./Info.scss";

const data = [
  "Business Information",
  "Orders",
  "Inventory",
  "Customer",
  "Report",
];

const Tabs = ({ tabActive, changeTab }) => {
  return (
    <div className="infoTab_container">
      {data.map((tab, index) => (
        <div
          onClick={() => changeTab(tab)}
          key={"tab" + index}
          className={tab === tabActive ? "infoTab_item_active" : "infoTab_item"}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
