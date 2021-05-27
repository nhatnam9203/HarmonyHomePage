import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./style.scss";

function Loading() {
  return (
    <div className="container-loading">
      <ScaleLoader
        css={styles.override}
        size={150}
        height={35}
        color={"#0764b0"}
        loading={true}
      />
    </div>
  );
}

export default Loading;

const styles = {
  override: {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    textAlign: "center",
  },
};
