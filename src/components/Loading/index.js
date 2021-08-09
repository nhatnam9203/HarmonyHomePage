import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import FullLoading from "./FullLoading";
import "./style.scss";

function Loading({ style, isFullLoading = false }) {
  if (isFullLoading) {
    return (
      <FullLoading />
    )
  }
  return (
    <div style={style} className="container-loading">
      <ScaleLoader size={150} height={35} color={"#0764b0"} loading={true} />
    </div>
  );
}

export default Loading;
