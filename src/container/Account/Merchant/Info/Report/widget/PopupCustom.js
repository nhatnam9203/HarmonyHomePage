import React from "react";
import DayPicker from "react-day-picker";
import { Button } from "react-bootstrap";
import prev from "@/assets/images/retailer/prev.png";
import next from "@/assets/images/retailer/next.png";
import moment from "moment";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import "react-day-picker/lib/style.css";
import "./style.scss";

const PopupCustom = ({ updateValueCustom }) => {
  const [pickedStart, setPickedStart] = React.useState(moment());
  const [pickedEnd, setPickedEnd] = React.useState(moment());

  const refPickerStart = React.useRef();
  const refPickerEnd = React.useRef();

  const formik = useFormik({
    initialValues: {
      start: moment().format("MM/DD/YYYY"),
      end: moment().format("MM/DD/YYYY"),
    },

    validationSchema: schema,

    onSubmit: (values) => {
      const { start, end } = values;
      updateValueCustom(start, end);
    },
  });

  return (
    <div onClick={(e) => e.stopPropagation()} className="popupCustom_container">
      <div>
        <Picker
          refPicker={refPickerStart}
          value={pickedStart}
          onPicked={(date) => {
            setPickedStart(date);
            formik.setFieldValue("start", moment(date).format("MM/DD/YYYY"));
          }}
        />
        <div className="daypicker-input-container">
          <Input
            value={formik.values.start}
            onChange={formik.handleChange}
            name="start"
            error={formik.errors.start}
            onBlur={() => {
              if (isEmpty(formik.errors.start)) {
                setPickedStart(formik.values.start);
                refPickerStart.current.showMonth(
                  moment(formik.values.start, ["MM/DD/YYYY"])._d
                );
              }
            }}
          />
          <span>-</span>
          <Input
            value={formik.values.end}
            onChange={formik.handleChange}
            name="end"
            error={formik.errors.end}
            onBlur={() => {
              if (isEmpty(formik.errors.end)) {
                setPickedEnd(formik.values.end);
                refPickerEnd.current.showMonth(
                  moment(formik.values.end, ["MM/DD/YYYY"])._d
                );
              }
            }}
          />
        </div>
      </div>

      <div>
        <div style={{ marginLeft: 15 }}>
          <Picker
            refPicker={refPickerEnd}
            value={pickedEnd}
            onPicked={(date) => {
              setPickedEnd(date);
              formik.setFieldValue("end", moment(date).format("MM/DD/YYYY"));
            }}
          />
        </div>
        <div className="daypicker-btn-apply-container">
          <Button
            onClick={formik.handleSubmit}
            className={
              !isEmpty(formik.errors)
                ? "daypicker-btn-apply-disabled"
                : "daypicker-btn-apply"
            }
            variant="primary"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

const Picker = ({ onPicked, value, refPicker }) => {
  const onChangeDay = (date) => {
    onPicked(date);
  };

  return (
    <DayPicker
      ref={refPicker}
      firstDayOfWeek={1}
      navbarElement={(event) => {
        const { month, onNextClick, onPreviousClick } = event;
        return (
          <NavbarPicker
            month={month}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        );
      }}
      className="daypicker-container"
      renderDay={(day) => {
        return (
          <Day
            day={day}
            isPicked={
              moment(value).format("MMDDYYYY") ===
              moment(day).format("MMDDYYYY")
            }
            onClick={onChangeDay}
          />
        );
      }}
    />
  );
};

const Day = ({ day, isPicked, onClick }) =>
  !isPicked ? (
    <div onClick={() => onClick(day)} className={"daypicker-renderDay"}>
      {moment(day).format("DD")}
    </div>
  ) : (
    <div onClick={() => onClick(day)} className={"daypicker-renderDay"}>
      <div className="daypicker-renderDay-picked">
        {moment(day).format("DD")}
      </div>
    </div>
  );

const NavbarPicker = ({ month, onNextClick, onPreviousClick }) => (
  <div className="daypicker-nav">
    <img onClick={() => onPreviousClick()} src={prev} alt={"img"} />
    <span>{moment(month).format("MMMM YYYY")}</span>
    <img onClick={() => onNextClick()} src={next} alt={"img"} />
  </div>
);

const Input = ({ value = "", onChange = () => {}, error, ...other }) => {
  return (
    <div className="daypicker-input">
      <InputMask
        mask="99/99/9999"
        placeholder="MM/DD/YYYY"
        value={value}
        onChange={onChange}
        {...other}
      />
      {error && <div className="error-input-date">{error}</div>}
    </div>
  );
};

export default PopupCustom;

const schema = Yup.object().shape({
  start: Yup.string()
    .required("required")
    .test("check-date", "Invalid date", function (value) {
      return moment(value, "MM/DD/YYYY", true).isValid();
    })
    .nullable(),

  end: Yup.string()
    .required("required")
    .test("check-date", "Invalid date", function (value) {
      return moment(value, "MM/DD/YYYY", true).isValid();
    })
    .nullable(),
});
