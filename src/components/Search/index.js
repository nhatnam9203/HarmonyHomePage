import React from "react";
import searchIcon from "../../assets/images/searchIconGrey.png";
import "./style.scss";

const Index = ({ value = "", onChange = () => {}, onSubmit = () => {} }) => {
  const submit = (e) => {
    e && e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={submit}>
      <div className="search_container">
        <input value={value} onChange={onChange} placeholder="Search..." />
        <img src={searchIcon} onClick={submit} alt="img" />
      </div>
    </form>
  );
};

export default Index;
