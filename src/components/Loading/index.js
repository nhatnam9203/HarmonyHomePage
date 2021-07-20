import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./style.scss";

function Loading({ style }) {
  return (
    <div style={style} className="container-loading">
      <ScaleLoader size={150} height={35} color={"#0764b0"} loading={true} />
    </div>
  );
}

export default Loading;
