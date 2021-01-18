import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const ContactUs = lazy(() => import("../../components/ContactUs/ContactUs"));
const TopFooter = lazy(() => import("../../components/Footer/TopFooter"));

function Contact() {
  return (
    <>
      <Helmet>
        <title>Harmony | Contact</title>
        <meta name="Contact" content="Harmony Contact" />
      </Helmet>
      <div className="contact__home p-4">
        <div className="contact__home-item">
          <ContactUs />
        </div>
      </div>
      <TopFooter />
    </>
  );
}

export default Contact;
