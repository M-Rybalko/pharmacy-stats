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

interface BarChartBlockProps {
  isMobile: boolean;
}
const BarChartBlock: FC<BarChartBlockProps> = ({isMobile}) => {
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

  if (!data) return <Box sx={styles.chartContainer}>Loading...</Box>;
  if (!displayed) return <Box sx={styles.chartContainer}>Loading...</Box>;

  const handleSliderValueChange = (newValue: number[]) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <Box sx={styles.chartContainer}>
        <Box sx={styles.title}>
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            Статистика за період:
          </Typography>
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            {months[sliderValue[0].toString()]} -{' '}
            {months[sliderValue[1].toString()]}
          </Typography>
        </Box>
        <Slider
          minDistance={1}
          value={sliderValue}
          isMobile={isMobile}
          marks={marks}
          onChange={handleSliderValueChange}
          min={1}
          max={24}
        />
        <BarChart data={displayed} slider={sliderValue} />
      </Box>
    </>
  );
};

export default BarChartBlock;
