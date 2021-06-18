import React from "react";
import ReactTable from "react-table";
import Title from "@/components/Title";
import CustomTableHeader from "../CustomTableHeader";
import "../Info.scss";
import "./style.scss";

const Addresses = ({ addresses = [] }) => {
  return (
    <>
      <Title>Addresses</Title>
      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <ReactTable
          manual
          sortable={false}
          data={addresses}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          columns={columns()}
          PaginationComponent={() => <div />}
        />
      </div>
    </>
  );
};

export default Addresses;

const columns = () => [
  {
    Header: (
      <CustomTableHeader
        value="First Name"
        valueSort={""}
        onClickSort={() => {}}
      />
    ),
    id: "addressFirstName",
    accessor: (row) => (
      <div className="table-tr">{`${row?.addressFirstName || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        value="Last Name"
        valueSort={""}
        onClickSort={() => {}}
      />
    ),
    id: "addressLastName",
    accessor: (row) => (
      <div className="table-tr">{`${row?.addressLastName || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        value="Street address"
        valueSort={""}
        onClickSort={() => {}}
      />
    ),
    id: "street",
    accessor: (row) => <div className="table-tr">{`${row?.street || ""}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader value="City" valueSort={""} onClickSort={() => {}} />
    ),
    id: "city",
    accessor: (row) => <div className="table-tr">{`${row?.city || ""}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader value="State" valueSort={""} onClickSort={() => {}} />
    ),
    id: "stateName",
    accessor: (row) => (
      <div className="table-tr">{`${row?.stateName || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        value="Zipcode"
        valueSort={""}
        onClickSort={() => {}}
      />
    ),
    id: "zipCode",
    accessor: (row) => (
      <div className="table-tr">{`${row?.zipCode || ""}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader value="Phone" valueSort={""} onClickSort={() => {}} />
    ),
    id: "addressPhone",
    accessor: (row) => (
      <div className="table-tr">{`${row?.addressPhone || ""}`}</div>
    ),
  },
];
