import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const TopFooter = lazy(() => import("../../components/Footer/TopFooter"));
const DevicesBanner = lazy(() => import("./DevicesBanner/DevicesBanner"));
const DevicesItem = lazy(() => import("./DevicesItem/DevicesItem"));

export default function Devices() {
  return (
    <>
      <Helmet>
        <title>Harmony | Devices</title>
        <meta name="description" content="Harmony Devices" />
      </Helmet>
      <DevicesBanner />
      <DevicesItem />
      <TopFooter />
    </>
  );
}
