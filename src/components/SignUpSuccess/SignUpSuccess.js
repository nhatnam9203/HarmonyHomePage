import { Button } from "react-bootstrap";
import React from "react";
import ThankYouImg from "../../assets/images/thank_you.png";

import "./SignUpSuccess.scss";

function SignUpSuccess() {
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
        <Button>BACK TO HOME</Button>
      </div>
    </div>
  );
}

export default SignUpSuccess;
