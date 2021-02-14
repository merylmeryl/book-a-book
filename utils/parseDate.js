const parseDate = (dateString) => {
  if (dateString == null && dateString == undefined) return "";
  try {
    return new Date(dateString).toLocaleDateString();
  } catch (error) {
    return "";
  }
};
export default parseDate;
