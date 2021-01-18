import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const TopFooter = lazy(() => import("../../components/Footer/TopFooter"));
const ContactUsInvestor = lazy(() => import("./Contact/ContactUsInvestor"));
const InvestorBanner = lazy(() => import("./InvestorBanner/InvestorBanner"));
const Story = lazy(() => import("./Story/Story"));
const Partner = lazy(() => import("./PartnerShips/Partner"));
const Team = lazy(() => import("./Team/Team"));

export default function ForInvestor() {
  return (
    <>
      <Helmet>
        <title>Harmony | For Investor</title>
        <meta name="For Investor" content="Harmony For Investor" />
      </Helmet>
      <InvestorBanner />
      <Story />
      <Team />
      <Partner />
      <ContactUsInvestor />
      <TopFooter />
    </>
  );
}
