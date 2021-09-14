import React from 'react';
import Modal from "react-bootstrap/Modal";
import close_white from "@/assets/images/retailer/close_white.png";
import circle from "../../../../../assets/images/circle.png";
import radio_button from "../../../../../assets/images/radio-on-button.png";
import "./style.scss";

const PopupSelectExport = ({ isVisible, close = () => { }, onExport = () => { } }) => {

    const [isNeedToOrder, setNeedToOrder] = React.useState(true);
    return (
        <div>
            <Modal
                show={isVisible}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="confirmModal"
                size={"large"}
            >
                <div className="confirmModal__header">
                    Export
                    <img onClick={close} src={close_white} alt="imgclose" />
                </div>
                <div className="confirmModal__body popupSelectExport">
                    <div>
                        <span style={{ cursor: 'pointer' }} onClick={() => setNeedToOrder(true)}>
                            <img src={isNeedToOrder ? radio_button : circle}
                                className="iconRadio" alt=""
                            />
                            <label>The products need to order more</label>
                        </span><br />

                        <span style={{ cursor: 'pointer', marginTop: 30 }} onClick={() => setNeedToOrder(false)}>
                            <img src={!isNeedToOrder ? radio_button : circle}
                                className="iconRadio" alt=""
                            />
                            <label>All Product</label>
                        </span>
                        <div style={{ width: "100%", height: 1, border: "1px solid #dddddd", marginTop: 16 }} />
                    </div>

                    <div>
                        <div onClick={()=>onExport(isNeedToOrder)} className="btn_popup_confirm btn_popup_confirm_no">
                            Next
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}



export default PopupSelectExport;