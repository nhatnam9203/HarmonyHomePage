import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { subscibeNewLetter } from "../../actions/subscribeActions";

function Topfooter() {
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
    </footer>
  );
}

export default Topfooter;
