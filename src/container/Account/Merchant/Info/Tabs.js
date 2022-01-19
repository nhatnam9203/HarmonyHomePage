import React from "react";
import "./Info.scss";

const data = [
  "Business Information",
  "Orders",
  "Inventory",
  "Customer",
  "Report",
];

const data_POS = [
  "Business Information",
  "Report Salon POS",
]

const Tabs = ({ tabActive, changeTab, type }) => {

  const list = type == "Retailer" ? data : data_POS;

  return (
    <div className="infoTab_container">
      {list.map((tab, index) => (
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
