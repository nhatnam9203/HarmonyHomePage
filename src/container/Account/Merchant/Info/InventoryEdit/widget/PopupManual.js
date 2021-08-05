import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ManualOptionSelect from "./ManualOptionSelect";
import "../style.scss";

const initialState = {
    productOptions: [],
    optionsSelected: [],
};

export default class PopupManual extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    selectOption = (option) => {
        const { optionsSelected } = this.state;
        this.setState({
            optionsSelected: [
                ...optionsSelected,
                option,
            ]
        })
    }

    handleSubmit = () => {
        this.props.createOtionsManual();
    }

    closePopup = () => {
        this.props.close();
    }

    componentWillReceiveProps(nextProps) {
        const { isVisible, options } = nextProps;
        if (isVisible === true && isVisible !== this.props.isVisible) {
            this.setState({ productOptions: options });
        }
    }

    render() {
        const { isVisible } = this.props;
        const { productOptions, optionsSelected } = this.state;

        console.log({ optionsSelected });

        return (
            <>
                <Modal
                    show={isVisible}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    contentClassName="popup_upload_container"
                    size={"large"}
                >
                    <div style={{ height: 580 }} className="popupAuto">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="popupNewCategory">

                                <h3>Manual Generate</h3>
                                <h6 style={{ marginTop: 30 }}>Select options attribute and value</h6>

                                <div style={{ height: 350 }} className="popupAuto_ItemList">
                                    {
                                        productOptions.map((opt) => (
                                            <OptionItem
                                                item={opt}
                                                key={opt.id + 'option' + Math.random()}
                                                selectOption={this.selectOption}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="popupAuto_button">
                                    <Button
                                        variant="primary"
                                        style={{ marginRight: 28, width: 140, borderRadius: 0, background: "#FFFFFF", color: "#333", border: "1px solid #dddddd", }}
                                        onClick={this.closePopup}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{ background: "#1366AE", color: "white", width: 140, borderRadius: 0, }}
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

const OptionItem = ({ item, selectOption }) => {
    return (
        <div className="optionItem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6>{item.label}</h6>
            </div>

            <ManualOptionSelect
                values={item.values}
                selectOption={selectOption}
            />
        </div>
    )
}