import {PaymentStats} from '@/types/PaymentStats';

export const sliceData = (data: PaymentStats, ends: number[]) => {
  const sliced: PaymentStats = {};
  for (let i = ends[0]; i <= ends[1]; i++) {
    sliced[i.toString()] = data[i.toString()];
  }
  return sliced;
};
