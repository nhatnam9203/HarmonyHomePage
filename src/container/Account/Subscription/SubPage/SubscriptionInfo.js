import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getMySubscriptionByIdAction,
  cancelSubscriptionByIdAction,
} from "../../../../actions/userActions";
import { Button, Table } from "react-bootstrap";
import { useTransition, animated } from "react-spring";

import Loading from "../../../../util/Loading";
import moment from "moment";
import Popup from "../../../../components/Popup/Popup";

import "./EditSub.scss";

function SubscriptionInfo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [popUp, setPopUp] = useState(false);

  const { loading, subscription } = useSelector(
    (state) => state.mySubscription
  );
  const { loading: cancelStatus, message } = useSelector(
    (state) => state.cancelSubscription
  );

  useEffect(() => {
    dispatch(getMySubscriptionByIdAction(id));
  }, [dispatch, message]);

  const handleCancelSubscription = () => {
    dispatch(cancelSubscriptionByIdAction(id));
  };

  const transitions = useTransition(loading, null, {
    from: {
      position: "absolute",
      opacity: 0,
      width: "100%",
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleBilling = () => {
    history.push("/account/subscription/billing");
  };

  const handleBillingHistory = subscription?.history?.map((i) => (
    <tr key={i?.paymentTransactionId}>
      <td style={{ fontWeight: "normal" }}>{i?.paymentTransactionId}</td>
      <td>{moment(i?.createDate).format("MM/DD/YYYY")}</td>
      <td className="price">{i?.packageName}</td>
      <td>${i?.totalPrice}</td>
      <td>{i?.status}</td>
    </tr>
  ));

  return (
    <div className="sub_info">
      <div className="d-flex justify-content-between">
        <h1>Subscription ID #{id}</h1>

        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
      <div>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div style={props} key={key}>
              <Loading />
            </animated.div>
          ) : (
            <animated.div
              style={{
                from: {
                  opacity: 0,
                  width: "100%",
                },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
              }}
              key={key}
            >
              <Table className="mt-4">
                <tbody>
                  <tr>
                    <td>Subscription Plan</td>
                    <td>{subscription?.planName}</td>
                    <td className="">
                      Paid{" "}
                      {subscription?.pricingType === "annually"
                        ? "Yearly"
                        : "Monthly"}
                    </td>
                    <td className="text-right">
                      {Number(subscription?.isDisabled) === 0 ? (
                        <>
                          <button className="text_btn" onClick={handleBilling}>
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
                        <button className="text_btn" onClick={handleBilling}>
                          Renew
                        </button>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Next Payment Date</td>
                    <td>
                      {moment(subscription?.expiredDate).format("MM/DD/YYYY")}
                    </td>
                    <td className="price">${subscription?.price}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Payment Method</td>
                    <td>{subscription?.paymentMethod}</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>

              <h1 className="mt-5">Billing History </h1>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Plan Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{handleBillingHistory}</tbody>
              </Table>
            </animated.div>
          )
        )}
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
