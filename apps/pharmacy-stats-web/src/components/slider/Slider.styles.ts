import {SxProps, Theme} from '@mui/material';

export const slider = (isMobile: boolean): SxProps<Theme> => ({
  '& .MuiSlider-markLabel': {
    color: 'white',
    fontSize: '20px',
    ...(isMobile && {
      fontSize: '15px',
    }),
  },
  color: 'white',
  '& .MuiSlider-mark': {
    height: '20px',
    color: 'white',
  },
  height: '10px',

  '& .MuiSlider-thumb': {
    width: '20px',
    height: '20px',
    backgroundColor: 'primary.300',

    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: 'none',
    },
  },
});
