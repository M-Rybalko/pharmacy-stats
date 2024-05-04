import {PaymentStats} from '@/types/PaymentStats';

export const sliceData = (data, ends: number[]) => {
  const sliced = {};
  for (let i = ends[0]; i <= ends[1]; i++) {
    sliced[i.toString()] = data[i.toString()];
  }
  return sliced;
};
