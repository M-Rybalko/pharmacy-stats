'use client';
import {FC} from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import BarChartBlock from '@/components/charts/bar-chart-block/BarChartBlock';
import StackedChartBlock from '@/components/charts/stacked-chart-block/StackedChartBlock';
import * as styles from './MainPage.styles';
import theme from '@/styles/theme';

const Home: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <>
      <Box sx={styles.chartBlock}>
        <Typography
          variant="h4"
          color="white"
          textAlign="center"
          fontWeight={500}
        >
          Візуалізація відшкодувань вартості ліків за програмою “Доступні ліки”
        </Typography>
        <BarChartBlock isMobile={isMobile} />
        <StackedChartBlock isMobile={isMobile} />
      </Box>
    </>
  );
};

export default Home;
