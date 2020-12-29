import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div style={styles.loader}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loading;

const styles = {
  loader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
};
