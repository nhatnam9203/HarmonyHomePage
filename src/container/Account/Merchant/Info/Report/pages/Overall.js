import React, { Component } from "react";
import { SelectDate } from "../widget";
import icon_download from "@/assets/images/retailer/icon_download.png";
import "./style.scss";

export default class Overall extends Component {
  render() {
    return (
      <>
        <div className="info_merchant_title">Overall</div>
        <SelectDate />
        <div className="row_button_report top20">
          <div className="report_button">Show report</div>
          <div className="report_button_icon">
            Export
            <img src={icon_download} />
          </div>
        </div>
      </>
    );
  }
}
