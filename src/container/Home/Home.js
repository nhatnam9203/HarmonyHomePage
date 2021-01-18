import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const HomeBanner = lazy(() => import("./Banner2/HomeBanner2"));
const HomeFeatures = lazy(() => import("./Features2/HomeFeatures2"));
const TopFooter = lazy(() => import("../../components/Footer/TopFooter"));

function Home() {
  return (
    <>
      <Helmet>
        <title>Harmony | Home</title>
        <meta name="description" content="Harmony HomePage" />
      </Helmet>
      <HomeBanner />
      <HomeFeatures />
      <TopFooter />
    </>
  );
}

export default Home;
