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
    renderLabel = true,
    renderRight = null,
    valueVisible = null,
    editable = true,
    height = "3.6rem",
    renderError = true,
    onBlur = () =>{},
}) => {

    const { field } = useController({
        control: form.control,
        defaultValue,
        name,
    });

    return (
        <Form.Group style={{ position: "relative" }}>
            {
                label &&
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
                        value={valueVisible ?? field.value}
                        mask={mask}
                        onChange={e => form.setValue(name, e.target.value)}
                        disabled={editable}
                        isInvalid={error}
                        onBlur={onBlur}
                    /> :
                    <Form.Control
                        className='inputText'
                        type="text"
                        isInvalid={error}
                        placeholder={placeholder}
                        name={name}
                        onChange={e => form.setValue(name, e.target.value)}
                        value={valueVisible ?? field.value}
                        disabled={!editable}
                        style={{ height }}
                        onBlur={onBlur}
                    />
            }
            {
                renderRight ?
                <div className="inputErrorMessage">{renderRight()}</div>
                : <div className="inputErrorMessage">{renderError ? error?.message: ""}</div>
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
        onBlur={props.onBlur }
    >
        {
            (inputProps) => (<Form.Control className='inputText' isInvalid={props.isInvalid} style={props.style} placeholder={props.placeholder}   {...inputProps} type="text" />)
        }
    </InputMask>
);
