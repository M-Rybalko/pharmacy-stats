import React, {FC, useEffect, useState} from 'react';
import {uniteMonths} from '@/utils/uniteMonths';
import {sliceData} from '@/utils/sliceData';
import {Box, Typography} from '@mui/material';
import * as styles from '@/components/charts/stacked-chart-block/StackedChartBlock.styles';
import {months} from '@/constants/months';
import Slider from '@/components/slider';
import {marks} from '@/constants/sliderMarks';
import CompaniesAPI from '@/lib/api/companies/CompaniesAPI';
import {CompaniesStats} from '@/types/CompaniesStats';
import StackedChart from '@/components/charts/stacked-chart-block/stacked-chart';

interface StackedChartBlockProps {
  isMobile: boolean;
}
const StackedChartBlock: FC<StackedChartBlockProps> = ({isMobile}) => {
  const [sliderValue, setSliderValue] = useState<number[]>([1, 24]);
  const [data, setData] = useState<CompaniesStats>();
  const [displayed, setDisplayed] = useState<CompaniesStats>();
  const handleCompanies = async () => {
    const rawData = await CompaniesAPI.getCompanies();
    return uniteMonths(rawData);
  };

  useEffect(() => {
    handleCompanies().then(res => {
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
          marks={marks}
          isMobile={isMobile}
          onChange={handleSliderValueChange}
          min={1}
          max={24}
        />
        <StackedChart data={displayed} slider={sliderValue} />
      </Box>
    </>
  );
};

export default StackedChartBlock;
