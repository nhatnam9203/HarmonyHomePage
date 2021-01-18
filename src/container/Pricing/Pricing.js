import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const TopFooter = lazy(() => import("../../components/Footer/TopFooter"));
const Carousel = lazy(() => import("./Carousel/Carousel"));
const Package = lazy(() => import("./Package/Package"));

function Pricing() {
  return (
    <>
      <Helmet>
        <title>Harmony | Pricing</title>
        <meta name="description" content="Harmony Pricing" />
      </Helmet>
      <Package />
      <Carousel />
      <TopFooter />
    </>
  );
}

export default Pricing;
