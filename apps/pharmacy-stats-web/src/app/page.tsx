'use client';
import Slider from '@/components/slider';
import {FC, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import {months} from '@/constants/months';
import PaymentsAPI from '@/lib/api/payments/PaymentsAPI';
import CompaniesAPI from '@/lib/api/companies/CompaniesAPI';
import {uniteMonths} from '@/utils/uniteMonths';
import {PaymentStats} from '@/types/PaymentStats';
import {sliceData} from '@/utils/sliceData';
import {marks} from '@/constants/sliderMarks';
import BarChart from '@/components/charts/bar-chart-block/bar-chart';

import * as styles from './MainPage.styles';
import BarChartBlock from "@/components/charts/bar-chart-block/BarChartBlock";

const Home: FC = () => {
  const handleCompanies = async () => {
    const rawData = await CompaniesAPI.getCompanies();
    return uniteMonths(rawData);
  };

  return (
    <>
      <Box sx={styles.barChartBlock}>
        <BarChartBlock />
      </Box>
      <Box sx={styles.stackedChartBlock}></Box>
    </>
  );
};

export default Home;
