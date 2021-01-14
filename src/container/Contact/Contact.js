import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Topfooter from "../../components/Footer/TopFooter";
import { Helmet } from "react-helmet";
// import BgImg from "../../assets/images/Rectangle 512.png";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Harmony | Contact</title>
        <meta name="Contact" content="Harmony Contact" />
      </Helmet>
      <div className="contact__home p-4">
        {/* <div className="">
        <img src={BgImg} alt="" className="contact__home-img" />
      </div> */}
        <div className="contact__home-item">
          <ContactUs />
        </div>
      </div>
      <Topfooter />
    </>
  );
}

export default Contact;
