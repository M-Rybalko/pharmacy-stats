export const uniteMonths = data => {
  const unitedPayments = {};
  let monthNumber = 0;
  for (const year in data) {
    const monthly = data[year];
    for (const month in monthly) {
      monthNumber++;
      unitedPayments[monthNumber.toString()] = monthly[month];
    }
  }
  return unitedPayments;
};
