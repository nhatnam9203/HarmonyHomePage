import React from "react";
import ThankYouImg from "../../assets/images/thank_you.png";

import "./SignUpSuccess.scss";
// import { resetFormRequest } from "../../actions/requestInfoActions";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

function SignUpSuccess() {
  // const dispatch = useDispatch();
  return (
    <div className="sign_up_success">
      <div className="sign_up_img">
        <img src={ThankYouImg} />
      </div>
      <div className="sign_up_message">
        <h1> THANKS!</h1>
        <p>We'll be in touch with you soon for next steps</p>
      </div>
      <div className="sing_up_back">
        <Link to="/home">BACK TO HOME</Link>
      </div>
    </div>
  );
}
// onClick={() => dispatch(resetFormRequest())}
export default SignUpSuccess;
