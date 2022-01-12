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
}) => {
    const [isPopup, setIsPopup] = React.useState(false);

    console.log({ defaultValue })

    const toggle = () => {
        setIsPopup(!isPopup)
    };

    const onSelected = (vl) => {
        form.setValue(name, vl);
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
            <Form.Group>
                <Form.Label style={{ fontWeight: "600" }}>
                    {label} {isRequired && <span style={{ color: "red", fontWeight: "600" }}>*</span>}
                </Form.Label>
                <div onClick={toggle} className="select_subcategory">
                    <div>{selected ? selected.label : "Please select"}</div>
                    <img src={arrow_down} alt="imn" />
                    {
                        isPopup && (
                            <div className="select_subcategory_popup">
                                {
                                    data.map((item) => (
                                        <div
                                            className="subCategory_item"
                                            key={item.vl + "subCategory"}
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
            </Form.Group>
        </OutsideClickHandler>
    );
};

export default Index;
