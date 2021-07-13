import CustomTableHeader from "../../../CustomTableHeader";
import moment from "moment";
import { formatMoney } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => {}, sortType) => [
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Date"
        valueSort={valueSort}
        isActiveSort={sortType == "date"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "date")
        }
      />
    ),
    id: "date",
    accessor: (row) =>
      row.date?.toString() ? (
        <div className="table-tr">
          {`${moment(row.date).format("MMMM DD, YYYY")}`}
        </div>
      ) : (
        <div className="table-tr-last">{row.total_date}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Orders"
        valueSort={valueSort}
        isActiveSort={sortType == "totalOrder"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalOrder")
        }
      />
    ),
    id: "totalOrder",
    accessor: (row) =>
      row.totalOrder?.toString() ? (
        <div className="table-tr">{row.totalOrder}</div>
      ) : (
        <div className="table-tr-last">{row.total_totalOrder}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Revenue"
        valueSort={valueSort}
        isActiveSort={sortType == "revenue"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "revenue")
        }
      />
    ),
    id: "revenue",
    accessor: (row) =>
      row.revenue?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.revenue)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_revenue}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Cost"
        valueSort={valueSort}
        isActiveSort={sortType == "cost"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "cost")
        }
      />
    ),
    id: "cost",
    accessor: (row) =>
      row.cost?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.cost)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_cost}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Tax"
        valueSort={valueSort}
        isActiveSort={sortType == "tax"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "tax")
        }
      />
    ),
    id: "tax",
    accessor: (row) =>
      row.tax?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.tax)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${row.total_tax}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total Profit"
        valueSort={valueSort}
        isActiveSort={sortType == "profit"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "profit")
        }
      />
    ),
    id: "profit",
    accessor: (row) =>
      row.profit?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.profit)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(
          row.total_profit
        )}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Average Order"
        valueSort={valueSort}
        isActiveSort={sortType == "averageOrder"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "averageOrder")
        }
      />
    ),
    id: "averageOrder",
    accessor: (row) =>
      row.averageOrder?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.averageOrder)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(
          row.total_averageOrder
        )}`}</div>
      ),
  },
];

export default columns;
