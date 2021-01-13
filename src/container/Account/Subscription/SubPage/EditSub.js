import React, { useState, useEffect } from "react";
import { Form, Table, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
import {
  getPackageAction,
  getRefundMoneyAction,
  getMySubscriptionByIdAction,
  updateSubscriptionAction,
  renewSubscriptionAction,
} from "../../../../actions/userActions";
import { RiErrorWarningLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Loading from "../../../../util/Loading";
import Popup from "../../../../components/Popup/Popup";

import "./EditSub.scss";

function EditSub(props) {
  const { id } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const { packageId, pricingType } = location.state;

  const { packageList } = useSelector((state) => state.package);

  const [popUp, setPopUp] = useState(false);
  const { loading: loadingSub, subscription } = useSelector(
    (state) => state.mySubscription
  );
  const { loading: loadingUpdateSub } = useSelector(
    (state) => state.updateSubscription
  );
  const { refundAmount } = useSelector((state) => state.refund);

  const [defaultPackageId, setDefaultPackageId] = useState(packageId);
  const [defaultPricingType, setDefaultPricingType] = useState(pricingType);

  const [staffNumber, setStaffNumber] = useState(0);
  const [additionStaffPrice, setAdditionStaffPrice] = useState("");
  const [newPackageName, setNewPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState(0);
  const [policy, setPolicy] = useState(true);

  useEffect(() => {
    dispatch(getPackageAction(id));
    dispatch(getMySubscriptionByIdAction(id));
  }, [dispatch, location]);

  const handleDefaultChecked = (packageId, pricingType) => {
    if (
      Number(packageId) === Number(defaultPackageId) &&
      pricingType === defaultPricingType
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleStaff = (e, staffPrice) => {
    setStaffNumber(e.target.value);
    setAdditionStaffPrice(staffPrice);
  };

  const handleSubscriptionChange = (e, packageName, packagePrice) => {
    const { name, value } = e.target;
    setDefaultPackageId(name);
    setDefaultPricingType(value);
    setNewPackageName(packageName);
    setPackagePrice(packagePrice);
    dispatch(getRefundMoneyAction(subscription?.subscriptionId));
  };

  const updateSubscription = () => {
    const value = {
      id,
      packageId: defaultPackageId,
      pricingType: defaultPricingType,
      additionStaff: staffNumber,
    };

    if (props?.isRenew) {
      dispatch(renewSubscriptionAction(value));
    } else {
      dispatch(updateSubscriptionAction(value));
    }
  };

  const newPlanText =
    Number(subscription?.price) > packagePrice ? (
      <sup className="downgrade">Downgrade</sup>
    ) : (
      <sup className="upgrade">Upgrade</sup>
    );

  const totalPackagePrice = (
    Number(packagePrice) +
    Number(staffNumber) * Number(additionStaffPrice)
  ).toFixed(2);

  const renderPackage = packageList
    ?.map((i, idx) => {
      return (
        <tr key={idx}>
          <td className="sub_plan">
            {i?.packageName} <br />
            {Number(i?.packageId === 3)
              ? Number(defaultPackageId) === 3 && (
                  <div className="add_staff">
                    <p>Addition Staff</p>
                    <input
                      type="number"
                      name="additionStaff"
                      value={staffNumber}
                      onChange={(e) => handleStaff(e, i?.additionStaffPrice)}
                    />
                  </div>
                )
              : null}
          </td>
          <td className="text-center">
            <Form.Check type="radio" id="check-api-radio" className="mb-2">
              <Form.Check.Input
                type="radio"
                name={i?.packageId}
                onChange={(e) =>
                  handleSubscriptionChange(e, i?.packageName, i?.pricing)
                }
                value="monthly"
                checked={handleDefaultChecked(i?.packageId, "monthly")}
              />
              <Form.Check.Label>${i?.pricing}</Form.Check.Label>
            </Form.Check>

            {Number(i?.packageId === 3)
              ? Number(defaultPackageId) === 3 && (
                  <div className="text-center">
                    <p className="staff_price">
                      + $
                      {(Number(staffNumber) * i?.additionStaffPrice).toFixed(2)}
                    </p>
                  </div>
                )
              : null}
          </td>
          <td className="text-center">
            <Form.Check type="radio" id="check-api-radio">
              <Form.Check.Input
                type="radio"
                name={i?.packageId}
                onChange={(e) =>
                  handleSubscriptionChange(
                    e,
                    i?.packageName,
                    (i?.pricing * i?.annually).toFixed(2)
                  )
                }
                value="annually"
                checked={handleDefaultChecked(i?.packageId, "annually")}
              />
              <Form.Check.Label>
                ${`${(i?.pricing * i?.annually).toFixed(2)} `}
              </Form.Check.Label>
            </Form.Check>
          </td>
        </tr>
      );
    })
    .reverse();

  return (
    <div className="sub_edit">
      <h1>Change Subscription</h1>
      {loadingSub ? (
        <Loading />
      ) : (
        <Table responsive className="mt-4">
          <thead>
            <tr>
              <th className="p-3 ">
                <p className="th_name">Packages</p>
              </th>
              <th className="p-3 text-md-center">
                <p>Billed Monthly</p>
              </th>
              <th className="p-3 text-md-center">
                <p>Billed Annually</p>
              </th>
            </tr>
          </thead>
          <tbody>{renderPackage}</tbody>
        </Table>
      )}

      {isMobile && defaultPackageId !== subscription?.packageId ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="new_order_mobile">
            <h1>New Order</h1>
            <div>
              <p className="th_new_plan mt-2">New Plan</p>
              <div className="d-flex justify-content-between">
                <p className="th_plan_name mt-2">
                  <span className="span_bold">{newPackageName}</span>
                </p>
                {Number(subscription?.price) > packagePrice ? (
                  <p className="downgrade mt-2">Downgrade</p>
                ) : (
                  <p className="upgrade mt-2">Upgrade</p>
                )}
              </div>
              <p className="th_plan_name mt-2">
                Paid &nbsp;
                {defaultPricingType === "monthly" ? "Monthly" : "Annually"}
              </p>
              <p className="th_total_price mt-2">
                <span className="span_bold">${totalPackagePrice}</span>
              </p>
            </div>
            <hr />
            <div>
              <p className="th_new_plan">Old Plan</p>
              <div className="d-flex justify-content-between">
                <p className="th_plan_name mt-2">
                  <span className="span_bold">{subscription?.planName}</span>
                </p>
              </div>
              <p className="th_plan_name mt-2">
                Paid &nbsp;
                {subscription?.pricingType === "monthly"
                  ? "Monthly"
                  : "Annually"}
              </p>
              <p className="th_total_price mt-2 refund_money">
                <span className="span_bold">${subscription?.price}</span>
                &nbsp; (Refund amount:{" "}
                <span className="span_bold">&nbsp; ${refundAmount}</span>)
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Refund</Tooltip>}
                >
                  <RiErrorWarningLine size={23} className="info" />
                </OverlayTrigger>
              </p>
            </div>
          </div>
          <Form.Group controlId="formBasicCheckbox" className="mt-4">
            <Form.Check
              className="policy_text"
              type="checkbox"
              label="I have read and agree to the Subscription Policy"
              onChange={() => setPolicy(!policy)}
            />
          </Form.Group>
        </motion.div>
      ) : (
        defaultPackageId !== subscription?.packageId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="mt-4">
              <h1>New Order</h1>
              <Table responsive>
                <tbody>
                  <tr className="thead_billing">
                    <td>
                      <p className="th_new_plan">New Plan</p>
                    </td>
                    <td>
                      <p className="th_plan_name">
                        <span className="span_bold">{newPackageName}</span>{" "}
                        {newPlanText}
                      </p>
                    </td>
                    <td>
                      <p className="th_plan_name">
                        Paid &nbsp;
                        {defaultPricingType === "monthly"
                          ? "Monthly"
                          : "Annually"}
                      </p>
                    </td>
                    <td>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                      >
                        <p className="th_total_price">
                          <span className="span_bold">
                            ${totalPackagePrice}
                          </span>{" "}
                        </p>
                      </motion.div>
                    </td>
                  </tr>
                  <tr>
                    <td>Old Plan</td>
                    <td>
                      <span className="span_bold">
                        {subscription?.planName}
                      </span>
                    </td>
                    <td>
                      Paid &nbsp;
                      {subscription?.pricingType === "monthly"
                        ? "Monthly"
                        : "Annually"}
                    </td>
                    <td className="refund_money">
                      <p className="th_total_price">
                        <span className="span_bold">
                          ${subscription?.price}
                        </span>
                        &nbsp; (Refund amount:{" "}
                        <span className="span_bold">
                          &nbsp; ${refundAmount}
                        </span>
                        )
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">Refund</Tooltip>
                          }
                        >
                          <RiErrorWarningLine size={23} className="info" />
                        </OverlayTrigger>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className="policy_text"
                  type="checkbox"
                  label="I have read and agree to the Subscription Policy"
                  onChange={() => setPolicy(!policy)}
                />
              </Form.Group>
            </div>
          </motion.div>
        )
      )}

      <div className="d-flex flex-wrap justify-content-end pt-4 ">
        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Cancel
        </Button>
        {defaultPackageId !== subscription?.packageId && (
          <Button
            onClick={() => setPopUp(true)}
            disabled={policy}
            className="btn btn_save"
          >
            Submit
          </Button>
        )}
      </div>
      <Popup
        show={popUp}
        isEdit={true}
        isLoading={loadingUpdateSub}
        handleCancel={updateSubscription}
        handleClose={() => setPopUp(false)}
      />
    </div>
  );
}

export default EditSub;
