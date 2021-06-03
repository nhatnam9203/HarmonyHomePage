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

const PopupCustom = ({}) => {
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

  const formik = useFormik({
    initialValues: {
      start: moment().format("MM/DD/YYYY"),
      end: moment().format("MM/DD/YYYY"),
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <div onClick={(e) => e.stopPropagation()} className="popupCustom_container">
      <div>
        <Picker />
        <div className="daypicker-input-container">
          <Input
            value={formik.values.start}
            onChange={formik.handleChange}
            name="start"
            error={formik.errors.start}
          />
          <span>-</span>
          <Input
            value={formik.values.end}
            onChange={formik.handleChange}
            name="end"
            error={formik.errors.end}
          />
        </div>
      </div>

      <div>
        <div style={{ marginLeft: 15 }}>
          <Picker />
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

const Picker = () => {
  const [daySelected, setDaySelected] = React.useState(moment());

  const onChangeDay = (date) => {
    setDaySelected(date);
  };

  return (
    <DayPicker
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
              moment(daySelected).format("MMDDYYYY") ===
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
