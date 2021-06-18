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
import "../Info.scss";
import "./style.scss";

const Orders = ({
  customerAppointments = [],
  countCustomerAppointments = 0,
  customerId,
  showDetail,
}) => {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const { detail } = useSelector((state) => state.merchantDetail);
  const { loading, directionSort_customerAppointments } = useSelector(
    (state) => state.retailer
  );

  const [page, setPage] = React.useState(1);
  const [key, setKey] = React.useState("");

  const changePage = (index) => {
    setPage(index);
    getData(index, key);
  };

  const onChangeSearch = (e) => {
    setKey(e.target.value);
  };

  const submitSearch = () => {
    setPage(1);
    dispatch(resetSortCustomerAppointment());
    getData(1, key);
  };

  const getData = (index, keySearch) => {
    const subUrl = `retailer/appointment/getByCustomer/${customerId}?merchantId=${detail.merchantId}&page=${index}&key=${keySearch}`;
    dispatch(getAppointmentCustomer(subUrl, token));
  };

  const onClickSort = (status, sortType) => {
    dispatch(sortCustomerAppointment({ type: sortType }));
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
        columns={columns(directionSort_customerAppointments, onClickSort)}
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

const columns = (valueSort, onClickSort) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="ID"
        valueSort={valueSort}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "appointmentId")
        }
      />
    ),
    id: "appointmentId",
    accessor: (row) => (
      <div className="table-tr">{`${row?.appointmentId || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Purchase Point"
        valueSort={valueSort}
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
