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
        value="Product Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "productSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "productSales")
        }
      />
    ),
    id: "productSales",
    accessor: (row) =>
      row.productSales?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.productSales)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_productSales}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Product Split"
        valueSort={valueSort}
        isActiveSort={sortType == "productSplit"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "productSplit")
        }
      />
    ),
    id: "productSplit",
    accessor: (row) =>
      row.productSplit?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.productSplit)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_productSplit}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Working Hour"
        valueSort={valueSort}
        isActiveSort={sortType == "workingHour"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "workingHour")
        }
      />
    ),
    id: "workingHour",
    accessor: (row) =>
      row.workingHour?.toString() ? (
        <div className="table-tr">{`${row.workingHour}`}</div>
      ) : (
        <div className="table-tr-last">{`${row.total_workingHour}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Salary Wage"
        valueSort={valueSort}
        isActiveSort={sortType == "salaryWage"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "salaryWage")
        }
      />
    ),
    id: "salaryWage",
    accessor: (row) =>
      row.salaryWage?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.salaryWage)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_salaryWage}`}</div>
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
        <div className="table-tr-last">{`$ ${row.total_discountByStaff}`}</div>
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
