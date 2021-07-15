import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import product_default from "@/assets/images/product_default.png";
import "./style.scss";

const PopupDefaultImage = ({
  isVisible = false,
  imageDefault,
  close = () => {},
  setDefaultImage,
}) => {
  const imageUrl = imageDefault?.imageUrl || product_default;

  return (
    <>
      <Modal
        show={isVisible}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="popup_upload_container"
        width={"30rem"}
      >
        <div className="popupDefaultImage">
          <img src={imageUrl} atl="defaultimage" />
          <div className="row_button_default_image">
            <Button
              variant="primary"
              style={{
                marginRight: 10,
                width: 140,
                borderRadius: 0,
                background: "#FFFFFF",
                color: "#333",
                border: "1px solid #dddddd",
              }}
              onClick={close}
            >
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{
                background: "#1366AE",
                color: "white",
                width: 140,
                borderRadius: 0,
              }}
              onClick={() => setDefaultImage(imageDefault)}
            >
              Set as default
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PopupDefaultImage;
