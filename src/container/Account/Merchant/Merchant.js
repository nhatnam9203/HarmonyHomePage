import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantListAction } from "../../../actions/userActions";
import { Helmet } from "react-helmet";

import Table from "react-bootstrap/Table";

import "./Merchant.scss";

function Merchant() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMerchantListAction());
  }, [dispatch]);

  const { list } = useSelector((state) => state.merchantList);

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

  return (
    <div className="merchant">
      <Helmet>
        <title>Harmony | My Merchants</title>
        <meta name="description" content="Harmony My Merchants" />
      </Helmet>
      <h1>My Merchants</h1>

      {/* {loading ? (
        <Loading />
      ) : ( */}
      <div>
        <Table responsive className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                <p className="th_business_name">Business name</p>
              </th>
              <th>Email</th>
              <th>Contact phone</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>{renderMerchantTable}</tbody>
        </Table>{" "}
      </div>
      {/* )} */}
    </div>
  );
}

export default Merchant;
