import React, {FC, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import {months} from '@/constants/months';
import Slider from '@/components/slider';
import {marks} from '@/constants/sliderMarks';
import BarChart from '@/components/charts/bar-chart-block/bar-chart';
import {PaymentStats} from '@/types/PaymentStats';
import PaymentsAPI from '@/lib/api/payments/PaymentsAPI';
import {uniteMonths} from '@/utils/uniteMonths';
import {sliceData} from '@/utils/sliceData';

import * as styles from './BarChartBlock.styles';
const BarChartBlock: FC = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([1, 24]);
  const [data, setData] = useState<PaymentStats>();
  const [displayed, setDisplayed] = useState<PaymentStats>();

  const handlePayments = async () => {
    const rawData = await PaymentsAPI.getAnnualPayments();
    return uniteMonths(rawData);
  };

  useEffect(() => {
    handlePayments().then(res => {
      setData(res);
      setDisplayed(res);
    });
  }, []);
  useEffect(() => {
    if (data) {
      const sliced = sliceData(data, sliderValue);
      setDisplayed(sliced);
    }
  }, [sliderValue]);
  if (!data) return <div>Loading...</div>;
  if (!displayed) return <div>Loading...</div>;

  const handleSliderValueChange = (newValue: number[]) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <Box sx={styles.chartContainer}>
        <Typography variant="h5" sx={styles.title}>
          {`Статистика за період: ${months[sliderValue[0].toString()]} - ${
            months[sliderValue[1].toString()]
          }`}
        </Typography>
        <Slider
          minDistance={1}
          value={sliderValue}
          marks={marks}
          onChange={handleSliderValueChange}
          min={1}
          max={24}
        />
        <BarChart data={displayed} />
      </Box>
    </>
  );
};

export default BarChartBlock;
