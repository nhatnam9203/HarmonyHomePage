import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import arrow_down from "@/assets/images/retailer/arrow-down.png";
import "./style.scss";

export default class SelectNewCategory extends Component {
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
        const {
            subCategory = [],
            isActive = false,
            categoryId,
            isSubCategory,
        } = this.props;
        const selected = subCategory.find((s) => s.categoryId === categoryId);
        const { isPopup } = this.state;
        
        return (
            <OutsideClickHandler onOutsideClick={this.close}>
                <div
                    style={{
                        height: 50,
                        width: "100%",
                        pointerEvents: isActive ? "none" : "unset",
                    }}
                    onClick={this.toggle}
                    className="select_subcategory"
                >
                    <div style={{ color: isSubCategory ? "#333" : "#dddddd" }}>
                        {selected ? selected.name : "Select sub category"}
                    </div>
                    <img src={arrow_down} alt="imn" />
                    {
                        isPopup && (
                            <div className="select_subcategory_popup">
                                {subCategory.map((cate) => (
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
                                ))}
                            </div>
                        )
                    }
                </div>
            </OutsideClickHandler>
        );
    }
}
