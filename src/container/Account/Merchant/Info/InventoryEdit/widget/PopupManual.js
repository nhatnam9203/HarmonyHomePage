import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ManualOptionSelect from "./ManualOptionSelect";
import { arrayIsEqual } from "@/util";
import "../style.scss";

const initialState = {
    productOptions: [],
    optionsSelected: [],
    isExist: false
};

export default class PopupManual extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    selectOption = (option, index) => {
        let { optionsSelected } = this.state;
        optionsSelected[index] = option;
        this.setState({ optionsSelected });
        this.checkProductVersions(optionsSelected);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { optionsSelected } = this.state;
        let tempOptions = [...optionsSelected];
        tempOptions = tempOptions.filter(el => el);
        this.props.createOtionsManual(tempOptions);
        this.closePopup();
    }

    closePopup = () => {
        this.props.close();
        this.setState({ productOptions: [], optionsSelected: [], isExist: false });
    }

    resetState = () => {
        this.setState(initialState);
    }

    componentWillReceiveProps(nextProps) {
        const { isVisible, options } = nextProps;
        if (isVisible === true && isVisible !== this.props.isVisible) {
            this.setState({ productOptions: options });
        }
    }

    checkProductVersions = (payload) => {
        const { quantities } = this.props;
        let checkQuantities =
            quantities?.length > 0 ? [...quantities] : [];
        const listAttributeValueIds = payload?.map(
            (x) => x.attributeValueId
        );
        const findExistIndex = checkQuantities?.findIndex((f) =>
            arrayIsEqual(f?.attributeIds, listAttributeValueIds)
        );
        const itemIsExisted = findExistIndex >= 0 ? true : false;
        this.setState({ isExist: itemIsExisted });
    }

    render() {
        const { isVisible } = this.props;
        const { productOptions, optionsSelected, isExist } = this.state;

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

                                <div style={{ height: 350, position: 'relative' }}>
                                    <div style={{ height: isExist ? 320 : 350 }} className="popupAuto_ItemList">
                                        {
                                            productOptions.map((opt, index) => (
                                                <OptionItem
                                                    item={opt}
                                                    key={opt.id + 'option' + Math.random()}
                                                    selectOption={option => this.selectOption(option, index)}
                                                    optionsSelected={optionsSelected}
                                                    index={index}
                                                />
                                            ))
                                        }
                                    </div>
                                    {/* {
                                        isExist &&
                                        <div className="itemExisted">
                                            Item is existed
                                        </div>
                                    } */}
                                </div>

                                <div className="popupAuto_button">
                                    <Button
                                        variant="primary"
                                        style={{ marginRight: 28, width: 140, borderRadius: 0, background: "#FFFFFF", color: "#333", border: "1px solid #dddddd", }}
                                        onClick={this.closePopup}
                                        className="btn btn_cancel"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{ background: "#1366AE", color: "white", width: 140, borderRadius: 0, }}
                                        className="btn btn-primary btn-submit"
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

const OptionItem = ({ item, selectOption = () => { }, optionsSelected = [], index }) => {
    return (
        <div className="optionItem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6>{item.label}</h6>
            </div>

            <ManualOptionSelect
                values={item.values}
                selectOption={selectOption}
                optionsSelected={optionsSelected}
                index={index}
            />
        </div>
    )
}