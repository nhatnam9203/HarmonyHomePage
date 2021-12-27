import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPackagePricingAction } from "../../../actions/userActions";
import PackageHPOne from "./PackageHPOne";
import PackagePOS from "./PackagePOS";

export default function Package() {
  const [show, setShow] = useState(false);
  const [showHPOne, setShowHPOne] = useState(false);
  const [checked, setChecked] = useState(false);
  const [packageName, setPackpageName] = React.useState("HarmonyOne");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPackagePricingAction());
  }, [dispatch]);

  const { packageList } = useSelector((state) => state.pricing);

  const pricingAnnuallyBasic =
    packageList[2]?.pricing * packageList[2]?.annually;

  const pricingAnnuallyMedium =
    packageList[1]?.pricing * packageList[1]?.annually;

  const pricingAnnuallyPro = packageList[0]?.pricing * packageList[0]?.annually;

  const pricingAnnuallyBasic1 = pricingAnnuallyBasic.toFixed(2);
  const pricingAnnuallyMedium1 = pricingAnnuallyMedium.toFixed(2);
  const pricingAnnuallyPro1 = pricingAnnuallyPro.toFixed(2);


  return (
    <>
      <main className="package">

        <div className="package__header">
          <h1 className="package__title text-uppercase text-center font-weight-bold">
            Package & Pricing
          </h1>

          <h6 className="package__subTitle text-center">
            Try HarmonyPay Merchants free for 30 days, no credit card required
          </h6>

          <Row className="package__container mx-auto justify-content-md-center">
            <Col
              xs={6}
              md={5}
              style={{ paddingRight: 5 }}
            >
              <div style={{ opacity: packageName === "HarmonyOne" ? 1 : 0.6 }} onClick={() => setPackpageName("HarmonyOne")} className="package__name">
                <h3>Harmony One</h3>
              </div>
            </Col>

            <Col
              xs={6}
              md={5}
              style={{ paddingLeft: 5 }}
            >
              <div style={{ opacity: packageName === "HarmonyPOS" ? 1 : 0.6 }} onClick={() => setPackpageName("HarmonyPOS")} className="package__name">
                <h3>HarmonyPay POS Salon</h3>
              </div>
            </Col>

          </Row>
        </div>

        {
          packageName == "HarmonyOne" ?
            <PackageHPOne
              checked={checked}
              setChecked={setChecked}
              showHPOne={showHPOne}
              setShowHPOne={setShowHPOne}
            /> :
            <PackagePOS
              checked={checked}
              setChecked={setChecked}
              packageList={packageList}
              pricingAnnuallyBasic1={pricingAnnuallyBasic1}
              pricingAnnuallyMedium1={pricingAnnuallyMedium1}
              pricingAnnuallyPro1={pricingAnnuallyPro1}
              show={show}
              setShow={setShow}
            />
        }

      </main>
    </>
  );
}
