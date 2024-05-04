import {SxProps, Theme} from '@mui/material';

export const chartBlock: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '200vh',
  background:
    'linear-gradient(0deg, rgba(82,67,255,1) 50%, rgba(0,185,255,1) 100%)',
  paddingY: '50px',
  gap: '50px',
};
