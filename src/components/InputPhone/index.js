import React from 'react';
import { Form } from "react-bootstrap";
import InputMask from "react-input-mask";

import InputSelect from "../InputSelect";
import InputText from "../InputText";
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./index.scss";

const phoneGroup = [
    { value: "+84", label: "+84" },
    { value: "+1", label: "+1" },
]


const Index = ({
    name,
    form,
    error,
    isRequired = false,
    label,
}) => {

    console.log('error phone input :',{ error, name })

    const formInput = useForm({});

    // const { field } = useController({
    //     control: form.control,
    //     defaultValue,
    //     name,
    // });

    // const handleOnChange = (value, data, event, formattedValue) => {
    //     console.log({ value, data, event, formattedValue })
    //     form.setValue(name, value);
    // }

    return (
        <Form.Group>
            <Form.Label style={{ fontWeight: "600" }}>
                {label} {isRequired && <span style={{ color: "red", fontWeight: "600" }}>*</span>}
            </Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }} v>
                <div style={{ width: 140 }}>
                    <InputSelect width="90%"
                        form={formInput}
                        name={"prefixPhone"}
                        data={phoneGroup}
                        label=""
                        defaultValue={"+1"}
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <InputText
                        form={formInput}
                        name={name}
                        isRequired={isRequired}
                    />
                </div>
            </div>
            <div style={{ right : 15 }} className="inputErrorMessage">{error?.message}</div>
        </Form.Group>
    )
};

export default Index;


const MaskInput = (props) => (
    <InputMask
        mask={props.mask}
        maskChar={null}
        value={props.value}
        onChange={props.onChange}
    >
        {
            (inputProps) => (<PhoneInput className='inputText' onChange={props.onChange} style={props.style} placeholder={props.placeholder}   {...inputProps} type="text" />)
        }
    </InputMask>
);
