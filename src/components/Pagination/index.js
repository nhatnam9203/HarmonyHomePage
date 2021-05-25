import React from "react";
import Pagination from "react-js-pagination";
import "./style.scss";

const Index = ({ activePage = 5, handlePageChange = () => {} }) => {
  return (
    <div className="pagination_container">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        prevPageText="<"
        nextPageText=">"
        firstPageText="<<"
        lastPageText=">>"
      />
    </div>
  );
};

export default Index;
