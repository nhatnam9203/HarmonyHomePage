import React from "react";
import Topfooter from "../../components/Footer/TopFooter";
import DevicesBanner from "./DevicesBanner/DevicesBanner";
import DevicesItem from "./DevicesItem/DevicesItem";

export default function Devices() {
  return (
    <>
      <DevicesBanner />
      <DevicesItem />
      <Topfooter />
    </>
  );
}
