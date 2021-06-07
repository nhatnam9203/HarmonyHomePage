import React from "react";
import Modal from "react-bootstrap/Modal";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useSelector } from "react-redux";
import check from "../../assets/images/retailer/check.png";
import close_black from "../../assets/images/retailer/close_black.png";
import "./style.scss";

const Index = ({ isVisible, linkExport, closeExport = () => {} }) => {
  const { loadingExport } = useSelector((state) => state.retailer);

  return (
    <>
      <Modal
        show={isVisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modalExport">
          {!loadingExport && (
            <img
              onClick={closeExport}
              src={close_black}
              className="icon_close_export"
            />
          )}

          {loadingExport ? (
            <>
              <ScaleLoader
                size={150}
                height={35}
                color={"#0764b0"}
                loading={true}
              />
              <h3>Please wait ...</h3>
              <p>Your link is exporting.</p>
            </>
          ) : (
            <>
              <img src={check} />
              <h3>Click below link to download</h3>
              <a href={linkExport}>{linkExport}</a>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Index;
