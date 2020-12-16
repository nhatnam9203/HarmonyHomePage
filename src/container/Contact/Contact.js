import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
// import BgImg from "../../assets/images/Rectangle 512.png";

function Contact() {
  return (
    <div className="contact__home p-4">
      {/* <div className="">
        <img src={BgImg} alt="" className="contact__home-img" />
      </div> */}
      <div className="contact__home-item">
        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
