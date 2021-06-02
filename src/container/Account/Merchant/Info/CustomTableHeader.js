import "./Info.scss";
import sortIcon from "@/assets/images/sort.png";

const CustomTableHeader = ({
  value,
  valueSort,
  onClickSort = () => {},
  isSort = false,
}) => {
  return (
    <div className="headerTable" onClick={onClickSort}>
      {value}
      {isSort && (
        <img
          src={sortIcon}
          alt={"image sort"}
          style={{
            transform: valueSort === "ASC" ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      )}
    </div>
  );
};

export default CustomTableHeader;
