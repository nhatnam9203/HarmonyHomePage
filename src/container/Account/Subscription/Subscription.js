import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMySubscriptionAction } from "../../../actions/userActions";
import { useTransition, animated } from "react-spring";

import moment from "moment";
import Loading from "../../../util/Loading";
import Table from "react-bootstrap/Table";

import "./Subscription.scss";

function Subscription() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, subscriptionList } = useSelector(
    (state) => state.mySubscription
  );

  console.log("subscriptionList", subscriptionList);

  useEffect(() => {
    dispatch(getMySubscriptionAction());
  }, [dispatch]);

  const handleBilling = () => {
    history.push("/account/subscription/billing");
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
            <button className="text_btn" onClick={handleBilling}>
              Edit
            </button>
            <button className="text_btn  cancel_btn" onClick={handleBilling}>
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
          </animated.div>
        )
      )}
    </div>
  );
}

export default Subscription;
