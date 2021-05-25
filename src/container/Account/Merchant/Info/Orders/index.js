import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "../../../../../components/Search";
import Pagination from "../../../../../components/Pagination";

import "react-table/react-table.css";
import "../Info.scss";

const Index = () => {
  const [activePage, changeActivePage] = React.useState(1);

  return (
    <Fade>
      <div className="info_merchant_title">
        Orders
        <Search />
      </div>
      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={[]}
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
        />
      </div>
    </Fade>
  );
};

export default Index;
