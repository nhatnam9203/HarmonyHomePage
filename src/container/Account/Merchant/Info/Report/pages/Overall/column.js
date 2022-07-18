import CustomTableHeader from "../../../CustomTableHeader";
import moment from "moment";
import { formatMoney, FormatPrice } from "@/util";
import "../../../Info.scss";
import "../style.scss";

const columns = (valueSort, onClickSort = () => { }, sortType) => [
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
    width: 150,
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
        value="Cost Of Product"
        valueSort={valueSort}
        isActiveSort={sortType == "costOfProduct"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "costOfProduct")
        }
      />
    ),
    id: "costOfProduct",
    width: 150,
    accessor: (row) =>
      row.costOfProduct?.toString() ? (
        <div className="table-tr">
          {`$ ${formatMoney(row.costOfProduct)}`}
        </div>
      ) : (
        <div className="table-tr-last">
          {`$ ${formatMoney(row.total_costOfProduct)}`}
        </div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Gross Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "grossSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "grossSales")
        }
      />
    ),
    id: "grossSales",
    width: 150,
    accessor: (row) =>
      row.grossSales?.toString() ? (
        <div className="table-tr">
          {`$ ${row.grossSales}`}
        </div>
      ) : (
        <div className="table-tr-last">
          {`$ ${row.total_grossSales}`}
        </div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Returns"
        valueSort={valueSort}
        isActiveSort={sortType == "returns"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "returns")
        }
      />
    ),
    id: "returns",
    width: 150,
    accessor: (row) =>
      row.returns?.toString() ? (
        <div style={{ color: row?.returns > 0 ? "#333" : "red" }} className="table-tr">
          {`$ ${formatMoney(row.returns)}`}
        </div>
      ) : (
        <div style={{ color: formatMoney(row?.total_returns) > 0 ? "#333" : "red" }} className="table-tr-last">
          {`$ ${formatMoney(row.total_returns)}`}
        </div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Discount & Comps"
        valueSort={valueSort}
        isActiveSort={sortType == "discount"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "discount")
        }
      />
    ),
    id: "discount",
    width: 180,
    accessor: (row) =>
      row.discount?.toString() ? (
        <div style={{ color: row?.discount > 0 ? "#333" : "red" }} className="table-tr">
          {`$ ${formatMoney(row.discount)}`}
        </div>
      ) : (
        <div style={{ color: row?.total_discount > 0 ? "#333" : "red" }} className="table-tr-last">
          {`$ ${formatMoney(row.total_discount)}`}
        </div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Net Sales"
        valueSort={valueSort}
        isActiveSort={sortType == "netSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "netSales")
        }
      />
    ),
    id: "netSales",
    width: 150,
    accessor: (row) =>
      row.netSales?.toString() ? (
        <div className="table-tr">{row.netSales}</div>
      ) : (
        <div className="table-tr-last">{row.total_netSales}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Gift Card"
        valueSort={valueSort}
        isActiveSort={sortType == "giftCardSales"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "giftCardSales")
        }
      />
    ),
    id: "giftCardSales",
    width: 150,
    accessor: (row) =>
      row.revenue?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.giftCardSales)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_giftCardSales)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Tax"
        valueSort={valueSort}
        isActiveSort={sortType == "tax"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "tax")
        }
      />
    ),
    id: "tax",
    width: 150,
    accessor: (row) =>
      row.tax?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.tax)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(row.total_tax)}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Tip"
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
        value="Refunds"
        valueSort={valueSort}
        isActiveSort={sortType == "refunds"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "refunds")
        }
      />
    ),
    id: "refunds",
    width: 150,
    accessor: (row) =>
      row.refunds?.toString() ? (
        <div style={{ color: row?.returns > 0 ? "#333" : "red" }} className="table-tr">
          {`$ ${formatMoney(row.refunds)}`}
        </div>
      ) : (
        <div style={{ color: formatMoney(row?.total_refunds) > 0 ? "#333" : "red" }} className="table-tr-last">
          {`$ ${formatMoney(
            row.total_refunds
          )}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Total End Day"
        valueSort={valueSort}
        isActiveSort={sortType == "totalEndDay"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "totalEndDay")
        }
      />
    ),
    id: "totalEndDay",
    width: 150,
    accessor: (row) =>
      row.totalEndDay?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.totalEndDay)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(
          row.total_totalEndDay
        )}`}</div>
      ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Profit"
        valueSort={valueSort}
        isActiveSort={sortType == "profit"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "profit")
        }
      />
    ),
    id: "profit",
    width: 150,
    accessor: (row) =>
      row.profit?.toString() ? (
        <div className="table-tr">{`$ ${formatMoney(row.profit)}`}</div>
      ) : (
        <div className="table-tr-last">{`$ ${formatMoney(
          row.total_profit
        )}`}</div>
      ),
  },
];

export default columns;
