import React from 'react';
import CurrencyInput from 'react-currency-input';
import { formatMoney } from "@/util";
import { isEmpty } from "lodash";

const InputPrice = ({
    placeholder = "0.00",
    value = "",
    handleChange = () => { },
    style,
}) => {
    return (
        <div style={{ position: 'relative' }}>
            <CurrencyInput
                type="text"
                className="input_price"

                value={value}
                onChangeEvent={(e, maskedValule, floatValue) => {
                    handleChange(maskedValule)
                }}
                placeholder={placeholder}
                style={{
                    borderColor: isEmpty(formatMoney(value)) ? "red" : "#ced4da",
                    ...style
                }}
            />
        </div>
    )
}

export default InputPrice;