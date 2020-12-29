import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newsletterSubscriptionAction } from "../../../../actions/userActions";

function EditNewsletter() {
  const dispatch = useDispatch();

  const { newsletterSubStatus } = useSelector((state) => state.newsletterSub);

  const { account } = useSelector((state) => state.myAccount);

  const [newsletterSub, setNewsletterSub] = useState(account?.newsletterEnable);

  const handleNewsletterSubs = () => {
    const enable = newsletterSub;
    dispatch(newsletterSubscriptionAction(enable));
  };

  return (
    <Form noValidate className="edit_account">
      <Row className="edit_account_form">
        <Col xs={12}>
          <h1>Edit Account Information</h1>
        </Col>
        <Col xs={12}>
          <h3>Subscription option</h3>
          <hr />
          <Form.Group
            controlId="changePasswordCheckbox"
            className="edit_account_checkbox"
          >
            <Form.Check
              type="checkbox"
              label="General Subscription"
              name="newsletterSub"
              onChange={(e) => setNewsletterSub(e.target.checked)}
              checked={newsletterSub}
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          {newsletterSubStatus ? (
            <Button className="submit_btn mt-3" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <Button className="submit_btn mt-3" onClick={handleNewsletterSubs}>
              Save
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  );
}

export default EditNewsletter;
