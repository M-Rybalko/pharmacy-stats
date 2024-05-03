import {SxProps, Theme} from "@mui/material";

export const chartContainer: SxProps<Theme> = {
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
  boxShadow: '5px 5px 20px black',
};

export const title: SxProps<Theme> = {
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 500,
};
