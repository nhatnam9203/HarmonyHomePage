import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantByIdAction } from "../../../../actions/userActions";

import BusinessInformation from "./BusinessInformation";
import Tabs from "./Tabs";

import "./Info.scss";

function Info() {
  const [tabActive, setTabActive] = React.useState("Business Information");

  const changeTab = (tabName) => {
    setTabActive(tabName);
  };

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMerchantByIdAction(id));
  }, [dispatch]);

  const { detail } = useSelector((state) => state.merchantDetail);

  return (
    <div className="info_content">
      <div className="d-flex justify-content-between">
        <span className="info_businessName">
          {id} - {detail?.businessName}
        </span>
        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
      <Tabs tabActive={tabActive} changeTab={changeTab} />
      <BusinessInformation />
    </div>
  );
}

export default Info;
