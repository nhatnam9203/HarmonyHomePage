import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import SelectNewCategory from "../SelectNewCategory";
import ToggleButton from "react-toggle-button";
import Loading from "@/components/Loading";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { isEmpty } from "lodash";
import "../style.scss";

const initialState = {
    categoryName: "",
    parentId: "",
    isSubCategory: false,
    categoryId: 0,
};

export default class Popupnewcategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onChangeCategoryName = (e) => {
        this.setState({ categoryName: e.target.value });
    };

    closePopup = () => {
        this.props.close();
        this.setState(initialState);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { categoryName, isSubCategory, categoryId } = this.state;
        if (isSubCategory && categoryId === 0) {
            alert("Please select sub category");
            return;
        }
        if (isEmpty(categoryName)) {
            alert("Please enter category name");
            return;
        }
        const body = {
            categoryType: "Product",
            name: categoryName,
            parentId: isSubCategory ? categoryId : 0,
        };
        this.props.addNewCategory(body, this.closePopup);
    };

    render() {
        const { isVisible, category = [], loadingNewCategory } = this.props;
        const { isSubCategory, categoryName, categoryId } = this.state;

        return (
            <>
                <Modal
                    show={isVisible}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    contentClassName="popup_upload_container"
                    size={"large"}
                >
                    <div style={{ position: "relative" }}>
                        <Form onSubmit={this.handleSubmit}>
                            <div className="popupNewCategory">
                                <h3>New Category</h3>

                                {/*********************** CATEGORY NAME ***********************/}
                                <Form.Group style={{ marginTop: 40 }}>
                                    <Form.Label style={{ fontWeight: "600" }}>
                                        Category name{" "}
                                        <span style={{ color: "red" }} className="form_required">
                                            *
                                        </span>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={categoryName}
                                        onChange={this.onChangeCategoryName}
                                        style={{ height: 50 }}
                                    />
                                </Form.Group>

                                {/*********************** TOGGLE BUTTON ***********************/}
                                <div style={{ alignItems: "center", display: "flex" }}>
                                    <ToggleButton
                                        inactiveLabel={<div />}
                                        activeLabel={<div />}
                                        value={this.state.isSubCategory}
                                        colors={{
                                            active: {
                                                base: "#1366AE",
                                            },
                                        }}
                                        onToggle={(value) => {
                                            this.setState({ isSubCategory: !value });
                                        }}
                                    />
                                    <div style={{ marginLeft: 15, color: "#585858" }}>
                                        Is Subcategory
                                    </div>
                                </div>

                                {/*********************** PARENT CATEGORY ***********************/}
                                <Form.Group style={{ marginTop: 25 }}>
                                    <Form.Label
                                        style={{
                                            fontWeight: "600",
                                            color: isSubCategory ? "#333" : "#dddddd",
                                        }}
                                    >
                                        Parent category{" "}
                                        <span style={{ color: "red" }} className="form_required">
                                            *
                                        </span>
                                    </Form.Label>
                                    <br />
                                    <div style={{ position: "relative" }}>
                                        <SelectNewCategory
                                            value={""}
                                            subCategory={category}
                                            onSelected={(categoryId) => {
                                                this.setState({ categoryId });
                                            }}
                                            isActive={!isSubCategory}
                                            categoryId={categoryId}
                                            isSubCategory={isSubCategory}
                                        />
                                    </div>
                                </Form.Group>

                                {/*********************** BUTTON ***********************/}
                                <div className="row_button_default_image">
                                    <Button
                                        variant="primary"
                                        style={{
                                            marginRight: 10,
                                            width: 140,
                                            borderRadius: 0,
                                            background: "#FFFFFF",
                                            color: "#333",
                                            border: "1px solid #dddddd",
                                        }}
                                        onClick={this.closePopup}
                                        className="btn btn_cancel"
                                    >
                                        Cancel
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
                                        className="btn btn-primary btn-submit"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </Form>
                        {loadingNewCategory && <Loading />}
                    </div>
                </Modal>
            </>
        );
    }
}
