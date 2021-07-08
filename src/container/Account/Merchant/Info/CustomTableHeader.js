import "./Info.scss";
import sortGrey from "@/assets/images/retailer/sortGrey.png";
import sortIcon from "@/assets/images/sort.png";

const CustomTableHeader = ({
  value,
  valueSort,
  onClickSort = () => {},
  isSort = false,
  isActiveSort = false,
}) => {
  return (
    <div className="headerTable" onClick={onClickSort}>
      {value}
      {isSort &&
        (!isActiveSort ? (
          <img src={sortGrey} alt={"image sort"} />
        ) : (
          <img
            src={sortIcon}
            alt={"image sort"}
            style={{
              transform:
                valueSort === "ASC" ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        ))}
    </div>
  );
};

export default CustomTableHeader;
