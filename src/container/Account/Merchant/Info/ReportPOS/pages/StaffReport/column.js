import CustomTableHeader from "../../../CustomTableHeader";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Customer name"
        valueSort={valueSort}
        isActiveSort={sortType == "name"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "name")
        }
      />
    ),
    id: "name",
    accessor: (row) =>
      row.name ? (
        <div className="table-tr">{`${row.name}`}</div>
      ) : (
        <div className="table-tr-last">{"Total"}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Service Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "serviceSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "serviceSales")
        }
      />
    ),
    id: "serviceSales",
    accessor: (row) =>
      row.serviceSales?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.serviceSales)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_serviceSales)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Surcharge"
        valueSort={valueSort}
        isActiveSort={sortType == "surcharge"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "surcharge")
        }
      />
    ),
    id: "surcharge",
    accessor: (row) =>
      row.surcharge?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.surcharge)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_surcharge)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Net Service Sale"
        valueSort={valueSort}
        isActiveSort={sortType == "netServiceSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "netServiceSales")
        }
      />
    ),
    id: "netServiceSales",
    accessor: (row) =>
      row.netServiceSales?.toString() ? (
        <div className="table-tr">{`${formatMoney(row.netServiceSales)}`}</div>
      ) : (
        <div className="table-tr-last">{`${formatMoney(row.total_netServiceSales)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Service Split"
        valueSort={valueSort}
        isActiveSort={sortType == "serviceSplit"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "serviceSplit")
        }
      />
    ),
    id: "serviceSplit",
    accessor: (row) =>
      row.serviceSplit?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.serviceSplit)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_serviceSplit)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Tip amount"
        valueSort={valueSort}
        isActiveSort={sortType == "tip"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "tip")
        }
      />
    ),
    id: "tip",
    accessor: (row) =>
      row.tip?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.tip)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_tip)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Discount By Staff"
        valueSort={valueSort}
        isActiveSort={sortType == "discountByStaff"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "discountByStaff")
        }
      />
    ),
    id: "discountByStaff",
    accessor: (row) =>
      row.discountByStaff?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(
          row.discountByStaff
        )}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_discountByStaff)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Refund Amount"
        valueSort={valueSort}
        isActiveSort={sortType == "refundAmount"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "refundAmount")
        }
      />
    ),
    id: "refundAmount",
    accessor: (row) =>
      row.refundAmount?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.refundAmount)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_refundAmount}`}</div>
      ),
  },
  
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Salary"
        valueSort={valueSort}
        isActiveSort={sortType == "salary"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "salary")
        }
      />
    ),
    id: "salary",
    accessor: (row) =>
      row.salary?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.salary)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_salary}`}</div>
      ),
  },
];

export default columns;
