import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { subscibeNewLetter } from "../../actions/subscribeActions";

export default function Footer() {
  const { t } = useTranslation("footer");
  const [data, setData] = useState({ email: "" });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.subscribe);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscibeNewLetter(data));
    setData({ ...data, email: "" });
  };
  return (
    <footer>
      <div className="top_footer justify-content-center align-items-center">
        <h1 className="top_footer-title text-center">
          {t("Subscribe To Our Newsletter")}
        </h1>
        <div className="mx-4 mx-lg-0">
          <Form onSubmit={handleSubmit} className="top_footer-form m-auto">
            <InputGroup className="h-100">
              <FormControl
                required
                placeholder="Email"
                aria-label="Email"
                aria-describedby="Email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="h-100 border-white border rounded-0 col-xs-12"
              />
              <InputGroup.Append>
                {loading ? (
                  <Button
                    className="top_footer-form--button text-center"
                    disabled
                  >
                    {/* <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    /> */}
                    Loading...
                  </Button>
                ) : (
                  <Button className="top_footer-form--button" type="submit">
                    {t("Subscribe")}
                  </Button>
                )}
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
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
                  className="text-white"
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
                  <Link to="/gift-card-terms" className="text-white">
                    {" "}
                    {t("Gift Card Terms")}{" "}
                  </Link>
                </li>
                <li className="list-unstyled divider_link-footer">
                  <Link to="/policy" className="text-white">
                    {" "}
                    {t("Policy")}{" "}
                  </Link>
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
            <Col xs="auto" className="p-0">
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
