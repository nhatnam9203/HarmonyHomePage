import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMySubscriptionAction,
  cancelSubscriptionByIdAction,
} from "../../../actions/userActions";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import moment from "moment";
import Loading from "../../../util/Loading";
import Table from "react-bootstrap/Table";
import Popup from "../../../components/Popup/Popup";

import "./Subscription.scss";

function Subscription() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

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
        className="sub_plan text-center"
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
                history.push({
                  pathname: `/account/subscription/${i?.subscriptionId}/billing`,
                  state: {
                    packageId: i?.packageId,
                    pricingType: i?.pricingType,
                  },
                })
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
              history.push({
                pathname: `/account/subscription/${i?.subscriptionId}/renew`,
                state: { packageId: i?.packageId, pricingType: i?.pricingType },
              })
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
            {isMobile ? (
              subscriptionList?.map((i, idx) => (
                <div className="bg-light sub_mobile" key={idx}>
                  <p className="sub_name">Plan</p>
                  <p
                    className="sub_plan plan_name"
                    onClick={() =>
                      history.push(`/account/subscription/${i?.subscriptionId}`)
                    }
                  >
                    {i?.planName}
                  </p>
                  <p className="sub_name">Merchant ID</p>
                  <p
                    className="sub_plan"
                    onClick={() =>
                      history.push(`/account/merchant/${i?.merchantId}`)
                    }
                  >
                    {i?.merchantId}
                  </p>
                  <p className="sub_name">Business Name</p>
                  <p>{i?.businessName}</p>
                  <p className="sub_name"> Next Payment Date</p>
                  <p>{moment(i?.expiredDate).format("MM/DD/YYYY")}</p>
                  <p className="sub_name">Amount</p>
                  <p>${i?.price}</p>
                  <p className="sub_name"> Status</p>
                  <p>{Number(i?.isDisabled) === 0 ? "Active" : "Canceled"}</p>
                  <p className="sub_name">Actions</p>
                  <p>
                    {Number(i?.isDisabled) === 0 ? (
                      <>
                        <button
                          className="text_btn"
                          onClick={() =>
                            history.push({
                              pathname: `/account/subscription/${i?.subscriptionId}/billing`,
                              state: {
                                packageId: i?.packageId,
                                pricingType: i?.pricingType,
                              },
                            })
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
                          history.push({
                            pathname: `/account/subscription/${i?.subscriptionId}/renew`,
                            state: {
                              packageId: i?.packageId,
                              pricingType: i?.pricingType,
                            },
                          })
                        }
                      >
                        Renew
                      </button>
                    )}
                  </p>
                </div>
              ))
            ) : (
              <Table responsive className="mt-4">
                <thead>
                  <tr>
                    <th>
                      <p className="th_plan">Plan</p>
                    </th>
                    <th>
                      <p className="th_mer_id">Merchant ID</p>
                    </th>
                    <th>
                      <p className="th_name">Business Name</p>
                    </th>
                    <th>
                      <p className="th_pay_date">Next Payment Date</p>
                    </th>
                    <th>
                      <p>Amount</p>
                    </th>
                    <th>
                      <p>Status</p>
                    </th>
                    <th>
                      <p className="th_action">Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody>{renderSubscriptionList}</tbody>
              </Table>
            )}
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
