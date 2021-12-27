import React from 'react';
import Modal from "react-bootstrap/Modal";
import close_white from "@/assets/images/retailer/close_white.png";
import "./style.scss";

const Popupconfirm = ({ isVisible , close = () =>{} , onDelete = () =>{} }) => {
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
                        Are you sure you want to Delete this Product?
                    </div>
                    <div>
                        <div onClick={onDelete} style={{ marginRight: 45 }} className="btn_popup_confirm btn_popup_confirm_no">
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