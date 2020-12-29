import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyAccountAction } from "../../../actions/userActions";

import Loading from "../../../util/Loading";

import "./MyAccount.scss";

function MyAccount() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAccountAction());
  }, [dispatch]);

  const { loading, account } = useSelector((state) => state.myAccount);

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
              {account?.firstName} {account?.lastName}
            </p>
            <p>{account?.email}</p>
            <div className="pt-3">
              <button
                className="text_btn edit_btn"
                onClick={() => history.push("/account/my-account/edit")}
              >
                Edit
              </button>
              <button
                className="text_btn pl-3"
                onClick={() =>
                  history.push("/account/my-account/edit/password")
                }
              >
                Change Password
              </button>
            </div>
          </Col>
          <Col xs={6}>
            <h3>Newsletter</h3>
            <p>You aren't subscribed to our newsletter.</p>
            <button
              className="text_btn pt-3"
              onClick={() =>
                history.push("/account/my-account/edit/newsletter")
              }
            >
              Edit
            </button>
          </Col>
        </Row>
      )}
    </>
  );
}

export default MyAccount;
