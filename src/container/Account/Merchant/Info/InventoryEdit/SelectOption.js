import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import arrow_down from "@/assets/images/retailer/arrow-down.png";
import "./style.scss";

export default class Selectoption extends Component {
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

    onSelected = (categoryId) => {
        this.props.onSelected(categoryId);
        this.close();
    };

    render() {
        const { subCategory = [], value } = this.props;
        const selected = subCategory.find(
            (obj) => parseInt(obj.categoryId) === parseInt(value)
        );
        const { isPopup } = this.state;
        
        return (
            <OutsideClickHandler onOutsideClick={this.close}>
                <div onClick={this.toggle} className="select_subcategory">
                    <div>{selected ? selected.name : ""}</div>
                    <img src={arrow_down} alt="imn" />

                    {
                        isPopup && (
                            <div className="select_subcategory_popup">
                                {
                                    subCategory.map((cate) => (
                                        <div
                                            className="subCategory_item"
                                            key={cate.categoryId + "subCategory"}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                this.onSelected(cate.categoryId);
                                            }}
                                        >
                                            {cate.name}
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
