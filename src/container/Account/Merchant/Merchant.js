import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantListAction } from "../../../actions/userActions";
import { useTransition, animated } from "react-spring";

import Loading from "../../../util/Loading";
import Table from "react-bootstrap/Table";

import "./Merchant.scss";

function Merchant() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMerchantListAction());
  }, [dispatch]);

  const { loading, list } = useSelector((state) => state.merchantList);

  const renderMerchantTable = list?.map((i) => (
    <tr key={i?.merchantId}>
      <td>{i?.merchantId}</td>
      <td>{i?.businessName}</td>
      <td>{i?.email}</td>
      <td>{i?.cellPhone}</td>
      <td>{Number(i?.isDisabled) === 0 ? "Active" : "Inactive"}</td>
      <td className="text-center">
        <button
          className="text_btn"
          onClick={() => history.push(`/account/merchant/${i?.merchantId}`)}
        >
          View
        </button>
      </td>
    </tr>
  ));

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
    <div className="merchant">
      <h1>My Merchant</h1>

      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <Loading />
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <Table bordered className="mt-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Business name</th>
                  <th>Email</th>
                  <th>Contact phone</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>{renderMerchantTable}</tbody>
            </Table>
          </animated.div>
        )
      )}
    </div>
  );
}

export default Merchant;
