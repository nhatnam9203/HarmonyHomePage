import React from 'react';
import { Form, FormControl } from "react-bootstrap";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";
import "./index.scss";

const Index = ({
    name,
    form,
    error,
    isRequired = false,
    defaultValue = "",
    label,
    placeholder = "",
    mask = null,
    renderLabel = true
}) => {

    const { field } = useController({
        control: form.control,
        defaultValue,
        name,
    });

    return (
        <Form.Group>
            {
                renderLabel &&
                <Form.Label className='lblInputText'>
                    {label} {isRequired && <span className="input_form_required">*</span>}
                </Form.Label>
            }
            {
                mask ?
                    <MaskInput
                        type="text"
                        placeholder={placeholder}
                        name={name}
                        value={field.value}
                        mask={mask}
                        onChange={e => form.setValue(name, e.target.value)}
                    /> :
                    <Form.Control
                        className='inputText'
                        type="text"
                        placeholder={placeholder}
                        name={name}
                        onChange={e => form.setValue(name, e.target.value)}
                        value={field.value}
                    />
            }
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
            (inputProps) => (<Form.Control className='inputText' style={props.style} placeholder={props.placeholder}   {...inputProps} type="text" />)
        }
    </InputMask>
);
