import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import arrow_down from "@/assets/images/retailer/arrow-down.png";
import "../style.scss";

export default class ManualOptionSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopup: false,
        };
    }

    open = () => {
        this.setState({ isPopup: true });
    };

    close = () => {
        this.setState({ isPopup: false });
    };

    toggle = () => {
        const { isPopup } = this.state;
        this.setState({ isPopup: !isPopup });
    };

    onSelected = (value) => {
        this.props.selectOption(value);
        this.close();
    };

    render() {
        const { values, optionsSelected, index } = this.props;
        const { isPopup } = this.state;

        return (
            <OutsideClickHandler onOutsideClick={this.close}>
                <div
                    onClick={this.toggle}
                    style={{ width: '100%', maxWidth: 460 }}
                    className="select_subcategory"
                >
                    <div>
                        {optionsSelected[index] ? optionsSelected[index].label : "Select value"}
                    </div>

                    <img src={arrow_down} alt="imn" />

                    {
                        isPopup && (
                            <div className="select_subcategory_popup">
                                {
                                    values.map((vl) => (
                                        <div
                                            className="subCategory_item"
                                            key={vl.id + "vl" + Math.random()}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                this.onSelected(vl);
                                            }}
                                        >
                                            {vl.label}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </OutsideClickHandler>
        );
    }
}
