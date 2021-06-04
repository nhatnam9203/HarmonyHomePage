import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import { useSelector } from "react-redux";
import "react-table/react-table.css";
import "../style.scss";

const Overall = () => {
  const [valueDate, setValueDate] = React.useState("This Week");
  const { loading } = useSelector((state) => state.retailer);

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  const onClickShowReport = () => {};

  const onClickExport = (reportType) => {
    switch (reportType) {
      case "PDF":
        break;

      case "Excel":
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="info_merchant_title">Overall</div>
      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />
      <ButtonReport
        onClickShowReport={onClickShowReport}
        onClickExport={onClickExport}
      />
      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={[]}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns()}
          PaginationComponent={() => <div />}
        />

        <Pagination
          activePage={1}
          handlePageChange={() => {}}
          totalItem={Math.ceil(10 / 2)}
        />
      </div>
    </>
  );
};

export default Overall;
