import React from "react";
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

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <footer>
      <div className="top_footer justify-content-center align-items-center">
        <h1 className="top_footer-title text-center">
          {t("Subscribe To Our Newsletter")}
        </h1>
        {/* <Form>
          <Form.Control type="text" placeholder="Email" />
          <Button className="" type="submit">
            Subscribe
          </Button>
        </Form> */}
        <Form className="top_footer-form m-auto">
          <InputGroup className="h-100">
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="Email"
              className="h-100 border-white"
            />
            <InputGroup.Append>
              <Button className="top_footer-form--button" type="submit">
                {t("Subscribe")}
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
      <div className="bot_footer d-flex align-items-center">
        <Container>
          <Row className="justify-content-between">
            <Col
              xs="auto"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="footer-copyrigh">
                {new Date().getFullYear()} &copy; {t("Copyright")}:{" "}
                <a href="https://www.harmonypayment.com/">HarmonyPay Inc</a>
              </div>
              <ul className="d-flex mb-0 bot_footer-link">
                <li className="list-unstyled divider_link-footer">
                  <a href="#!"> {t("Terms & Conditions")} </a>
                </li>
                <li className="list-unstyled divider_link-footer">
                  <a href="#!"> {t("Gift Card Terms")} </a>
                </li>
                <li className="list-unstyled divider_link-footer">
                  <a href="#!"> {t("Policy")} </a>
                </li>
                <li className="list-unstyled divider_link-footer">
                  <a href="#!"> {t("Consumer Policy")} </a>
                </li>
                <li className="list-unstyled divider_link-footer">
                  <a href="#!"> {t("User Guide")} </a>
                </li>
              </ul>
            </Col>
            <Col xs="auto">
              <a href="https://www.facebook.com/harmonypayapp">
                <AiFillFacebook size={48} className="white" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
