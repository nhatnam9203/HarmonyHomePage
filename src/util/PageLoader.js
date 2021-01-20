import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

function PageLoader() {
  return (
    <div style={styles.loader}>
      <PuffLoader size={60} color="#0764b0" />
    </div>
  );
}

export default PageLoader;

const styles = {
  loader: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0764b0",
  },
};
