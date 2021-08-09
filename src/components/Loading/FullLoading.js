import React from "react";
import ScaleLoader from "react-spinners/BeatLoader";
import Modal from "react-bootstrap/Modal";
import "./style.scss";

function Loading({ }) {
    return (
        <Modal
            show={true}
            centered
            size={"large"}
            backdropClassName="modalBackdrop"
            contentClassName="modalContentLoading"
        >
            <div className="modalContentLoading__wrap">
                <ScaleLoader
                    size={12}
                    height={25}
                    color={"white"}
                    loading={true}
                    style={{ alignSelf: 'center' }}
                />
            </div>
        </Modal>
    );
}

export default Loading;
