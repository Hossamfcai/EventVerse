export function formatedDate(date) {
  const newdate = new Date(date);
  const formattedDate = newdate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}
