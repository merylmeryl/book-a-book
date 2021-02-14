const parseDate = (dateString) => {
  if (dateString == null && dateString == undefined) return "";
  try {
    let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    let jsonToDate = new Date(dateString);
    return new Intl.DateTimeFormat("default", options).format(jsonToDate);
  } catch (error) {
    return "";
  }
};
export default parseDate;
