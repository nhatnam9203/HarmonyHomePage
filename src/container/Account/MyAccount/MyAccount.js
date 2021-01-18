import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyAccountAction } from "../../../actions/userActions";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

import "./MyAccount.scss";

function MyAccount() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAccountAction());
  }, [dispatch]);

  const { account } = useSelector((state) => state.myAccount);

  return (
    <div className="my_account">
      <Helmet>
        <title>Harmony | My Account</title>
        <meta name="My Account" content="Harmony My Account" />
      </Helmet>
      <Row sm={12}>
        <h1>My Account</h1>
      </Row>
      <AnimatePresence exitBeforeEnter>
        {/* {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Loading />
          </motion.div>
        ) : ( */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Row>
            <Col sm={12} className="pl-0">
              <h3 className="mb-0">Account Information</h3>
              <hr />
            </Col>
            <Col sm={12} md={6} className="pl-0">
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
            <Col sm={12} md={6} className="pl-0">
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
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </div>
  );
}
export default MyAccount;
