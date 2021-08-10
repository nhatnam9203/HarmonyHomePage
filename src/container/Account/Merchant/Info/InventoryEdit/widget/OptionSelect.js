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
        this.props.selectOption(value.value);
        this.close();
    };

    render() {
        const { value, data } = this.props;
        const { isPopup } = this.state;

        return (
            <OutsideClickHandler onOutsideClick={this.close}>
                <div
                    onClick={this.toggle}
                    style={{ width: '100%' }}
                    className="select_subcategory"
                >
                    <div>
                        {value}
                    </div>

                    <img src={arrow_down} alt="imn" />

                    {
                        isPopup && (
                            <div style={{ height: 'auto' }}
                                className="select_subcategory_popup select_filter"
                            >
                                {
                                    data.map((vl) => (
                                        <OptionItem
                                            key={vl.value}
                                            value={vl}
                                            onSelected={this.onSelected}
                                        />
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

const OptionItem = ({ onSelected, value }) => {
    return (
        <div
            className="subCategory_item"
            key={value.id + "value" + Math.random()}
            onClick={(e) => {
                e.stopPropagation();
                onSelected(value);
            }}
        >
            {value.label}
        </div>
    )
}
