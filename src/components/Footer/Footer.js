import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer>
      <div className="bot_footer d-flex align-items-center">
        <Container className="px-0 bot_footer_container">
          <Row className="justify-content-between mx-0 bot_footer-isMobile">
            <Col
              xs="auto"
              className="d-flex justify-content-center bot_footer-right"
            >
              <div className="footer-copyrigh">
                {new Date().getFullYear()} &copy; {t("Copyright")} -{" "}
                <a
                  target="blank"
                  href="https://www.harmonypayment.com/"
                  className="text-white mr-3"
                >
                  HarmonyPay Inc
                </a>
              </div>
              <ul className="d-flex mb-0 bot_footer-link">
                {/* <li className="list-unstyled divider_link-footer">
                  <a href="#" className="text-white">
                    {" "}
                    {t("Terms & Conditions")}{" "}
                  </a>
                </li> */}
                <li className="list-unstyled divider_link-footer">
                  <Link
                    to="/gift-card-terms"
                    className="text-white divider__col"
                  >
                    {" "}
                    {t("Gift Card Terms")}{" "}
                  </Link>
                </li>
                <li className="list-unstyled divider_link-footer">
                  <Link
                    to="/harmony_consumer_app_privacy_info.html"
                    className="text-white divider__col"
                  >
                    {" "}
                    {t("Policy")}{" "}
                  </Link>
                  {/* <a
                    href="/harmony_consumer_app_privacy_info.html"
                    target="blank"
                    className="text-white"
                  >
                    {" "}
                    {t("Policy")}{" "}
                  </a> */}
                </li>
                {/* <li className="list-unstyled divider_link-footer">
                  <a href="#!"> {t("Consumer Policy")} </a>
                </li> */}
                {/* <li className="list-unstyled divider_link-footer">
                  <a href="#" className="text-white">
                    {" "}
                    {t("User Guide")}{" "}
                  </a>
                </li> */}
              </ul>
            </Col>
            <Col xs="auto" className="p-0 facebook__icon">
              <a
                target="blank"
                href="https://www.facebook.com/harmonypayapp"
                className="text-white"
              >
                <AiFillFacebook size={48} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
