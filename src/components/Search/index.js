import React from "react";
import searchIcon from "../../assets/images/searchIconGrey.png";
import "./style.scss";

const Index = () => {
  return (
    <div className="search_container">
      <input placeholder="Search..." />
      <img src={searchIcon} />
    </div>
  );
};

export default Index;
