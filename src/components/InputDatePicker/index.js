import React from 'react'
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";
import arrow_down from "@/assets/images/retailer/arrow-down.png";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
        <div className="custom-input-date" onClick={onClick} ref={ref}>
            {value}
            <img src={arrow_down} alt="imn" style={{ width : 13, height: 13 }} />
        </div>
    )
});


const Index = ({
    label,
    form,
    name
}) => {

    const { field } = useController({
        control: form.control,
        name,
    });

    React.useEffect(() => {
        form.setValue(name, new Date());
    }, []);


    return (
        <>
            <Form.Label className='lblInputText'>
                {label} {<span className="input_form_required">*</span>}
            </Form.Label>
            <DatePicker
                selected={field.value}
                onChange={(date) => {
                   field.onChange(date);
                }}
                showMonthDropdown
                showYearDropdown
                showPopperArrow={false}
                dropdownMode='select'
                customInput={<CustomInput />}
            />
        </>
    )
};

export default Index;
