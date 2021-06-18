import React from "react";
import "./style.scss";

const Index = ({ children, style }) => {
  return (
    <div style={style} className="oderDetail_title">
      {children}
    </div>
  );
};

export default Index;
