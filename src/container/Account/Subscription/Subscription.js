import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMySubscriptionAction,
  cancelSubscriptionByIdAction,
} from "../../../actions/userActions";
import { motion, AnimatePresence } from "framer-motion";

import moment from "moment";
import Loading from "../../../util/Loading";
import Table from "react-bootstrap/Table";
import Popup from "../../../components/Popup/Popup";

import "./Subscription.scss";

function Subscription() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, subscriptionList } = useSelector(
    (state) => state.mySubscription
  );

  const { loading: cancelStatus, message } = useSelector(
    (state) => state.cancelSubscription
  );

  const [popUp, setPopUp] = useState(false);
  const [cancelSubId, setCancelSubId] = useState("");

  const handleOpenPopup = (id) => {
    setPopUp(true);
    setCancelSubId(id);
  };

  const handleCancelSubscription = () => {
    dispatch(cancelSubscriptionByIdAction(cancelSubId));
  };

  useEffect(() => {
    dispatch(getMySubscriptionAction());

    if (message) {
      setPopUp(false);
    }
  }, [dispatch, message]);

  const renderSubscriptionList = subscriptionList?.map((i, idx) => (
    <tr key={idx}>
      <td
        className="sub_plan plan_name"
        onClick={() =>
          history.push(`/account/subscription/${i?.subscriptionId}`)
        }
      >
        {i?.planName}
      </td>
      <td
        className="sub_plan"
        onClick={() => history.push(`/account/merchant/${i?.merchantId}`)}
      >
        {i?.merchantId}
      </td>
      <td>{i?.businessName}</td>
      <td>{moment(i?.expiredDate).format("MM/DD/YYYY")}</td>
      <td>${i?.price}</td>
      <td>{Number(i?.isDisabled) === 0 ? "Active" : "Canceled"}</td>
      <td>
        {Number(i?.isDisabled) === 0 ? (
          <>
            <button
              className="text_btn"
              onClick={() =>
                history.push(
                  `/account/subscription/${i?.subscriptionId}/billing`
                )
              }
            >
              Edit
            </button>
            <button
              className="text_btn  cancel_btn"
              onClick={() => handleOpenPopup(i?.subscriptionId)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="text_btn"
            onClick={() =>
              history.push(`/account/subscription/${i?.subscriptionId}/billing`)
            }
          >
            Renew
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="sub">
      <h1>My Subscriptions</h1>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <Table className="mt-4">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Merchant ID</th>
                  <th>Business Name</th>
                  <th>Next Payment Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{renderSubscriptionList}</tbody>
            </Table>
          </motion.div>
        )}
      </AnimatePresence>
      <Popup
        show={popUp}
        isLoading={cancelStatus}
        handleCancel={handleCancelSubscription}
        handleClose={() => setPopUp(false)}
      />
    </div>
  );
}

export default Subscription;
