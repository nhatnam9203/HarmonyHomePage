export const convertDateData = (date) => {
  let temp = "today";

  switch (date) {
    case "Today":
      temp = "today";
      break;
    case "Yesterday":
      temp = "yesterday";
      break;
    case "This Week":
      temp = "thisWeek";
      break;
    case "Last Week":
      temp = "lastWeek";
      break;
    case "This Month":
      temp = "thisMonth";
      break;
    case "Last Month":
      temp = "lastMonth";
      break;

    default:
      temp = date;
      break;
  }

  return temp;
};
