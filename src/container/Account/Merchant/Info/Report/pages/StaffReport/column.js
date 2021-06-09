import CustomTableHeader from "../../../CustomTableHeader";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Customer name"
        valueSort={valueSort}
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "productSales")
        }
      />
    ),
    id: "productSales",
    accessor: (row) =>
      row.productSales?.toString() ? (
        <div className="table-tr">{`$ ${row.productSales}`}</div>
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "productSplit")
        }
      />
    ),
    id: "productSplit",
    accessor: (row) =>
      row.productSplit?.toString() ? (
        <div className="table-tr">{`$ ${row.productSplit}`}</div>
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "salaryWage")
        }
      />
    ),
    id: "salaryWage",
    accessor: (row) =>
      row.salaryWage?.toString() ? (
        <div className="table-tr">{`$ ${row.salaryWage}`}</div>
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "refundAmount")
        }
      />
    ),
    id: "refundAmount",
    accessor: (row) =>
      row.refundAmount?.toString() ? (
        <div className="table-tr">{`$ ${row.refundAmount}`}</div>
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "discountByStaff")
        }
      />
    ),
    id: "discountByStaff",
    accessor: (row) =>
      row.discountByStaff?.toString() ? (
        <div className="table-tr">{`$ ${row.discountByStaff}`}</div>
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
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "salary")
        }
      />
    ),
    id: "salary",
    accessor: (row) =>
      row.salary?.toString() ? (
        <div className="table-tr">{`$ ${row.salary}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_salary}`}</div>
      ),
  },
];

export default columns;
