import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../style.scss";

const initialState = {

};

export default class PopupAuto extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }


    handleSubmit = () => {

    }

    closePopup = () => {
        this.props.close();
    }

    render() {
        const { isVisible, options } = this.props;

        return (
            <>
                <Modal
                    show={isVisible}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName="modal_auto"
                    size='lg'
                >
                    <div className="popupAuto">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="popupNewCategory">
                                <h3>Auto Generate</h3>
                                <h6 style={{ marginTop: 20 }}>Select options attribute and value</h6>
                                <div className="popupAuto_ItemList">
                                    {
                                        options.map((opt) => (
                                            <OptionItem
                                                item={opt}
                                                key={opt.id + 'option' + Math.random()}
                                            />
                                        ))
                                    }
                                </div>

                                <span>
                                    Number new versions : {options.length}
                                </span>

                                <div className="popupAuto_button">
                                    <Button
                                        variant="primary"
                                        style={{
                                            marginRight: 28,
                                            width: 140,
                                            borderRadius: 0,
                                            background: "#FFFFFF",
                                            color: "#333",
                                            border: "1px solid #dddddd",
                                        }}
                                        onClick={this.closePopup}
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
                                    >
                                        Generate
                                    </Button>
                                </div>
                            </div>

                        </Form>
                    </div>
                </Modal>
            </>
        );
    }
}

const OptionItem = ({ item }) => {
    return (
        <div className="optionItem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6>{item.label}</h6>
            </div>
            <div className="container_value_box">
                {
                    item.values.map((value, key) => (
                        <div className="value_box">
                            <Form.Control
                                key={key + " " + value.id + " " + Math.random()}
                                type="text"
                                placeholder=""
                                value={value.label}
                                onChange={() => { }}
                                style={{ height: 50 }}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


const OptionSelect = () => {

}