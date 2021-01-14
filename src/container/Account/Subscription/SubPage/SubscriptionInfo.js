import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getMySubscriptionByIdAction,
  cancelSubscriptionByIdAction,
} from "../../../../actions/userActions";
import { Button, Table } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Loading from "../../../../util/Loading";
import moment from "moment";
import Popup from "../../../../components/Popup/Popup";

import "./EditSub.scss";

function SubscriptionInfo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [popUp, setPopUp] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  const { loading, subscription } = useSelector(
    (state) => state.mySubscription
  );
  const { loading: cancelStatus } = useSelector(
    (state) => state.cancelSubscription
  );

  useEffect(() => {
    dispatch(getMySubscriptionByIdAction(id));
  }, [dispatch]);

  const handleCancelSubscription = () => {
    dispatch(cancelSubscriptionByIdAction(id));
    setPopUp(false);
    setTimeout(() => {
      dispatch(getMySubscriptionByIdAction(id));
    }, 1000);
  };

  const handleBillingHistory = subscription?.history?.map((i, idx) => (
    <tr key={idx}>
      <td style={{ fontWeight: "normal" }}>{i?.paymentTransactionId}</td>
      <td>{moment(i?.createdDate).format("MMMM D, YYYY hh:mm A")}</td>
      <td className="price">{i?.packageName}</td>
      <td>${i?.totalPrice}</td>
      <td>{i?.status}</td>
    </tr>
  ));

  return (
    <div className="sub_info">
      <div className="d-flex justify-content-between content_title">
        <h1>Subscription ID #{id}</h1>

        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
      <div>
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              {isMobile ? (
                <div className="sub_mobile">
                  <p className="title">Subscription Plan</p>
                  <div className="sub_plan_mobile">
                    <p className="">{subscription?.planName}</p>

                    <p className="">
                      Paid &nbsp;
                      {subscription?.pricingType === "annually"
                        ? "Annually"
                        : "Monthly"}{" "}
                    </p>

                    {/* <p className="">
                      {Number(subscription?.isDisabled) === 0 ? (
                        <>
                          <button
                            className="text_btn"
                            onClick={() =>
                              history.push({
                                pathname: `/account/subscription/${subscription?.subscriptionId}/billing`,
                                state: {
                                  packageId: subscription?.packageId,
                                  pricingType: subscription?.pricingType,
                                },
                              })
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="text_btn  cancel_btn"
                            onClick={() => setPopUp(!popUp)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className="text_btn"
                          onClick={() =>
                            history.push({
                              pathname: `/account/subscription/${subscription?.subscriptionId}/renew`,
                              state: {
                                packageId: subscription?.packageId,
                                pricingType: subscription?.pricingType,
                              },
                            })
                          }
                        >
                          Renew
                        </button>
                      )}
                    </p> */}
                  </div>
                  <hr />
                  <p className="title">Next Payment Date</p>
                  <div className="sub_plan_mobile">
                    <p>
                      {moment(subscription?.expiredDate).format("MMM D, YYYY")}
                    </p>
                    <p className="price">${subscription?.totalPrice}</p>
                  </div>
                  <hr />
                  <p className="title">Payment Method</p>
                  <div className="sub_plan_mobile">
                    <p>{subscription?.paymentMethod}</p>
                  </div>
                </div>
              ) : (
                <Table responsive className="mt-4">
                  <tbody>
                    <tr>
                      <td>
                        <p className="th_plan_name">Subscription Plan</p>
                      </td>
                      <td>
                        <p className="th_plan_name">{subscription?.planName}</p>
                      </td>
                      <td className="">
                        <p className="th_paid">
                          Paid &nbsp;
                          {subscription?.pricingType === "annually"
                            ? "Annually"
                            : "Monthly"}{" "}
                        </p>
                      </td>
                      {/* 
                      <td className="text-right pr-md-0 action-btn">
                        <p>
                          {Number(subscription?.isDisabled) === 0 ? (
                            <>
                              <button
                                className="text_btn"
                                onClick={() =>
                                  history.push({
                                    pathname: `/account/subscription/${subscription?.subscriptionId}/billing`,
                                    state: {
                                      packageId: subscription?.packageId,
                                      pricingType: subscription?.pricingType,
                                    },
                                  })
                                }
                              >
                                Edit
                              </button>
                              <button
                                className="text_btn  cancel_btn pr-md-0"
                                onClick={() => setPopUp(!popUp)}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button
                              className="text_btn"
                              onClick={() =>
                                history.push({
                                  pathname: `/account/subscription/${subscription?.subscriptionId}/renew`,
                                  state: {
                                    packageId: subscription?.packageId,
                                    pricingType: subscription?.pricingType,
                                  },
                                })
                              }
                            >
                              Renew
                            </button>
                          )}{" "}
                        </p> 
                      </td> */}
                    </tr>
                    <tr>
                      <td>Next Payment Date</td>
                      <td>
                        {moment(subscription?.expiredDate).format(
                          "MMM D, YYYY"
                        )}
                      </td>
                      <td className="price">${subscription?.totalPrice}</td>
                      {/* <td></td> */}
                    </tr>
                    <tr>
                      <td>Payment Method</td>
                      <td>{subscription?.paymentMethod}</td>
                      <td></td>
                      {/* <td></td> */}
                    </tr>
                  </tbody>
                </Table>
              )}

              <h1 className="mt-5">Billing History </h1>
              <Table responsive className="mt-4">
                <thead>
                  <tr className="thead_billing">
                    <th>
                      <p className="trans_id">Transaction ID</p>
                    </th>
                    <th>Date</th>
                    <th>
                      <p className="name">Plan Name</p>
                    </th>
                    <th>Amount</th>
                    <th className="pr-md-4">Status</th>
                  </tr>
                </thead>
                <tbody>{handleBillingHistory}</tbody>
              </Table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Popup
        show={popUp}
        isLoading={cancelStatus}
        handleCancel={handleCancelSubscription}
        handleClose={() => setPopUp(false)}
      />
    </div>
  );
}

export default SubscriptionInfo;
