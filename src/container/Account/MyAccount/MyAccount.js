import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyAccountActions } from "../../../actions/userActions";

import Loading from "../../../util/Loading";

import "./MyAccount.scss";

function MyAccount() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAccountActions());
  }, [dispatch]);

  const {
    loading,
    account: { contactInfo },
  } = useSelector((state) => state.myAccount);
  const { firstName, lastName, email } = contactInfo;

  console.log("loading", loading, contactInfo);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Row className="my_account">
          <Col xs={12}>
            <h1>My Account</h1>
          </Col>
          <Col xs={12}>
            <h3 className="mb-0">Account Information</h3>
            <hr />
          </Col>
          <Col xs={6}>
            <h3>Contact Information</h3>
            <p>
              {firstName} {lastName}
            </p>
            <p>{email}</p>
            <div className="pt-3">
              <button
                className="text_btn edit_btn"
                onClick={() => history.push("/account/my-account/edit")}
              >
                Edit
              </button>
              <button
                className="text_btn pl-3"
                onClick={() => history.push("/account/my-account/edit/pass")}
              >
                Change Password
              </button>
            </div>
          </Col>
          <Col xs={6}>
            <h3>Newsletter</h3>
            <p>You aren't subscribed to our newsletter.</p>
            <button className="text_btn pt-3">Edit</button>
          </Col>
        </Row>
      )}
    </>
  );
}

export default MyAccount;
