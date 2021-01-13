import React from "react";
import Topfooter from "../../components/Footer/TopFooter";
import ContactUsInvestor from "./Contact/ContactUsInvestor";
import Investorbanner from "./InvestorBanner/InvestorBanner";
import Partner from "./PartnerShips/Partner";
import Story from "./Story/Story";
import Team from "./Team/Team";
import { Helmet } from "react-helmet";

export default function ForInvestor() {
  return (
    <>
      <Helmet>
        <title>Harmony | For Investor</title>
        <meta name="For Investor" content="Harmony For Investor" />
      </Helmet>
      <Investorbanner />
      <Story />
      <Team />
      <Partner />
      <ContactUsInvestor />
      <Topfooter />
    </>
  );
}
