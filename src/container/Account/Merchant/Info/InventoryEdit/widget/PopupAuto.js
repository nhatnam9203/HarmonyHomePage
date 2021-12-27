import React from 'react';
import Modal from "react-bootstrap/Modal";
import close_white from "@/assets/images/retailer/close_white.png";

const Popupconfirm = ({ isVisible , close = () =>{} , autoGenerate = () =>{} }) => {
    return (
        <div>
            <Modal
                show={isVisible}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="confirmModal"
                size={"large"}
                animation={false}
            >
                <div className="confirmModal__header">
                    Confirmation
                    <img onClick={close} src={close_white} alt="imgclose" />
                </div>
                <div className="confirmModal__body">
                    <div>
                        Do you want to generate auto ?
                    </div>
                    <div>
                        <div onClick={autoGenerate} style={{ marginRight: 45 }} className="btn_popup_confirm btn_popup_confirm_no">
                            Yes
                        </div>
                        <div onClick={close} style={{ marginLeft: 45 }} className="btn_popup_confirm">
                            No
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}



export default Popupconfirm;