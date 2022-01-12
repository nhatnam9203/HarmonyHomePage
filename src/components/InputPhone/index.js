import React from 'react';
import { Form, FormControl } from "react-bootstrap";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";

import InputSelect from "../InputSelect";
import InputText from "../InputText";
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
    defaultValue = "",
    label,
    placeholder = "",
    mask = null,
}) => {

    const { field } = useController({
        control: form.control,
        defaultValue,
        name,
    });

    const handleOnChange = (value, data, event, formattedValue) => {
        console.log({ value, data, event, formattedValue })
        form.setValue(name, value);
    }

    return (
        <Form.Group>
            <Form.Label style={{ fontWeight: "600" }}>
                {label} {isRequired && <span style={{ color: "red", fontWeight: "600" }}>*</span>}
            </Form.Label>
            {/* <PhoneInput
                onlyCountries={['us', 'vn']}
                masks={{ us: '...-...-....', vn: '...-...-....' }}
                name={name}
                placeholder="Enter phone number"
                value={field.value}
                onChange={handleOnChange}
                className="inputPhone_signUp"
                alwaysDefaultMask={true}
                countryCodeEditable={false}

            /> */}
            <div className='phone_container'>
                <div style={{ width: "30%" }}>
                    <InputSelect
                        data={phoneGroup}
                        form={form}
                        defaultValue="+1"
                        label=""
                        name="headPhone"
                    />
                </div>
                <div>
                <InputText
                    form={form}
                    name="zip"
                    label={""}
                    renderLabel={false}
                    placeholder="Zip code"
                />
                </div>
            </div>

            {
                error && <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            }
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
