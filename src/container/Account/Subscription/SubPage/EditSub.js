import React, { useState, useEffect } from "react";
import {
  Form,
  Table,
  Button,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getPackageAction,
  getRefundMoneyAction,
  getMySubscriptionByIdAction,
  updateSubscriptionAction,
} from "../../../../actions/userActions";
import { RiErrorWarningLine } from "react-icons/ri";
import { motion } from "framer-motion";

import Loading from "../../../../util/Loading";

import "./EditSub.scss";

function EditSub() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, packageList } = useSelector((state) => state.package);

  const { loading: loadingSub, subscription } = useSelector(
    (state) => state.mySubscription
  );

  const { loading: loadingUpdateSub } = useSelector(
    (state) => state.updateSubscription
  );
  const { loading: loadingRefundAmount, refundAmount } = useSelector(
    (state) => state.refund
  );

  const [defaultPackageId, setDefaultPackageId] = useState(
    subscription?.packageId
  );
  const [defaultPricingType, setDefaultPricingType] = useState(
    subscription?.pricingType
  );
  const [staffNumber, setStaffNumber] = useState("");
  const [additionStaffPrice, setAdditionStaffPrice] = useState("");
  const [newPackageName, setNewPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState(0);
  const [policy, setPolicy] = useState(true);

  useEffect(() => {
    dispatch(getPackageAction(id));
    dispatch(getMySubscriptionByIdAction(id));
  }, [dispatch]);

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
      additionStaff: 0,
    };

    dispatch(updateSubscriptionAction(value));
  };

  const newPlanText =
    Number(subscription?.price) > packagePrice ? (
      <sup className="downgrade">Downgrade</sup>
    ) : (
      <sup className="upgrade">Upgrade</sup>
    );

  const totalPackagePrice =
    Number(packagePrice) + Number(staffNumber) * Number(additionStaffPrice);

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
            <Form.Check type="radio" id="check-api-radio">
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
      {loading && loadingSub ? (
        <Loading />
      ) : (
        <Table responsive className="mt-4">
          <thead>
            <tr>
              <th className="p-3 ">
                <p className="th_name">Packages</p>
              </th>
              <th className="p-3 text-center-md">
                <p>Billed Monthly</p>
              </th>
              <th className="p-3 text-center-md">
                <p>Billed Annually</p>
              </th>
            </tr>
          </thead>
          <tbody>{renderPackage}</tbody>
        </Table>
      )}

      {defaultPackageId !== subscription?.packageId && (
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
                <tr>
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
                        <span className="span_bold">${totalPackagePrice}</span>{" "}
                      </p>
                    </motion.div>
                  </td>
                </tr>
                <tr>
                  <td>Old Plan</td>
                  <td>
                    <span className="span_bold">{subscription?.planName}</span>
                  </td>
                  <td>
                    Paid &nbsp;
                    {subscription?.pricingType === "monthly"
                      ? "Monthly"
                      : "Annually"}
                  </td>
                  <td className="refund_money">
                    <p className="th_total_price">
                      <span className="span_bold">${subscription?.price}</span>
                      &nbsp; (Refund amount:{" "}
                      <span className="span_bold">&nbsp; ${refundAmount}</span>)
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">Tính tiền?</Tooltip>
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
      )}
      <div className="d-flex justify-content-end pt-4">
        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Cancel
        </Button>
        {defaultPackageId !== subscription?.packageId ? (
          loadingUpdateSub ? (
            <Button className="btn btn_save" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <Button
              onClick={updateSubscription}
              disabled={policy}
              className="btn btn_save"
            >
              Submit
            </Button>
          )
        ) : null}
      </div>
    </div>
  );
}

export default EditSub;
