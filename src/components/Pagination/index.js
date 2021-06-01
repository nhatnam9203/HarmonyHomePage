import React from "react";
import Pagination from "react-js-pagination";
import prevPage from "@/assets/images/retailer/prevPage.png";
import nextPage from "@/assets/images/retailer/nextPage.png";
import lastPage from "@/assets/images/retailer/lastPage.png";
import firstPage from "@/assets/images/retailer/firstPage.png";
import prevPage_disable from "@/assets/images/retailer/prevPage_disable.png";
import nextPage_disable from "@/assets/images/retailer/nextPage_disable.png";
import lastPage_disable from "@/assets/images/retailer/lastPage_disable.png";
import firstPage_disable from "@/assets/images/retailer/firstPage_disable.png";

import "./style.scss";

const Index = ({
  activePage = 1,
  handlePageChange = () => {},
  totalItem = 450,
}) => {
  return (
    <div className="pagination_container">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={totalItem}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        prevPageText={
          <img
            className="icon-pagination"
            src={activePage !== 1 ? prevPage : prevPage_disable}
          />
        }
        nextPageText={
          <img
            className="icon-pagination"
            src={
              activePage !== Math.ceil(totalItem / 10)
                ? nextPage
                : nextPage_disable
            }
          />
        }
        firstPageText={
          <img
            className="icon-pagination"
            src={activePage !== 1 ? firstPage : firstPage_disable}
          />
        }
        lastPageText={
          <img
            className="icon-pagination"
            src={
              activePage !== Math.ceil(totalItem / 10)
                ? lastPage
                : lastPage_disable
            }
          />
        }
      />
    </div>
  );
};

export default Index;
