import CustomTableHeader from "../CustomTableHeader";
import { formatMoney } from "@/util";
import product_default from "@/assets/images/product_default.png";
import "../Info.scss";
import "./style.scss";

const columns = (valueSort, onClickSort, sortType) => [
  {
    Header: <CustomTableHeader value="Image" />,
    id: "imageUrl",
    accessor: (row) => (
      <div className="table-tr">
        <img
          className="img-inventory"
          src={row.imageUrl ? row.imageUrl : product_default}
          alt="img"
        />
      </div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Product name"
        valueSort={valueSort}
        isActiveSort={sortType == "name"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "name")
        }
      />
    ),
    id: "name",
    accessor: (row) => <div className="table-tr">{`${row.name}`}</div>,
    width: 200,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Category"
        valueSort={valueSort}
        isActiveSort={sortType == "categoryName"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "categoryName")
        }
      />
    ),
    id: "categoryName",
    accessor: (row) => <div className="table-tr">{`${row.categoryName}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="SKU"
        valueSort={valueSort}
        isActiveSort={sortType == "sku"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "sku")
        }
      />
    ),
    id: "sku",
    accessor: (row) => <div className="table-tr">{`${row.sku}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Price"
        valueSort={valueSort}
        isActiveSort={sortType == "price"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "price")
        }
      />
    ),
    id: "price",
    accessor: (row) => (
      <div className="table-tr">{`$ ${formatMoney(row.price)}`}</div>
    ),
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Quantity"
        valueSort={valueSort}
        isActiveSort={sortType == "quantity"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "quantity")
        }
      />
    ),
    id: "quantity",
    accessor: (row) => <div className="table-tr">{`${row.quantity}`}</div>,
  },
  {
    Header: (
      <CustomTableHeader
        isSort={true}
        value="Need to order"
        valueSort={valueSort}
        isActiveSort={sortType == "needToorDer"}
        onClickSort={() =>
          onClickSort(valueSort === "DESC" ? "ASC" : "DESC", "needToorDer")
        }
      />
    ),
    id: "needToorDer",
    accessor: (row) => <div className="table-tr">{`${row.needToorDer}`}</div>,
    width: 170,
  },
];

export default columns;
