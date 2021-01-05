import React from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

import "./Popup.scss";

function Popup(props) {
  // eslint-disable-next-line react/prop-types
  const { isLoading, show, handleCancel, handleClose } = props;

  return (
    <Modal show={show} size="lg" centered className="modal">
      <Modal.Header className="modal_header">
        <Modal.Title className="modal_title">
          Subscription Cancellation Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>Do you really want to Cancel this subscription?</p>
      </Modal.Body>
      <Modal.Footer className="modal_footer">
        <Button className="btn btn_cancel" onClick={handleClose}>
          No
        </Button>

        {isLoading ? (
          <Button className="submit_btn text-center btn btn_save" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <Button
            type="submit"
            className="submit_btn text-center btn btn_save"
            onClick={() => handleCancel()}
          >
            Yes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
