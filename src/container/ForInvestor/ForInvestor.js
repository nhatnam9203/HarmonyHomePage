import React from "react";
import Topfooter from "../../components/Footer/TopFooter";
import ContactUsInvestor from "./Contact/ContactUsInvestor";
import Investorbanner from "./InvestorBanner/InvestorBanner";
import Partner from "./PartnerShips/Partner";
import Story from "./Story/Story";
import Team from "./Team/Team";

export default function ForInvestor() {
  return (
    <>
      <Investorbanner />
      <Story />
      <Team />
      <Partner />
      <ContactUsInvestor />
      <Topfooter />
    </>
  );
}
