import {CompaniesBarHeight, CompanyHeight} from '../types';
import {CompaniesStats} from '@/types/CompaniesStats';

const MAX_CHART_WIDTH = 0.7;
const MAX_BAR_HEIGHT = 0.9;

export const calculateCompanySizes = (
  data: CompaniesStats,
  fullHeight: number,
  fullWidth: number
) => {
  const width = (fullWidth / Object.keys(data).length) * MAX_CHART_WIDTH;
  const heights: CompaniesBarHeight = [];
  let highest = 0;
  for (const stat of Object.values(data)) {
    if (stat.total > highest) highest = stat.total;
  }

  for (const key in data) {
    let totalCompanySum = 0;
    data[key].companies.map(company => (totalCompanySum += company.payment));
    const height = fullHeight * (data[key].total / highest) * MAX_BAR_HEIGHT;
    const companyHeights: CompanyHeight[] = [];
    for (const company of data[key].companies) {
      const companyHeight = (company.payment / totalCompanySum) * height;
      companyHeights.push({
        height: companyHeight,
        price: company.payment,
        name: company.name,
      });
    }
    heights.push({
      month: key,
      total: data[key].total,
      height: height,
      width: width,
      companies: companyHeights,
    });
  }
  return heights;
};
