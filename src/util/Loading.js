import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function Loading() {
  return (
    <ScaleLoader
      css={styles.override}
      size={150}
      height={35}
      color={"#0764b0"}
      loading={true}
    />
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
