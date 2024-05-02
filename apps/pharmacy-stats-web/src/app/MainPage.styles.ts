import {SxProps, Theme} from '@mui/material';

export const barChartContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '4px solid white',
  borderRadius: '16px',
  padding: '20px',
  width: '90%',
  height: '100%',
  backgroundColor: 'black',
  color: 'white',
};

export const barChartBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#061e52',
};

export const title: SxProps<Theme> = {
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 500,
};
