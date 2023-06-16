function formatDate(datePosted) {
  const dateObj = new Date(datePosted);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate; // Output: "13/06/2014"
}

export default formatDate;
