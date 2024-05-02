import {PaymentStats} from '@/types/PaymentStats';
import {PaymentBarHeight} from '@/components/chart/types';

const MAX_CHART_WIDTH = 0.7;
const MAX_BAR_HEIGHT = 0.7;

export const calculateSizes = (
  data: PaymentStats,
  fullHeight: number,
  fullWidth: number
) => {
  const width = (fullWidth / Object.keys(data).length) * MAX_CHART_WIDTH;
  console.log(width);
  const heights: PaymentBarHeight = [];
  let highest = 0;
  for (const stat of Object.values(data)) {
    if (stat > highest) highest = stat;
  }
  for (const key in data) {
    const height = fullHeight * (data[key] / highest) * MAX_BAR_HEIGHT;
    heights.push({
      month: key,
      price: data[key],
      height: height,
      width: width,
    });
  }
  return heights;
};
