import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";

import General from "./Steps/General";
import Bank from "./Steps/Bank";
import Principal from "./Steps/Principal";

import "./EditInfo.scss";

function EditInfo() {
  const history = useHistory();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const id = useParams();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    // validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("values", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const getStepContent = () => {
    switch (step) {
      case 1:
        return <General />;
      case 2:
        return <Bank />;
      case 3:
        return <Principal />;
      case 4:
        return <h1>Success</h1>;
    }
  };

  return (
    <div className="edit_info">
      <h1>{id.id} - Mekira Nails & Spa</h1>
      <Form noValidate onSubmit={formik.handleSubmit} className="edit_account">
        {getStepContent(formik)}
      </Form>

      <div className="d-flex justify-content-between">
        <button className="btn" onClick={() => history.goBack()}>
          Cancel
        </button>
        <div>
          {step !== 1 && (
            <button className="btn" onClick={() => prevStep()}>
              Back
            </button>
          )}

          <button className="btn btn_save" onClick={() => nextStep()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditInfo;
