import React from 'react';
import InputMask from "react-input-mask";
import { isEmpty } from "lodash";
import { formatMoney } from "@/util";
import "../style.scss";

const InputQuantity = ({
    placeholder = "0",
    value = "0",
    handleChange = () => { }
}) => {
    return (
        <div style={{ position: 'relative' }}>
            <MaskInput
                type="text"
                onChange={(e) => handleChange(e.target.value)}
                onBlur={()=>{
                    if(value === ""){
                        handleChange("0");
                    }
                }}
                value={value}
                placeholder={placeholder}
                style={{
                    borderColor: isEmpty(formatMoney(value)) ? "red" : "#ced4da",
                }}
            />
        </div>
    )
}

const MaskInput = (props) => (
    <InputMask
        mask="99999999999999999"
        maskChar={null}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
    >
        {
            (inputProps) => (
                <input
                    className="input_price"
                    style={props.style}
                    placeholder={props.placeholder}
                    {...inputProps} 
                    type="text"
                />)
        }
    </InputMask>
);

export default InputQuantity;