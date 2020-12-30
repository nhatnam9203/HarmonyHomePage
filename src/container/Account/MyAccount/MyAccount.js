import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyAccountAction } from "../../../actions/userActions";
import { useTransition, animated } from "react-spring";

import Loading from "../../../util/Loading";

import "./MyAccount.scss";

function MyAccount() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAccountAction());
  }, [dispatch]);

  const { loading, account } = useSelector((state) => state.myAccount);

  const transitions = useTransition(loading, null, {
    from: {
      position: "absolute",
      opacity: 0,
      width: "100%",
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="my_account">
      <div xs={12}>
        <h1>My Account</h1>
      </div>

      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <Loading />
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <Row>
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
          </animated.div>
        )
      )}
    </div>
  );
}
export default MyAccount;
