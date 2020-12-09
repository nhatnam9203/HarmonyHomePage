import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

export default function HomeBanner2() {
  return (
    <main className="home_banner2 d-flex flex-column justify-content-start align-items-center">
      <h1 className="home_banner2-title text-uppercase font-weight-bold text-center">
        salon 4-in-1 pos system
      </h1>
      <p className="home_banner2-text text-center mb-4">
        HarmonyPay is a module POS system which included many Apps working with
        each other through an API (Application Programing Interface), allowing
        for mobile interactive booking, On-demand marketing, and mobile payment.
      </p>
      <AiFillPlayCircle className="home_banner2-icon" />
    </main>
  );
}
