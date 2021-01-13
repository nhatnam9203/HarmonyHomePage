import React from "react";
import Topfooter from "../../components/Footer/TopFooter";
import DevicesBanner from "./DevicesBanner/DevicesBanner";
import DevicesItem from "./DevicesItem/DevicesItem";
import { Helmet } from "react-helmet";

export default function Devices() {
  return (
    <>
      <Helmet>
        <title>Harmony | Divices</title>
        <meta name="Divices" content="Harmony Divices" />
      </Helmet>
      <DevicesBanner />
      <DevicesItem />
      <Topfooter />
    </>
  );
}
