import React from "react";
import Topfooter from "../../components/Footer/TopFooter";
import Carousel from "./Carousel/Carousel";
import Package from "./Package/Package";
import { Helmet } from "react-helmet";

function Pricing() {
  return (
    <>
      <Helmet>
        <title>Harmony | Pricing</title>
        <meta name="Pricing" content="Harmony Pricing" />
      </Helmet>
      <Package />
      <Carousel />
      <Topfooter />
    </>
  );
}

export default Pricing;
