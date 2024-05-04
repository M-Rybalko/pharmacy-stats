'use client';

import {createTheme} from '@mui/material/styles';

import typography from '@/styles/theme/constants/typography';
import breakpoints from '@/styles/theme/constants/breakpoints';

const theme = createTheme({
  typography: typography,
  breakpoints: breakpoints,
});

export default theme;
