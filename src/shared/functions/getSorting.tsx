function desc(a:any, b:any, orderBy:any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getSorting(order:any, orderBy:any) {
  return order === "desc"
    ? (a:any, b:any) => desc(a, b, orderBy)
    : (a:any, b:any) => -desc(a, b, orderBy);
}
export default getSorting;
