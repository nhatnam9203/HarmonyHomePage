import React from "react";
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
    </>
  );
}
