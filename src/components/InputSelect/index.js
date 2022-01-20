import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import arrow_down from "@/assets/images/retailer/arrow-down.png";
import { Form } from "react-bootstrap";
import { useWatch } from "react-hook-form";
import "./index.scss";

const Index = ({
    defaultValue,
    form,
    name,
    data = [],
    label = "",
    isRequired,
    width = "73%",
    error,
    height = "57px",
    onChange
}) => {
    const [isPopup, setIsPopup] = React.useState(false);

    const toggle = () => {
        setIsPopup(!isPopup)
    };

    const onSelected = (vl) => {
        form.setValue(name, vl);
        onChange && onChange(vl);
        close();
    };

    const close = () => {
        setIsPopup(false);
    }

    const valueItem = useWatch({
        control: form.control,
        name,
    });


    const selected = data.find(
        (obj) => obj?.value == valueItem
    );

    React.useEffect(() => {
        if (defaultValue) {
            form.setValue(name, defaultValue);
        }
    }, []);

    return (
        <OutsideClickHandler onOutsideClick={close}>
            <Form.Group style={{ posiion: "relative" }}>
                {
                    label && <Form.Label style={{ fontWeight: "600" }}>
                        {label} {isRequired && <span style={{ color: "red", fontWeight: "600" }}>*</span>}
                    </Form.Label>
                }
                <div
                    onClick={toggle}
                    style={{
                        width,
                        height,
                        // borderColor: error?.message ? "red" : "#ccccccc"
                    }}
                    className="select_subcategory"
                >
                    <div>{selected ? selected.label : "Please select"}</div>
                    <img src={arrow_down} alt="imn" />
                    {
                        isPopup && (
                            <div className="select_subcategory_popup">
                                {
                                    data.map((item) => (
                                        <div
                                            className="subCategory_item"
                                            key={item.vl + "subCategory" + Math.random()}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSelected(item.value);
                                            }}
                                        >
                                            {item?.label}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <div style={{ right: 15 }} className="inputErrorMessage">{error?.message}</div>
            </Form.Group>
        </OutsideClickHandler>
    );
};

export default Index;
