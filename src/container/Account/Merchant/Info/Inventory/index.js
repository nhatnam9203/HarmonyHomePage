import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "../../../../../components/Search";
import Pagination from "../../../../../components/Pagination";
import { useSelector } from "react-redux";

import "react-table/react-table.css";
import "../Info.scss";

const Index = () => {
  const [activePage, changeActivePage] = React.useState(1);

  const { inventory, inventoryPages } = useSelector((state) => state.retailer);

  return (
    <Fade>
      <div className="info_merchant_title">
        Inventory
        <Search />
      </div>
      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={inventory}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => <div />}
          loading={false}
          columns={columns}
          PaginationComponent={() => <div />}
        />
        <Pagination
          activePage={activePage}
          handlePageChange={changeActivePage}
          totalItem={Math.ceil(inventoryPages / 2)}
        />
      </div>
    </Fade>
  );
};

export default Index;
