export const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};
