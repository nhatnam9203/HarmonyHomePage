import React from "react";
import ReactTable from "react-table";
import CustomTableHeader from "../CustomTableHeader";
import moment from "moment";
import Title from "@/components/Title";
import Search from "@/components/Search";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  getAppointmentCustomer,
  sortCustomerAppointment,
  resetSortCustomerAppointment,
  getOrderDetail,
} from "@/actions/retailerActions";
import { formatMoney, CustomStatus } from "@/util";
import { isEmpty } from "lodash";
import "../Info.scss";
import "./style.scss";
import { isElement } from "react-dom/cjs/react-dom-test-utils.development";

const Orders = ({
  customerAppointments = [],
  countCustomerAppointments = 0,
  customerId,
  showDetail,
}) => {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const { detail } = useSelector((state) => state.merchantDetail);
  const {
    loading,
    directionSort_customerAppointments,
    typeSort_customerAppointments,
  } = useSelector((state) => state.retailer);

  const [page, setPage] = React.useState(1);
  const [key, setKey] = React.useState("");

  const changePage = (index) => {
    setPage(index);
    getData(
      index,
      key,
      typeSort_customerAppointments,
      directionSort_customerAppointments
    );
  };

  const onChangeSearch = (e) => {
    setKey(e.target.value);
  };

  const submitSearch = () => {
    setPage(1);
    dispatch(resetSortCustomerAppointment());
    getData(1, key);
  };

  const getData = (index, keySearch, sortType, sort) => {
    let subUrl = `retailer/appointment/getByCustomer/${customerId}?merchantId=${detail.merchantId}&sorts={"${sortType}":"${sort}"}&page=${index}&key=${keySearch}`;
    if (isElement(sortType) || isEmpty(sort)) {
      subUrl = `retailer/appointment/getByCustomer/${customerId}?merchantId=${detail.merchantId}&page=${index}&key=${keySearch}`;
    }
    dispatch(getAppointmentCustomer(subUrl, token));
  };

  const onClickSort = (sort, sortType) => {
    dispatch(sortCustomerAppointment({ type: sortType }));
    getData(page, key, sortType, sort);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        const { appointmentId } = rowInfo.original;
        const url = `retailer/appointment/${appointmentId}`;
        dispatch(getOrderDetail(url, token, showDetail));
      },
    };
  };

  return (
    <>
      <Title>Orders</Title>
      <div
        className="info_merchant_title"
        style={{ marginBottom: 15, marginTop: 50 }}
      >
        <div />
        <Search value={key} onChange={onChangeSearch} onSubmit={submitSearch} />
      </div>
      <ReactTable
        manual
        sortable={false}
        data={customerAppointments}
        minRows={1}
        noDataText="NO DATA!"
        NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
        columns={columns(
          directionSort_customerAppointments,
          onClickSort,
          typeSort_customerAppointments
        )}
        LoadingComponent={() => loading && <Loading />}
        loading={loading}
        PaginationComponent={() => <div />}
        getTdProps={onRowClick}
      />
      {customerAppointments.length > 0 && (
        <Pagination
          activePage={page}
          handlePageChange={changePage}
          totalItem={Math.ceil(countCustomerAppointments / 2)}
        />
      )}
    </>
  );
};

export default Orders;

const columns = (valueSort, onClickSort, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="ID"
        valueSort={valueSort}
        isActiveSort={sortType == "code"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "code")
        }
      />
    ),
    id: "code",
    accessor: (row) => <div className="table-tr">{`${row?.code || ""}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Purchase Point"
        valueSort={valueSort}
        isActiveSort={sortType == "purchasePoint"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "purchasePoint")
        }
      />
    ),
    id: "purchasePoint",
    accessor: (row) => (
      <div className="table-tr">{`${row?.purchasePoint || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Purchase Date"
        valueSort={valueSort}
        isActiveSort={sortType == "createdDate"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "createdDate")
        }
      />
    ),
    id: "createdDate",
    accessor: (row) => (
      <div className="table-tr">
        {`${moment(row.createdDate).format("MMMM DD, YYYY hh:mm A")}`}
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Bill-to Name"
        valueSort={valueSort}
        isActiveSort={sortType == "billToName"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "billToName")
        }
      />
    ),
    id: "billToName",
    accessor: (row) => (
      <div className="table-tr">{`${row?.billToName || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Ship-to Name"
        valueSort={valueSort}
        isActiveSort={sortType == "shipToName"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "shipToName")
        }
      />
    ),
    id: "shipToName",
    accessor: (row) => (
      <div className="table-tr">{`${row?.shipToName || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Status"
        valueSort={valueSort}
        isActiveSort={sortType == "status"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "status")
        }
      />
    ),
    id: "status",
    accessor: (row) => <CustomStatus status={row.status} />,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Grand total"
        valueSort={valueSort}
        isActiveSort={sortType == "total"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "total")
        }
      />
    ),
    id: "total",
    accessor: (row) => (
      <div className="table-tr">{`$ ${formatMoney(row.total)}`}</div>
    ),
  },
];
